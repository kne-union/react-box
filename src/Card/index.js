import React from 'react';
import style from './style.module.scss';

const Card = ({ className, title, icon, extra, children, padding = '24px', radius = '12px', border = true, style: customStyle, ...props }) => {
  return (
    <div
      {...props}
      className={`${style['card']} ${!border ? style['no-border'] : ''} ${className || ''}`}
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
