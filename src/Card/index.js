import React from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

const Card = ({ className, title, icon, extra, children, size = 'default', padding, radius = '12px', border = true, style: customStyle, ...props }) => {
  const sizeClasses = {
    large: style['card-large'],
    default: style['card-default'],
    small: style['card-small']
  };

  return (
    <div
      {...props}
      className={classnames(style['card'], sizeClasses[size] || sizeClasses.default, className, {
        [style['no-border']]: !border
      })}
      style={{
        '--card-padding': padding,
        '--card-radius': radius,
        ...customStyle
      }}
    >
      {(title || extra) && (
        <div className={style['card-header']}>
          <div className={style['header-left']}>
            {title && (
              <h4 className={style['title']}>
                {icon && <span className={style['icon']}>{icon}</span>}
                {title}
              </h4>
            )}
          </div>
          <div className={style['header-right']}>{extra}</div>
        </div>
      )}
      <div className={style['card-content']}>{children}</div>
    </div>
  );
};

export default Card;
