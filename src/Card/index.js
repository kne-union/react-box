import React from 'react';
import classnames from 'classnames';
import style from './style.module.scss';
import { withColors } from '../defaultColors';
import { globalParams } from '../globalParams';
import { ensureThemeCss } from './themeCss';
import { createThemeColors, resolveThemeColorOverrides, resolveCreateThemeColors, THEME_COLOR_KEYS } from './themeColors';

const toUnit = value => {
  if (value == null || value === '') {
    return undefined;
  }
  return typeof value === 'number' ? `${value}px` : value;
};

const setLength = (vars, name, value) => {
  const next = toUnit(value);
  if (next != null) {
    vars[name] = next;
  }
};

const setRaw = (vars, name, value) => {
  if (value != null && value !== '') {
    vars[name] = value;
  }
};

const normalizeHex = value => {
  if (value == null || value === '') {
    return '';
  }
  const next = createThemeColors(value).color;
  return next ? next.toLowerCase() : '';
};

/** 换色时丢掉主题里写死的色板字段，让 createThemeColors 按新主色重算 */
const omitThemeColorTokens = theme => {
  const next = { ...theme };
  THEME_COLOR_KEYS.forEach(key => {
    delete next[key];
  });
  delete next.colors;
  return next;
};

/**
 * 主题 → CSS 变量。
 * 色板：theme.createThemeColors 可为函数，或 card.createThemeColors 注册表中的字符串名。
 */
const getThemeStyle = (theme = {}) => {
  const {
    radius,
    padding,
    border,
    borderWidth,
    titleFontSize,
    titleFontWeight,
    titleLetterSpacing,
    titleLineHeight,
    subtitleFontSize,
    subtitleFontWeight,
    subtitleLetterSpacing,
    subtitleTextTransform,
    extraFontSize,
    descriptionFontSize,
    itemRadius,
    itemPadding,
    itemTitleFontSize,
    itemPrefixRadius,
    accentBarHeight,
    accentBarOpacity,
    contentGap,
    headerMarginBottom,
    mediaGap,
    itemTitleFontWeight,
    itemExtraFontSize,
    hover
  } = theme;

  const buildColors = resolveCreateThemeColors(theme.createThemeColors, globalParams.card.createThemeColors);
  const colors = buildColors(theme.color, resolveThemeColorOverrides(theme));

  const vars = {
    '--card-accent': colors.color,
    '--card-accent-deep': colors.accentDeep,
    '--card-glow': colors.glow,
    '--card-border': colors.borderColor,
    '--card-panel-from': colors.panelFrom,
    '--card-panel-to': colors.panelTo,
    '--card-surface': colors.surface,
    '--card-subtitle': colors.subtitleColor || colors.color,
    '--card-title': colors.titleColor,
    '--card-muted': colors.mutedColor,
    '--card-item-border': colors.itemBorderColor,
    '--card-item-prefix-bg': colors.itemPrefixBg,
    '--card-item-prefix-color': colors.itemPrefixColor,
    '--card-item-bg': colors.itemBackground,
    '--card-footer-border': colors.footerBorder,
    '--card-footer-value': colors.footerValue,
    '--card-metric-color': colors.metricColor
  };

  setRaw(vars, '--card-description-color', colors.descriptionColor);
  setRaw(vars, '--card-item-title', colors.itemTitleColor);
  setRaw(vars, '--card-shadow', colors.shadow);
  setRaw(vars, '--card-background-image', colors.backgroundImage);
  setRaw(vars, '--card-transition', colors.transition);

  if (hover === false) {
    vars['--card-hover-shadow'] = colors.shadow || 'none';
    vars['--card-hover-border-color'] = colors.borderColor;
  } else {
    setRaw(vars, '--card-hover-shadow', colors.hoverShadow);
    setRaw(vars, '--card-hover-border-color', colors.hoverBorderColor);
  }

  setLength(vars, '--card-radius', radius);
  setLength(vars, '--card-padding', padding);
  setLength(vars, '--card-title-size', titleFontSize);
  setRaw(vars, '--card-title-weight', titleFontWeight);
  setRaw(vars, '--card-title-tracking', titleLetterSpacing);
  setRaw(vars, '--card-title-leading', titleLineHeight);
  setLength(vars, '--card-subtitle-size', subtitleFontSize);
  setRaw(vars, '--card-subtitle-weight', subtitleFontWeight);
  setRaw(vars, '--card-subtitle-tracking', subtitleLetterSpacing);
  setRaw(vars, '--card-subtitle-transform', subtitleTextTransform);
  setLength(vars, '--card-extra-size', extraFontSize);
  setLength(vars, '--card-description-size', descriptionFontSize);
  setLength(vars, '--card-item-radius', itemRadius);
  setLength(vars, '--card-item-padding', itemPadding);
  setLength(vars, '--card-item-title-size', itemTitleFontSize);
  setRaw(vars, '--card-item-title-weight', itemTitleFontWeight);
  setLength(vars, '--card-item-prefix-radius', itemPrefixRadius);
  setLength(vars, '--card-item-extra-size', itemExtraFontSize);
  setLength(vars, '--card-accent-bar-height', accentBarHeight);
  setRaw(vars, '--card-accent-bar-opacity', accentBarOpacity);
  setLength(vars, '--card-content-gap', contentGap);
  setLength(vars, '--card-header-margin', headerMarginBottom);
  setLength(vars, '--card-media-gap', mediaGap);

  if (border != null) {
    vars['--card-theme-border'] = border;
  } else if (colors.borderColor != null || borderWidth != null) {
    vars['--card-theme-border'] = `${toUnit(borderWidth) || '1px'} solid ${colors.borderColor}`;
  }

  return vars;
};

const getThemes = () => globalParams.card.themes;

const resolveTheme = (themeKey, color, colors, hover) => {
  const key = themeKey || globalParams.card.defaultTheme;
  if (!key || key === 'default') {
    return null;
  }
  const config = getThemes()[key];
  if (!config) {
    return null;
  }

  const nextColor = color || config.color;
  const colorChanged = !!(color && normalizeHex(color) !== normalizeHex(config.color));
  const base = colorChanged ? omitThemeColorTokens(config) : { ...config };

  return {
    ...base,
    key,
    color: nextColor,
    // 默认开启 hover；Card 传入 hover 时覆盖主题配置
    hover: hover != null ? hover : base.hover !== false,
    ...(colors || base.colors
      ? {
          colors: {
            ...(!colorChanged && base.colors ? base.colors : null),
            ...(colors || null)
          }
        }
      : null)
  };
};

const Card = ({ className, title, icon, extra, children, size = 'default', padding, radius, border = true, style: customStyle, prefix, subtitle, description, footer, theme: themeKey, color, colors, hover, ...props }) => {
  const sizeClasses = {
    large: style['card-large'],
    default: style['card-default'],
    small: style['card-small']
  };

  const theme = resolveTheme(themeKey, color, colors, hover);
  const isMedia = !!prefix;
  const isAccent = !!(theme && theme.accent);
  const showAccentBar = isAccent && theme.accentBar !== false;
  const hasHeader = !!(subtitle || title || icon || extra);
  const showContent = !!(description || children);
  const themeStyle = theme ? getThemeStyle(theme) : null;
  const resolvedThemeKey = theme?.key;

  if (theme?.css && resolvedThemeKey) {
    ensureThemeCss(resolvedThemeKey, theme.css);
  }

  const prefixNode =
    typeof prefix === 'string' || typeof prefix === 'number' ? (
      <span className={style['prefix-badge']} data-slot="prefix-badge">
        {prefix}
      </span>
    ) : (
      prefix
    );

  const titleNode = (title || icon) && (
    <h4 className={style['title']} data-slot="title">
      {icon && (
        <span className={style['icon']} data-slot="icon">
          {icon}
        </span>
      )}
      {title}
    </h4>
  );

  const header = hasHeader && (
    <div
      className={classnames(style['card-header'], {
        [style['card-header-stacked']]: !!subtitle
      })}
      data-slot="header"
    >
      {subtitle ? (
        <>
          <div className={style['header-meta']} data-slot="meta">
            <div className={style['subtitle']} data-slot="subtitle">
              {subtitle}
            </div>
            {extra != null && extra !== false && (
              <div className={style['header-right']} data-slot="extra">
                {extra}
              </div>
            )}
          </div>
          {titleNode && (
            <div className={style['header-left']} data-slot="title-wrap">
              {titleNode}
            </div>
          )}
        </>
      ) : (
        <>
          <div className={style['header-left']} data-slot="title-wrap">
            {titleNode}
          </div>
          {extra != null && extra !== false && (
            <div className={style['header-right']} data-slot="extra">
              {extra}
            </div>
          )}
        </>
      )}
    </div>
  );

  const content = showContent && (
    <div className={style['card-content']} data-slot="content">
      {description && (
        <div className={style['description']} data-slot="description">
          {description}
        </div>
      )}
      {children}
    </div>
  );

  const main = (
    <>
      {header}
      {content}
    </>
  );

  return (
    <div
      {...props}
      data-card-theme={resolvedThemeKey || undefined}
      data-slot={isMedia ? 'item' : 'card'}
      className={classnames(style['card'], sizeClasses[size] || sizeClasses.default, className, {
        [style['no-border']]: !border,
        [style['is-media']]: isMedia,
        [style['is-accent']]: isAccent
      })}
      style={{
        ...themeStyle,
        ...(padding != null ? { '--card-padding': toUnit(padding) } : null),
        ...(radius != null ? { '--card-radius': toUnit(radius) } : null),
        ...customStyle
      }}
    >
      {showAccentBar && <div className={style['accent-bar']} data-slot="accent-bar" aria-hidden="true" />}
      {isMedia ? (
        <div className={style['card-media']} data-slot="media">
          <div className={style['prefix']} data-slot="prefix">
            {prefixNode}
          </div>
          <div className={style['card-main']} data-slot="main">
            {main}
          </div>
        </div>
      ) : (
        main
      )}
      {footer && (
        <div className={style['footer']} data-slot="footer">
          {footer}
        </div>
      )}
    </div>
  );
};

const createThemeCard = (displayName, themeName) => {
  const ThemeCard = ({ color, colors, ...props }) => {
    const config = getThemes()[themeName] || {};
    return <Card {...props} theme={themeName} color={color ?? config.color} colors={colors} />;
  };
  ThemeCard.displayName = displayName;
  return ThemeCard;
};

const RibbonCard = createThemeCard('CardRibbon', 'ribbon');

Card.Ribbon = RibbonCard;
Object.defineProperty(Card, 'themes', {
  enumerable: true,
  get: () => getThemes()
});
Card.createTheme = createThemeCard;
Card.createThemeColors = createThemeColors;
const resolveCardCreateThemeColors = value => resolveCreateThemeColors(value, globalParams.card.createThemeColors);
Card.resolveCreateThemeColors = resolveCardCreateThemeColors;

withColors(Card);
withColors(RibbonCard);

export { RibbonCard, createThemeCard, createThemeColors, resolveCardCreateThemeColors as resolveCreateThemeColors, THEME_COLOR_KEYS };
export default Card;
