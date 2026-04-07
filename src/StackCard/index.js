import { Children, isValidElement, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

const DEFAULT_LAYER_BACKGROUND = '#ffffff';
const DEFAULT_LAYER_BORDER_COLOR = 'rgba(15, 23, 42, 0.08)';
const DEFAULT_LAYER_RADIUS = '12px';
const BORDER_STYLE_KEYWORDS = new Set(['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']);
const TRANSPARENT_VALUES = new Set(['transparent', 'rgba(0, 0, 0, 0)', 'rgba(0,0,0,0)']);

const toUnit = value => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
};

const getFirstDefinedValue = (...values) => values.find(value => value !== undefined && value !== null && value !== '');

const getBorderColorFromBorder = border => {
  if (typeof border !== 'string') {
    return undefined;
  }

  const colorMatch = border.match(/(rgba?\([^)]+\)|hsla?\([^)]+\)|#[\da-fA-F]{3,8}|transparent|currentColor)$/i);

  if (colorMatch) {
    return colorMatch[1];
  }

  const parts = border.trim().split(/\s+/);
  const lastPart = parts[parts.length - 1];

  if (!lastPart || BORDER_STYLE_KEYWORDS.has(lastPart)) {
    return undefined;
  }

  return lastPart;
};

const getDeclaredChildVisualProps = child => {
  if (!isValidElement(child)) {
    return {
      background: undefined,
      borderColor: undefined,
      radius: undefined
    };
  }

  const childStyle = child.props?.style || {};

  return {
    background: getFirstDefinedValue(childStyle.background, childStyle.backgroundColor, child.props?.background, child.props?.backgroundColor),
    borderColor: child.props?.border === false ? 'transparent' : getFirstDefinedValue(childStyle.borderColor, getBorderColorFromBorder(childStyle.border), child.props?.borderColor),
    radius: getFirstDefinedValue(childStyle.borderRadius, child.props?.radius)
  };
};

const getOpaqueColor = value => {
  if (typeof value !== 'string') {
    return undefined;
  }

  return TRANSPARENT_VALUES.has(value) ? undefined : value;
};

const getComputedBackground = computedStyle => {
  if (!computedStyle) {
    return undefined;
  }

  if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {
    return computedStyle.backgroundImage;
  }

  return getOpaqueColor(computedStyle.backgroundColor);
};

const getComputedChildVisualProps = element => {
  if (!element || typeof window === 'undefined') {
    return {
      background: undefined,
      borderColor: undefined,
      radius: undefined
    };
  }

  const computedStyle = window.getComputedStyle(element);
  const hasBorder = !['none', 'hidden'].includes(computedStyle.borderTopStyle) && computedStyle.borderTopWidth !== '0px';

  return {
    background: getComputedBackground(computedStyle),
    borderColor: hasBorder ? computedStyle.borderTopColor : 'transparent',
    radius: computedStyle.borderRadius || undefined
  };
};

const OFFSET_DIRECTIONS = {
  'right-bottom': [1, 1],
  'right-top': [1, -1],
  'left-bottom': [-1, 1],
  'left-top': [-1, -1]
};

const StackCard = ({
  className,
  style,
  children,
  layers = 2,
  offset = 8,
  offsetDirection = 'right-bottom',
  radius,
  layerBackground,
  layerColor,
  layerBorderColor,
  layerShadow = '0 6px 20px rgba(15, 23, 42, 0.06)',
  opacityStep = 0.12,
  minLayerOpacity = 0.35,
  ...props
}) => {
  const contentRef = useRef(null);

  if (Children.count(children) !== 1) {
    throw new Error('StackCard 只允许传入一个子节点');
  }

  const childElement = Children.only(children);
  const declaredChildVisualProps = getDeclaredChildVisualProps(childElement);
  const [computedChildVisualProps, setComputedChildVisualProps] = useState({
    childElement,
    background: undefined,
    borderColor: undefined,
    radius: undefined
  });
  const activeComputedChildVisualProps =
    computedChildVisualProps.childElement === childElement
      ? computedChildVisualProps
      : {
          childElement,
          background: undefined,
          borderColor: undefined,
          radius: undefined
        };
  const normalizedLayers = Math.max(0, Math.floor(layers));
  const normalizedOpacityStep = Math.max(0, Number(opacityStep) || 0);
  const normalizedMinOpacity = Math.min(1, Math.max(0, Number(minLayerOpacity) || 0));
  const normalizedOffsetDirection = OFFSET_DIRECTIONS[offsetDirection] ? offsetDirection : 'right-bottom';
  const [xDirection, yDirection] = OFFSET_DIRECTIONS[normalizedOffsetDirection];
  const resolvedLayerBackground = getFirstDefinedValue(layerColor, layerBackground, activeComputedChildVisualProps.background, declaredChildVisualProps.background, DEFAULT_LAYER_BACKGROUND);
  const resolvedLayerBorderColor = getFirstDefinedValue(layerBorderColor, activeComputedChildVisualProps.borderColor, declaredChildVisualProps.borderColor, DEFAULT_LAYER_BORDER_COLOR);
  const resolvedLayerRadius = getFirstDefinedValue(radius, activeComputedChildVisualProps.radius, declaredChildVisualProps.radius, DEFAULT_LAYER_RADIUS);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      const childNode = contentRef.current?.firstElementChild;
      const nextVisualProps = getComputedChildVisualProps(childNode);

      setComputedChildVisualProps(previousValue => {
        if (previousValue.childElement === childElement && previousValue.background === nextVisualProps.background && previousValue.borderColor === nextVisualProps.borderColor && previousValue.radius === nextVisualProps.radius) {
          return previousValue;
        }

        return {
          childElement,
          ...nextVisualProps
        };
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [childElement]);

  return (
    <div
      {...props}
      className={classNames(styles['stack-card'], className)}
      style={{
        '--stack-card-layers': normalizedLayers,
        '--stack-card-offset': toUnit(offset),
        '--stack-card-tail': `calc(${normalizedLayers} * var(--stack-card-offset))`,
        '--stack-card-radius': toUnit(resolvedLayerRadius),
        '--stack-card-layer-bg': resolvedLayerBackground,
        '--stack-card-layer-border': resolvedLayerBorderColor,
        '--stack-card-layer-shadow': layerShadow,
        '--stack-card-margin-right': xDirection > 0 ? 'var(--stack-card-tail)' : '0px',
        '--stack-card-margin-left': xDirection < 0 ? 'var(--stack-card-tail)' : '0px',
        '--stack-card-margin-bottom': yDirection > 0 ? 'var(--stack-card-tail)' : '0px',
        '--stack-card-margin-top': yDirection < 0 ? 'var(--stack-card-tail)' : '0px',
        ...style
      }}
    >
      <div className={styles.stage}>
        {Array.from({ length: normalizedLayers }).map((_, index) => {
          const depth = normalizedLayers - index;
          const shift = index;
          const opacity = Math.max(normalizedMinOpacity, 1 - depth * normalizedOpacityStep);
          const xOffset = `calc(${shift} * var(--stack-card-offset) * ${xDirection})`;
          const yOffset = `calc(${shift} * var(--stack-card-offset) * ${yDirection})`;
          const translate = `translate3d(${xOffset}, ${yOffset}, 0)`;

          return <span key={depth} className={styles.layer} style={{ opacity, transform: translate }} />;
        })}
        <div
          ref={contentRef}
          className={styles.content}
          style={{
            transform: `translate3d(calc(${normalizedLayers} * var(--stack-card-offset) * ${xDirection}), calc(${normalizedLayers} * var(--stack-card-offset) * ${yDirection}), 0)`
          }}
        >
          {childElement}
        </div>
      </div>
    </div>
  );
};

export default StackCard;
