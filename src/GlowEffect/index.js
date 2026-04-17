import { Children, useEffect, useRef, useState, useCallback, memo, isValidElement } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';
import defaultColors, { withColors } from '../defaultColors';

const DEFAULT_COLOR = defaultColors.Blue;
const DEFAULT_SECONDARY_COLOR = defaultColors.Purple;
const DEFAULT_ACCENT_COLOR = defaultColors.Pink;
const DEFAULT_RADIUS = '12px';

const toUnit = value => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};

const GlowEffectInner = memo(
  ({
    glowRef,
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = 'default',
    glow = false,
    disabled = false,
    movementDuration = 0.5,
    borderWidth = 1,
    color = DEFAULT_COLOR,
    secondaryColor = DEFAULT_SECONDARY_COLOR,
    accentColor = DEFAULT_ACCENT_COLOR
  }) => {
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef(0);
    const currentAngleRef = useRef(0);

    const animateToAngle = useCallback(
      targetAngle => {
        const element = glowRef.current;
        if (!element) return;

        const startAngle = currentAngleRef.current;
        let diff = ((targetAngle - startAngle + 180) % 360) - 180;
        if (diff < -180) diff += 360;

        const duration = movementDuration * 1000;
        const startTime = performance.now();

        const step = now => {
          if (!glowRef.current) return;

          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const currentAngle = startAngle + diff * eased;

          currentAngleRef.current = currentAngle;
          element.style.setProperty('--start', String(currentAngle));

          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(step);
          }
        };

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(step);
      },
      [glowRef, movementDuration]
    );

    const handleMove = useCallback(
      e => {
        const element = glowRef.current;
        if (!element) return;

        // Use the parent wrapper for bounds
        const wrapper = element.parentElement;
        if (!wrapper) return;

        const { left, top, width, height } = wrapper.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        lastPosition.current = { x: mouseX, y: mouseY };

        const center = [left + width * 0.5, top + height * 0.5];
        const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

        if (distanceFromCenter < inactiveRadius) {
          if (!glow) {
            element.style.setProperty('--active', '0');
          }
          return;
        }

        const isActive = mouseX > left - proximity && mouseX < left + width + proximity && mouseY > top - proximity && mouseY < top + height + proximity;

        if (glow) {
          element.style.setProperty('--active', '1');
        } else {
          element.style.setProperty('--active', isActive ? '1' : '0');
        }

        if (!isActive) return;

        const targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;
        animateToAngle(targetAngle);
      },
      [glowRef, inactiveZone, proximity, glow, animateToAngle]
    );

    useEffect(() => {
      if (disabled) return;

      const element = glowRef.current;
      if (glow && element) {
        element.style.setProperty('--active', '1');
      }

      const onPointerMove = e => {
        requestAnimationFrame(() => handleMove(e));
      };
      const onScroll = () => {
        requestAnimationFrame(() => handleMove({ clientX: lastPosition.current.x, clientY: lastPosition.current.y }));
      };

      document.body.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        document.body.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('scroll', onScroll);
      };
    }, [handleMove, disabled, glow, glowRef]);

    const gradientDefault = `radial-gradient(circle, ${secondaryColor} 10%, transparent 20%),
    radial-gradient(circle at 40% 40%, ${accentColor} 5%, transparent 15%),
    radial-gradient(circle at 60% 60%, ${color} 10%, transparent 20%),
    radial-gradient(circle at 40% 60%, ${secondaryColor} 10%, transparent 20%),
    repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      ${secondaryColor} 0%,
      ${accentColor} calc(25% / 5),
      ${color} calc(50% / 5),
      ${secondaryColor} calc(75% / 5),
      ${secondaryColor} calc(100% / 5)
    )`;

    const gradientWhite = `repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      #ffffff,
      #ffffff calc(25% / 5)
    )`;

    const gradient = variant === 'white' ? gradientWhite : gradientDefault;

    if (disabled && !glow) {
      return null;
    }

    return (
      <div
        ref={glowRef}
        style={{
          '--blur': `${blur}px`,
          '--spread': spread,
          '--start': '0',
          '--active': glow ? '1' : '0',
          '--glow-border-width': `${borderWidth}px`,
          '--gradient': gradient
        }}
        className={classNames(styles['glow-effect'], blur > 0 && styles['glow-effect-blur'])}
      />
    );
  }
);

GlowEffectInner.displayName = 'GlowEffectInner';

const GlowEffect = ({
  className,
  style: customStyle,
  children,
  radius,
  // Glow effect props
  blur = 0,
  inactiveZone = 0.7,
  proximity = 64,
  spread = 40,
  variant = 'default',
  glow = false,
  disabled = false,
  movementDuration = 0.5,
  borderWidth = 1,
  color = DEFAULT_COLOR,
  secondaryColor = DEFAULT_SECONDARY_COLOR,
  accentColor = DEFAULT_ACCENT_COLOR,
  ...props
}) => {
  const contentRef = useRef(null);
  const glowRef = useRef(null);

  const childElement = Children.count(children) === 1 ? Children.only(children) : null;

  const [computedChildProps, setComputedChildProps] = useState({ radius: undefined, borderWidth: undefined });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const frameId = requestAnimationFrame(() => {
      const childNode = contentRef.current?.firstElementChild;
      if (!childNode) return;
      const computedStyle = window.getComputedStyle(childNode);
      const r = computedStyle.borderRadius;
      const bw = computedStyle.borderTopWidth;
      const radius = r && r !== '0px' ? r : undefined;
      const childBorderWidth = bw && bw !== '0px' ? parseFloat(bw) : 0;
      setComputedChildProps(prev => {
        if (prev.radius === radius && prev.borderWidth === childBorderWidth) return prev;
        return { radius, borderWidth: childBorderWidth };
      });
    });

    return () => cancelAnimationFrame(frameId);
  }, [childElement]);

  const resolvedRadius = computedChildProps.radius || DEFAULT_RADIUS;

  return (
    <div
      {...props}
      className={classNames(styles['glow-effect-wrapper'], className)}
      style={{
        '--glow-effect-radius': toUnit(resolvedRadius),
        '--glow-border-width': `${borderWidth}px`,
        ...customStyle
      }}
    >
      <GlowEffectInner
        glowRef={glowRef}
        blur={blur}
        inactiveZone={inactiveZone}
        proximity={proximity}
        spread={spread}
        variant={variant}
        glow={glow}
        disabled={disabled}
        movementDuration={movementDuration}
        borderWidth={borderWidth}
        color={color}
        secondaryColor={secondaryColor}
        accentColor={accentColor}
      />
      <div ref={contentRef} className={styles['glow-effect-content']}>
        {children}
      </div>
    </div>
  );
};

withColors(GlowEffect);

export default GlowEffect;
