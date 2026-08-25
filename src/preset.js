import { globalParams } from './globalParams';
import { syncThemeStyles } from './Card/themeCss';

const mergeThemes = (target, source) => {
  if (!source || typeof source !== 'object') {
    return target;
  }
  Object.keys(source).forEach(key => {
    target[key] = {
      ...(target[key] || {}),
      ...source[key]
    };
  });
  return target;
};

/**
 * 全局预设，用法同 @kne/react-fetch / react-enum / react-file 的 preset。
 *
 * card.themes[name]：结构 token + 主色 `color`。
 * card.createThemeColors[name]：色板算法注册表；主题里用字符串引用，如 createThemeColors: 'warm'。
 * 内置外观主题：ribbon / inset / halo / split（inset/halo/split 已引用同名算法）。
 * 主题也可直接挂函数：createThemeColors: (color, overrides) => palette
 * 同结构换色：`<Card.Ribbon color="#7c3aed" />`。
 * hover：内置主题默认开启；`<Card hover={false} />` 可关闭。主题也可配 `hover: false`。
 * 可选 `css`：`&` = 根；也可用 style 覆盖 CSS 变量。
 *
 * @example
 * import { preset, Card, createThemeColors } from '@kne/react-box';
 *
 * preset({
 *   card: {
 *     createThemeColors: {
 *       warm: (color, overrides) =>
 *         createThemeColors(color, { surface: '#fffbeb', glow: '#fbbf24', ...overrides })
 *     },
 *     themes: {
 *       autumn: {
 *         accent: true,
 *         accentBar: true,
 *         color: '#c2410c',
 *         createThemeColors: 'warm'
 *       }
 *     }
 *   }
 * });
 */
const preset = (options = {}) => {
  if (options.card) {
    if (options.card.createThemeColors) {
      globalParams.card.createThemeColors = {
        ...(globalParams.card.createThemeColors || {}),
        ...options.card.createThemeColors
      };
    }
    if (options.card.themes) {
      mergeThemes(globalParams.card.themes, options.card.themes);
      syncThemeStyles(globalParams.card.themes);
    }
    if ('defaultTheme' in options.card) {
      globalParams.card.defaultTheme = options.card.defaultTheme;
    }
  }
  return globalParams;
};

export { globalParams };
export default preset;
