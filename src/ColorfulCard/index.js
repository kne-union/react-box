import defaultColors, { withColors } from '../defaultColors';
import style from './style.module.scss';
import classnames from 'classnames';
import tinyColor from 'tinycolor2';

const DEFAULT_COLOR = defaultColors.Purple;

const ColorfulCard = ({ className, color = DEFAULT_COLOR, radius = '12px', padding = '24px', style: customStyle, title, icon, description, children, ...props }) => {
  const colorAlpha = tinyColor(color).setAlpha(0.2).toRgbString();
  return (
    <div {...props} className={classnames(className, style['colorful-card'])} style={Object.assign({}, customStyle, { '--color': color, '--color-alpha': colorAlpha, '--radius': radius, '--padding': padding })}>
      {icon && <div className={style['icon']}>{icon}</div>}
      {title && <div className={style['title']}>{title}</div>}
      {description && <div className={style['description']}>{description}</div>}
      {children}
    </div>
  );
};

withColors(ColorfulCard);

export default ColorfulCard;
