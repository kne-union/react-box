import style from './style.module.scss';
import classnames from 'classnames';

const GlassCard = ({ className, radius = '12px', padding = '24px', blur = '12px', style: customStyle, ...props }) => {
  return <div {...props} className={classnames(className, style['glass-card'])} style={Object.assign({}, customStyle, { '--radius': radius, '--padding': padding, '--blur': blur })} />;
};

export default GlassCard;
