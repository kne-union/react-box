const STYLE_ID_PREFIX = 'kne-react-box-card-theme-';

/**
 * 将主题 css 中的 `&` 作用域到 `[data-card-theme="name"]`。
 * 推荐用 data-slot 选择内部结构，避免依赖 css module hash。
 *
 * @example
 * css: `
 *   & {
 *     box-shadow: 0 12px 40px rgba(79, 70, 229, 0.1);
 *   }
 *   & [data-slot="header"] {
 *     margin-bottom: 18px;
 *   }
 *   & [data-slot="item"] {
 *     border-radius: 24px;
 *     padding: 20px;
 *   }
 * `
 */
export const scopeThemeCss = (themeName, css) => {
  if (!css || !themeName) {
    return '';
  }
  const scope = `[data-card-theme="${themeName}"]`;
  return String(css).replace(/(^|[\n{,])(\s*)&/g, `$1$2${scope}`);
};

export const ensureThemeCss = (themeName, css) => {
  if (!css || !themeName || typeof document === 'undefined') {
    return;
  }
  const id = `${STYLE_ID_PREFIX}${themeName}`;
  const text = scopeThemeCss(themeName, css);
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('style');
    el.id = id;
    el.setAttribute('data-kne-card-theme', themeName);
    document.head.appendChild(el);
  }
  if (el.textContent !== text) {
    el.textContent = text;
  }
};

export const syncThemeStyles = themes => {
  if (!themes || typeof themes !== 'object') {
    return;
  }
  Object.keys(themes).forEach(name => {
    const theme = themes[name];
    if (theme && theme.css) {
      ensureThemeCss(name, theme.css);
    }
  });
};
