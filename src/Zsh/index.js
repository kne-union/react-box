import React from 'react';
import classnames from 'classnames';
import style from './style.module.scss';
import withLocale from '../withLocale';
import { useIntl } from '@kne/react-intl';

const ZshInner = ({ className, title, children, padding = '32px', radius = '12px', border = true, style: customStyle, ...props }) => {
  const { formatMessage } = useIntl();
  const defaultTitle = formatMessage({ id: 'ZshTitle' });

  return (
    <div
      {...props}
      className={classnames(style['zsh'], className, {
        [style['no-border']]: !border
      })}
      style={{
        '--zsh-padding': padding,
        '--zsh-radius': radius,
        ...customStyle
      }}
    >
      <div className={style['zsh-header']}>
        <div className={style['header-dots']}>
          <div className={style['dot-red']}></div>
          <div className={style['dot-yellow']}></div>
          <div className={style['dot-green']}></div>
        </div>
        <div className={style['header-title']}>{title || defaultTitle}</div>
        <div className={style['header-spacer']}></div>
      </div>
      <div className={style['zsh-content']}>{children}</div>
    </div>
  );
};

const Zsh = withLocale(ZshInner);

export default Zsh;
