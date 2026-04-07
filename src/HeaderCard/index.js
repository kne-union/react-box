import classNames from 'classnames';
import tinycolor from 'tinycolor2';
import styles from './style.module.scss';
import defaultColors, { withColors } from '../defaultColors';

const DEFAULT_COLOR = defaultColors.Blue;

const getThemeStyle = color => {
  const baseColor = tinycolor(color);
  const primary = baseColor.isValid() ? baseColor : tinycolor(DEFAULT_COLOR);
  const primaryColor = primary.toHexString();

  return {
    '--header-card-primary': primaryColor,
    '--header-card-primary-dark': primary.clone().darken(10).toHexString(),
    '--header-card-subtitle': primary.clone().darken(12).toHexString(),
    '--header-card-description': primary.clone().desaturate(20).darken(22).setAlpha(0.72).toRgbString(),
    '--header-card-panel-from': tinycolor.mix('#ffffff', primaryColor, 4).toHexString(),
    '--header-card-panel-middle': tinycolor.mix('#f8fafc', primaryColor, 12).toHexString(),
    '--header-card-panel-to': tinycolor.mix('#f1f5f9', primaryColor, 18).toHexString(),
    '--header-card-soft-bg': primary.clone().setAlpha(0.08).toRgbString(),
    '--header-card-soft-border': primary.clone().setAlpha(0.18).toRgbString(),
    '--header-card-footer-border': primary.clone().setAlpha(0.14).toRgbString(),
    '--header-card-orb-a': primary.clone().setAlpha(0.16).toRgbString(),
    '--header-card-orb-b': primary.clone().setAlpha(0.1).toRgbString(),
    '--header-card-shadow': primary.clone().setAlpha(0.16).toRgbString()
  };
};

const HeaderCard = ({ title, subtitle, description, content, footer, icon, iconPosition = 'right-bottom', iconSize = 96, children, color = DEFAULT_COLOR, className, style, contentStyle }) => {
  const iconStyle = {
    '--icon-size': typeof iconSize === 'number' ? `${iconSize}px` : iconSize
  };

  return (
    <section className={classNames('header-card-root', styles.card, className)} style={{ ...getThemeStyle(color), ...style }}>
      <div className={classNames('header-card-content', styles.content, children && styles['with-extra'], footer && styles['with-footer'])} style={contentStyle}>
        {subtitle && <div className={classNames('header-card-subtitle', styles.subtitle)}>{subtitle}</div>}
        {title && <div className={classNames('header-card-title', styles.title)}>{title}</div>}
        {description && <div className={classNames('header-card-description', styles.description)}>{description}</div>}
        {content && <div className={classNames('header-card-content-area', styles['content-area'])}>{content}</div>}
      </div>

      {children && <div className={classNames('header-card-extra', styles.extra)}>{children}</div>}
      {footer && <div className={classNames('header-card-footer', styles.footer)}>{footer}</div>}
      {icon && (
        <div className={classNames('header-card-icon', styles['corner-icon'], styles[`icon-${iconPosition}`])} style={iconStyle}>
          {icon}
        </div>
      )}
    </section>
  );
};

withColors(HeaderCard);

export default HeaderCard;
