import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import tinycolor from 'tinycolor2';
import useResize from '@kne/use-resize';
import styles from './style.module.scss';
import defaultColors, { withColors } from '../defaultColors';

const DEFAULT_COLOR = defaultColors.Blue;
const DEFAULT_SECONDARY_COLOR = defaultColors.Purple;
const DEFAULT_ACCENT_COLOR = defaultColors.Pink;
const DEFAULT_BACKGROUND = '#ffffff';

const toUnit = value => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
};

const toTinyColor = (value, fallback) => {
  const color = tinycolor(value);
  return color.isValid() ? color : tinycolor(fallback);
};

const toDecimal = value => value.toFixed(3);

const getFlowDuration = (baseDuration, flowSpeed) => `${(baseDuration / flowSpeed).toFixed(2)}s`;

const getThemeStyle = ({ color, secondaryColor, accentColor, background, glow, variant }) => {
  const primary = toTinyColor(color, DEFAULT_COLOR);
  const secondary = toTinyColor(secondaryColor, DEFAULT_SECONDARY_COLOR);
  const accent = toTinyColor(accentColor, DEFAULT_ACCENT_COLOR);
  const intensity = Math.max(0.2, Number(glow) || 1);
  const isVivid = variant === 'vivid';
  const ringPrimary = isVivid ? primary.clone().saturate(56).brighten(30) : tinycolor.mix(primary.toHexString(), '#ffffff', 20).saturate(18).brighten(28);
  const ringSecondary = isVivid ? secondary.clone().saturate(54).brighten(30) : tinycolor.mix(secondary.toHexString(), '#ffffff', 20).saturate(16).brighten(28);
  const ringAccent = isVivid ? accent.clone().saturate(58).brighten(32) : tinycolor.mix(accent.toHexString(), '#ffffff', 18).saturate(18).brighten(30);

  return {
    '--aurora-card-primary': primary.toHexString(),
    '--aurora-card-secondary': secondary.toHexString(),
    '--aurora-card-accent': accent.toHexString(),
    '--aurora-card-primary-soft': primary
      .clone()
      .setAlpha(Math.min((isVivid ? 0.3 : 0.312) * intensity, isVivid ? 0.432 : 0.408))
      .toRgbString(),
    '--aurora-card-secondary-soft': secondary
      .clone()
      .setAlpha(Math.min((isVivid ? 0.288 : 0.3) * intensity, isVivid ? 0.408 : 0.384))
      .toRgbString(),
    '--aurora-card-accent-soft': accent
      .clone()
      .setAlpha(Math.min((isVivid ? 0.276 : 0.288) * intensity, isVivid ? 0.396 : 0.372))
      .toRgbString(),
    '--aurora-card-primary-strong': ringPrimary.toHexString(),
    '--aurora-card-secondary-strong': ringSecondary.toHexString(),
    '--aurora-card-accent-strong': ringAccent.toHexString(),
    '--aurora-card-surface': background || DEFAULT_BACKGROUND,
    '--aurora-card-border': tinycolor
      .mix('#ffffff', primary.toHexString(), isVivid ? 48 : 22)
      .setAlpha(isVivid ? 0.348 : 0.168)
      .toRgbString(),
    '--aurora-card-shadow': tinycolor
      .mix(primary.toHexString(), accent.toHexString(), 42)
      .setAlpha(Math.min((isVivid ? 0.204 : 0.084) * intensity, isVivid ? 0.276 : 0.12))
      .toRgbString(),
    '--aurora-card-ring-glow': tinycolor
      .mix(ringPrimary.toHexString(), ringAccent.toHexString(), 48)
      .setAlpha(Math.min((isVivid ? 0.552 : 0.312) * intensity, isVivid ? 0.6 : 0.408))
      .toRgbString(),
    '--aurora-card-ring-glow-soft': tinycolor
      .mix(ringSecondary.toHexString(), ringAccent.toHexString(), 52)
      .setAlpha(Math.min((isVivid ? 0.468 : 0.228) * intensity, isVivid ? 0.564 : 0.312))
      .toRgbString(),
    '--aurora-card-aura-opacity': toDecimal(Math.min((isVivid ? 0.144 : 0.156) + (isVivid ? 0.108 : 0.132) * intensity, isVivid ? 0.3 : 0.36)),
    '--aurora-card-pulse-opacity': toDecimal(Math.min((isVivid ? 0.336 : 0.264) + (isVivid ? 0.144 : 0.108) * intensity, isVivid ? 0.576 : 0.492)),
    '--aurora-card-border-opacity': toDecimal(Math.min((isVivid ? 0.6 : 0.444) + (isVivid ? 0.036 : 0.06) * intensity, 0.6)),
    '--aurora-card-border-glow-opacity': toDecimal(Math.min((isVivid ? 0.396 : 0.144) + (isVivid ? 0.18 : 0.096) * intensity, isVivid ? 0.588 : 0.276))
  };
};

const MovingArc = ({ pathRef, duration = 3000, offset = 0, arcRatio = 0.25 }) => {
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current) return;

    let initialized = false;

    const animate = timestamp => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const path = pathRef.current;
      const length = path?.getTotalLength();

      if (length) {
        if (!initialized) {
          const visible = length * arcRatio;
          path.style.strokeDasharray = `${visible} ${length - visible}`;
          initialized = true;
        }
        const pxPerMillisecond = length / duration;
        const currentPos = (elapsed * pxPerMillisecond + length * offset) % length;
        path.style.strokeDashoffset = -currentPos;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [pathRef, duration, offset, arcRatio]);

  return null;
};

const AuroraCard = ({
  className,
  style,
  children,
  width = '100%',
  minHeight = 220,
  radius = 32,
  padding = 28,
  ringWidth = 2.5,
  blur = 28,
  color = DEFAULT_COLOR,
  secondaryColor = DEFAULT_SECONDARY_COLOR,
  accentColor = DEFAULT_ACCENT_COLOR,
  background = DEFAULT_BACKGROUND,
  glow = 1,
  flowSpeed = 1,
  lineLength = 0.5,
  variant = 'soft',
  animated = true,
  ...props
}) => {
  const pathRef = useRef(null);
  const path2Ref = useRef(null);
  const [rotateSize, setRotateSize] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const normalizedFlowSpeed = Math.max(0.2, Number(flowSpeed) || 1);
  const normalizedLineLength = Math.max(0, Math.min(1, Number(lineLength) || 0));
  const arcRatio = normalizedLineLength * 0.5;

  const ringRef = useResize(el => {
    const { width: rectWidth, height: rectHeight } = el.getBoundingClientRect();
    const ringWidthValue = Number.parseFloat(`${ringWidth}`) || 0;
    const diagonal = Math.sqrt(rectWidth ** 2 + rectHeight ** 2);
    const nextSize = diagonal + ringWidthValue * 6;

    setRotateSize(current => (current !== null && Math.abs(current - nextSize) < 0.5 ? current : nextSize));
    setDimensions({ width: rectWidth, height: rectHeight });
  });

  const flowDuration = (3.6 / normalizedFlowSpeed) * 1000;
  const flowDurationSlow = getFlowDuration(5.4, normalizedFlowSpeed);
  const pulseDuration = getFlowDuration(2.8, normalizedFlowSpeed);

  const primary = toTinyColor(color, DEFAULT_COLOR);
  const secondary = toTinyColor(secondaryColor, DEFAULT_SECONDARY_COLOR);
  const accent = toTinyColor(accentColor, DEFAULT_ACCENT_COLOR);
  const isVivid = variant === 'vivid';
  const intensity = Math.max(0.2, Number(glow) || 1);
  const ringPrimary = isVivid ? primary.clone().saturate(56).brighten(30) : tinycolor.mix(primary.toHexString(), '#ffffff', 20).saturate(18).brighten(28);
  const ringSecondary = isVivid ? secondary.clone().saturate(54).brighten(30) : tinycolor.mix(secondary.toHexString(), '#ffffff', 20).saturate(16).brighten(28);
  const ringAccent = isVivid ? accent.clone().saturate(58).brighten(32) : tinycolor.mix(accent.toHexString(), '#ffffff', 18).saturate(18).brighten(30);
  const ringPrimaryHexString = ringPrimary.toHexString();
  const ringSecondaryHexString = ringSecondary.toHexString();

  const { width: svgWidth, height: svgHeight } = dimensions;
  const rxValue = Number.parseFloat(`${radius}`) || 32;
  const ryValue = rxValue;

  return (
    <div
      {...props}
      className={classNames(styles['aurora-card'], styles[variant] || styles.soft, !animated && styles.static, className)}
      style={{
        '--aurora-card-width': toUnit(width),
        '--aurora-card-min-height': toUnit(minHeight),
        '--aurora-card-radius': toUnit(radius),
        '--aurora-card-padding': toUnit(padding),
        '--aurora-card-ring-width': toUnit(ringWidth),
        '--aurora-card-blur': toUnit(blur),
        '--aurora-card-rotate-size': rotateSize ? `${rotateSize}px` : undefined,
        '--aurora-card-flow-duration': getFlowDuration(3.6, normalizedFlowSpeed),
        '--aurora-card-flow-duration-slow': flowDurationSlow,
        '--aurora-card-pulse-duration': pulseDuration,
        ...getThemeStyle({ color, secondaryColor, accentColor, background, glow, variant }),
        ...style
      }}
    >
      <span className={styles.aura} />
      <span className={styles.pulse} />
      <div className={styles.ring} ref={ringRef}>
        <span className={styles['border-glow']}>
          {animated && svgWidth > 0 && svgHeight > 0 && (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={styles['border-svg']} width="100%" height="100%">
                <rect fill="none" width={svgWidth} height={svgHeight} rx={rxValue} ry={ryValue} ref={pathRef} className={styles['arc-primary']} style={{ stroke: ringPrimaryHexString }} />
                <rect fill="none" width={svgWidth} height={svgHeight} rx={rxValue} ry={ryValue} ref={path2Ref} className={styles['arc-accent']} style={{ stroke: ringSecondaryHexString }} />
              </svg>
              <MovingArc pathRef={pathRef} duration={flowDuration} arcRatio={arcRatio} />
              <MovingArc pathRef={path2Ref} duration={flowDuration} offset={0.5} arcRatio={arcRatio} />
            </>
          )}
        </span>
        <div className={styles.surface}>{children}</div>
      </div>
    </div>
  );
};

withColors(AuroraCard);

export default AuroraCard;
