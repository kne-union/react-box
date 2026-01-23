import { useMemo } from 'react';
import tinyColor from 'tinycolor2';
import classnames from 'classnames';
import style from './style.module.scss';

const Result = ({ className, title, icon, description, color: baseColor = '#10b981', children }) => {
  const colors = useMemo(() => {
    const color = tinyColor(baseColor);
    const lightColor = color.clone().lighten(35).saturate(-10);
    const darkColor = color.clone().darken(40).saturate(5);
    const veryLightColor = color.clone().lighten(55).desaturate(30);

    return {
      baseColor,
      lightColor,
      darkColor,
      veryLightColor
    };
  }, [baseColor]);

  return (
    <div
      className={classnames(style['result'], className)}
      style={{
        '--base-color': colors.baseColor,
        '--light-color': colors.lightColor,
        '--dark-color': colors.darkColor,
        '--very-light-color': colors.veryLightColor
      }}
    >
      {icon && (
        <div className={style['icon']}>
          <div className={style['icon-inner']}>
            <div className={style['icon-highlight']} />
            <div className={style['icon-svg']}>{icon}</div>
          </div>
          <div className={style['decoration-1']} />
          <div className={style['decoration-2']} />
        </div>
      )}
      <div className={style['title']}>{title}</div>
      {description && <div className={style['description']}>{description}</div>}
      {children && <div className={style['content']}>{children}</div>}
    </div>
  );
};

export default Result;
