import tinycolor from 'tinycolor2';

const FALLBACK_COLOR = '#4f46e5';

/** 可从主色派生、也可在主题 / colors 里显式覆盖的色板字段 */
export const THEME_COLOR_KEYS = [
  'glow',
  'accentDeep',
  'borderColor',
  'panelFrom',
  'panelTo',
  'surface',
  'titleColor',
  'mutedColor',
  'subtitleColor',
  'descriptionColor',
  'itemBorderColor',
  'itemBackground',
  'itemTitleColor',
  'itemPrefixBg',
  'itemPrefixColor',
  'footerBorder',
  'footerValue',
  'metricColor',
  'backgroundImage',
  'shadow',
  'hoverShadow',
  'hoverBorderColor',
  'transition'
];

const pickDefined = (source = {}, keys = THEME_COLOR_KEYS) => {
  const out = {};
  keys.forEach(key => {
    if (source[key] != null && source[key] !== '') {
      out[key] = source[key];
    }
  });
  return out;
};

/**
 * 由单一主题色生成 Card 色板（边框 / 面板渐变 / glow / hover 等）。
 * 默认实现；可在主题上挂同签名函数替换：
 *   themes.xxx.createThemeColors = (color, overrides) => palette
 *
 * @param {string} color 主题色
 * @param {object} [overrides] 显式色值（含 hoverShadow / hoverBorderColor / transition）
 * @returns {object} 色板
 *
 * @example
 * createThemeColors('#7c3aed')
 * createThemeColors('#ec4899', { glow: '#f9a8d4', titleColor: '#831843' })
 */
export const createThemeColors = (color, overrides = {}) => {
  const primary = tinycolor(color).isValid() ? tinycolor(color) : tinycolor(FALLBACK_COLOR);
  const hex = primary.toHexString();
  const deep = primary.clone().darken(12);
  const glow = primary.clone().lighten(26).desaturate(6);
  const softBorder = primary.clone().setAlpha(0.16).toRgbString();
  const softItem = primary.clone().setAlpha(0.12).toRgbString();
  const panelFrom = primary.clone().setAlpha(0.1).toRgbString();
  const panelTo = primary.clone().setAlpha(0.02).toRgbString();
  const surface = tinycolor.mix('#ffffff', primary, 5).toHexString();
  const hoverAlpha = primary.clone().setAlpha(0.2).toRgbString();

  const derived = {
    color: hex,
    glow: glow.toHexString(),
    accentDeep: deep.toHexString(),
    borderColor: softBorder,
    panelFrom,
    panelTo,
    surface,
    titleColor: '#161431',
    mutedColor: '#6f6d95',
    subtitleColor: hex,
    descriptionColor: undefined,
    itemBorderColor: softItem,
    itemBackground: 'rgba(255, 255, 255, 0.9)',
    itemTitleColor: '#1f1d3f',
    itemPrefixBg: primary.clone().setAlpha(0.1).toRgbString(),
    itemPrefixColor: deep.toHexString(),
    footerBorder: softItem,
    footerValue: deep.toHexString(),
    metricColor: '#e11d48',
    backgroundImage: undefined,
    shadow: 'none',
    hoverShadow: `0 12px 32px ${hoverAlpha}`,
    hoverBorderColor: primary.clone().setAlpha(0.32).toRgbString(),
    transition: 'box-shadow 0.25s ease, border-color 0.25s ease'
  };

  return {
    ...derived,
    ...pickDefined(overrides)
  };
};

/**
 * 解析色板算法：函数直接用；字符串从 registry 查找；否则默认 createThemeColors。
 * @param {Function|string|undefined} value
 * @param {Record<string, Function>} [registry] card.createThemeColors 注册表
 */
export const resolveCreateThemeColors = (value, registry) => {
  if (typeof value === 'function') {
    return value;
  }
  if (typeof value === 'string' && registry && typeof registry[value] === 'function') {
    return registry[value];
  }
  return createThemeColors;
};

/**
 * 从主题配置抽出色板覆盖项（扁平字段 + theme.colors）。
 */
export const resolveThemeColorOverrides = (theme = {}) => ({
  ...pickDefined(theme),
  ...pickDefined(theme.colors || {})
});

export default createThemeColors;
