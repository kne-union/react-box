import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import tinycolor from 'tinycolor2';
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
      .setAlpha(Math.min((isVivid ? 0.5 : 0.52) * intensity, isVivid ? 0.72 : 0.68))
      .toRgbString(),
    '--aurora-card-secondary-soft': secondary
      .clone()
      .setAlpha(Math.min((isVivid ? 0.48 : 0.5) * intensity, isVivid ? 0.68 : 0.64))
      .toRgbString(),
    '--aurora-card-accent-soft': accent
      .clone()
      .setAlpha(Math.min((isVivid ? 0.46 : 0.48) * intensity, isVivid ? 0.66 : 0.62))
      .toRgbString(),
    '--aurora-card-primary-strong': ringPrimary.toHexString(),
    '--aurora-card-secondary-strong': ringSecondary.toHexString(),
    '--aurora-card-accent-strong': ringAccent.toHexString(),
    '--aurora-card-surface': background || DEFAULT_BACKGROUND,
    '--aurora-card-border': tinycolor
      .mix('#ffffff', primary.toHexString(), isVivid ? 48 : 22)
      .setAlpha(isVivid ? 0.58 : 0.28)
      .toRgbString(),
    '--aurora-card-shadow': tinycolor
      .mix(primary.toHexString(), accent.toHexString(), 42)
      .setAlpha(Math.min((isVivid ? 0.34 : 0.14) * intensity, isVivid ? 0.46 : 0.2))
      .toRgbString(),
    '--aurora-card-ring-glow': tinycolor
      .mix(ringPrimary.toHexString(), ringAccent.toHexString(), 48)
      .setAlpha(Math.min((isVivid ? 0.92 : 0.52) * intensity, isVivid ? 1 : 0.68))
      .toRgbString(),
    '--aurora-card-ring-glow-soft': tinycolor
      .mix(ringSecondary.toHexString(), ringAccent.toHexString(), 52)
      .setAlpha(Math.min((isVivid ? 0.78 : 0.38) * intensity, isVivid ? 0.94 : 0.52))
      .toRgbString(),
    '--aurora-card-aura-opacity': toDecimal(Math.min((isVivid ? 0.24 : 0.26) + (isVivid ? 0.18 : 0.22) * intensity, isVivid ? 0.5 : 0.6)),
    '--aurora-card-pulse-opacity': toDecimal(Math.min((isVivid ? 0.56 : 0.44) + (isVivid ? 0.24 : 0.18) * intensity, isVivid ? 0.96 : 0.82)),
    '--aurora-card-border-opacity': toDecimal(Math.min((isVivid ? 1 : 0.74) + (isVivid ? 0.06 : 0.1) * intensity, 1)),
    '--aurora-card-border-glow-opacity': toDecimal(Math.min((isVivid ? 0.66 : 0.24) + (isVivid ? 0.3 : 0.16) * intensity, isVivid ? 0.98 : 0.46))
  };
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
  variant = 'soft',
  animated = true,
  ...props
}) => {
  const ringRef = useRef(null);
  const [rotateSize, setRotateSize] = useState(null);
  const normalizedFlowSpeed = Math.max(0.2, Number(flowSpeed) || 1);

  useEffect(() => {
    const element = ringRef.current;

    if (!element || typeof window === 'undefined') {
      return undefined;
    }

    const ringWidthValue = Number.parseFloat(`${ringWidth}`) || 0;
    const updateRotateSize = () => {
      const { width: rectWidth, height: rectHeight } = element.getBoundingClientRect();
      const diagonal = Math.sqrt(rectWidth ** 2 + rectHeight ** 2);
      const nextSize = diagonal + ringWidthValue * 6;

      setRotateSize(current => (current !== null && Math.abs(current - nextSize) < 0.5 ? current : nextSize));
    };

    updateRotateSize();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateRotateSize);

      return () => {
        window.removeEventListener('resize', updateRotateSize);
      };
    }

    const resizeObserver = new ResizeObserver(() => {
      updateRotateSize();
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ringWidth, width, minHeight, radius, padding]);

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
        '--aurora-card-flow-duration': getFlowDuration(4.8, normalizedFlowSpeed),
        '--aurora-card-flow-duration-slow': getFlowDuration(7.2, normalizedFlowSpeed),
        '--aurora-card-pulse-duration': getFlowDuration(3.8, normalizedFlowSpeed),
        ...getThemeStyle({ color, secondaryColor, accentColor, background, glow, variant }),
        ...style
      }}
    >
      <span className={styles.aura} />
      <span className={styles.pulse} />
      <div className={styles.ring} ref={ringRef}>
        <span className={styles['border-glow']} />
        <div className={styles.surface}>{children}</div>
      </div>
    </div>
  );
};

withColors(AuroraCard);

export default AuroraCard;
