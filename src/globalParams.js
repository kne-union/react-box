import tinycolor from 'tinycolor2';
import { createThemeColors } from './Card/themeColors';

const toPrimary = (color, fallback) => (tinycolor(color).isValid() ? tinycolor(color) : tinycolor(fallback));

const createInsetColors = (color, overrides = {}) => {
  const primary = toPrimary(color, '#4F46E5');
  return createThemeColors(color, {
    glow: primary.clone().lighten(26).desaturate(6).toHexString(),
    surface: '#ffffff',
    panelFrom: 'transparent',
    panelTo: 'transparent',
    backgroundImage: 'none',
    titleColor: '#1A1836',
    mutedColor: '#67658C',
    descriptionColor: '#67658C',
    itemBackground: '#FCFCFE',
    itemTitleColor: '#1F1D3F',
    metricColor: '#BE123C',
    shadow: '0 22px 50px rgba(30, 27, 75, 0.2)',
    ...overrides
  });
};

const createHaloColors = (color, overrides = {}) => {
  const primary = toPrimary(color, '#4F46E5');
  const hex = primary.toHexString();
  const glow = primary.clone().lighten(12);
  const wash = primary.clone().setAlpha(0.07).toRgbString();
  const washEdge = primary.clone().setAlpha(0.06).toRgbString();
  const mid = tinycolor.mix(primary, '#22d3ee', 45).setAlpha(0.05).toRgbString();
  const tip = tinycolor.mix(primary, '#f0abfc', 40).setAlpha(0.05).toRgbString();
  return createThemeColors(color, {
    glow: glow.toHexString(),
    surface: '#ffffff',
    panelFrom: 'transparent',
    panelTo: 'transparent',
    titleColor: hex,
    mutedColor: '#6F6D95',
    descriptionColor: '#161431',
    metricColor: '#BE123C',
    backgroundImage: `radial-gradient(ellipse 70% 55% at 50% 45%, ${wash} 0%, transparent 55%), linear-gradient(135deg, ${washEdge} 0%, ${mid} 55%, ${tip} 100%)`,
    shadow: '0 22px 50px rgba(30, 27, 75, 0.28)',
    ...overrides
  });
};

const createSplitColors = (color, overrides = {}) => {
  const primary = toPrimary(color, '#4654D9');
  const hex = primary.toHexString();
  const from = tinycolor.mix('#ffffff', primary, 8).toHexString();
  const to = tinycolor.mix('#ffffff', primary, 4).toHexString();
  return createThemeColors(color, {
    glow: primary.clone().lighten(8).toHexString(),
    surface: to,
    panelFrom: 'transparent',
    panelTo: 'transparent',
    titleColor: hex,
    mutedColor: '#334155',
    descriptionColor: '#334155',
    itemBackground: '#ffffff',
    itemBorderColor: 'transparent',
    itemTitleColor: hex,
    backgroundImage: `linear-gradient(160deg, ${from} 0%, ${to} 100%)`,
    shadow: 'none',
    ...overrides
  });
};

/**
 * 内置主题按外观命名：
 * - ribbon  顶栏色带 + 嵌套条目
 * - inset   白底列表容器 + 浅色内嵌条目
 * - halo    光晕底 + 圆环媒体区 + 三列底栏
 * - split   淡紫渐变底 + 双栏白底子卡
 *
 * createThemeColors 注册表可供主题用字符串引用，例如 createThemeColors: 'halo'
 */
const globalParams = {
  card: {
    defaultTheme: null,
    createThemeColors: {
      inset: createInsetColors,
      halo: createHaloColors,
      split: createSplitColors
    },
    themes: {
      ribbon: {
        accent: true,
        color: '#4f46e5',
        glow: '#22d3ee',
        radius: 15,
        padding: '20px 16px',
        borderWidth: 1,
        accentBar: true,
        accentBarHeight: 3,
        titleFontSize: 15.5,
        titleFontWeight: 800,
        titleLetterSpacing: '-0.01em',
        subtitleFontSize: 11,
        subtitleFontWeight: 800,
        subtitleLetterSpacing: '0.09em',
        subtitleTextTransform: 'uppercase',
        extraFontSize: 11.5,
        itemRadius: 11,
        itemPadding: '12px 13px',
        itemTitleFontSize: 13,
        descriptionFontSize: 12,
        hover: true
      },

      inset: {
        accent: true,
        accentBar: true,
        accentBarHeight: 2,
        accentBarOpacity: 0.7,
        color: '#4F46E5',
        radius: 18,
        padding: '20px 21px',
        borderWidth: 1,
        titleFontSize: 16,
        titleFontWeight: 700,
        descriptionFontSize: 12,
        contentGap: 13,
        headerMarginBottom: 18,
        mediaGap: 12,
        itemRadius: 12,
        itemPadding: '13px 14px',
        itemTitleFontSize: 13,
        itemTitleFontWeight: 700,
        itemExtraFontSize: 13,
        hover: true,
        createThemeColors: 'inset',
        css: `
          & [data-slot="header"] {
            align-items: center;
          }
          & [data-slot="extra"] {
            display: inline-flex;
            align-items: center;
            color: inherit;
            font-size: inherit;
          }
          & [data-slot="content"] {
            padding: 0;
          }
          & [data-slot="item"] {
            background-color: var(--card-item-bg, #FCFCFE);
            background-image: none;
            box-shadow: none;
          }
          & [data-slot="item"]:hover {
            box-shadow: none;
          }
          & [data-slot="item"] [data-slot="header"] {
            margin-bottom: 0;
            align-items: flex-start;
            gap: 12px;
          }
          & [data-slot="item"] [data-slot="title"] {
            display: block;
            letter-spacing: -0.01em;
            line-height: 1.35;
          }
          & [data-slot="item"] [data-slot="extra"] {
            flex-shrink: 0;
            white-space: nowrap;
            line-height: 1.35;
            color: var(--card-metric-color, #BE123C);
            font-weight: 600;
          }
          & [data-slot="item"] [data-slot="content"] {
            margin-top: 6px;
            padding: 0;
            gap: 0;
          }
          & [data-slot="item"] [data-slot="description"] {
            line-height: 1.45;
            color: var(--card-muted, #67658C);
          }
        `
      },

      halo: {
        accent: true,
        accentBar: false,
        color: '#4F46E5',
        radius: 18,
        padding: '24px 28px 22px',
        borderWidth: 1,
        titleFontSize: 18,
        titleFontWeight: 700,
        descriptionFontSize: 13,
        headerMarginBottom: 0,
        hover: true,
        createThemeColors: 'halo',
        css: `
          & [data-slot="content"] {
            padding: 0;
            color: var(--card-description-color, #161431);
          }
          & [data-slot="footer"] {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0;
            width: 100%;
            margin-top: 28px;
            padding-top: 0;
            border-top: none;
          }
        `
      },

      split: {
        accent: true,
        accentBar: false,
        color: '#4654D9',
        radius: 12,
        padding: '20px 20px 16px',
        borderWidth: 1,
        titleFontSize: 14,
        titleFontWeight: 700,
        descriptionFontSize: 13,
        headerMarginBottom: 10,
        contentGap: 14,
        itemRadius: 12,
        itemPadding: '14px 16px',
        itemTitleFontSize: 13,
        itemTitleFontWeight: 700,
        hover: true,
        createThemeColors: 'split',
        css: `
          & [data-slot="header"] {
            margin-bottom: 10px;
          }
          & [data-slot="title"] {
            color: var(--card-title, var(--card-accent));
          }
          & [data-slot="content"] {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            padding: 0;
          }
          & [data-slot="content"] > [data-slot="description"] {
            grid-column: 1 / -1;
            color: var(--card-muted, #334155);
            line-height: 1.5;
          }
          & [data-slot="content"] > [data-slot="card"] {
            margin: 0;
            background: var(--card-item-bg, #ffffff);
            background-image: none;
            border: none;
            border-radius: 12px;
            padding: 14px 16px;
            box-shadow: none;
          }
          & [data-slot="content"] > [data-slot="card"]:hover {
            box-shadow: none;
          }
          & [data-slot="content"] > [data-slot="card"] [data-slot="header"] {
            margin-bottom: 8px;
          }
          & [data-slot="content"] > [data-slot="card"] [data-slot="title"] {
            color: var(--card-item-title, var(--card-accent));
            font-size: 13px;
            font-weight: 700;
            line-height: 1.3;
          }
          & [data-slot="content"] > [data-slot="card"] [data-slot="description"] {
            color: var(--card-muted, #334155);
            font-size: 12px;
            line-height: 1.45;
          }
          & [data-slot="content"] > [data-slot="card"] [data-slot="content"] {
            display: block;
            padding: 0;
          }
        `
      }
    }
  }
};

export { globalParams };
