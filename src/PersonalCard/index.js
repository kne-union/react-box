import React, { Fragment } from 'react';
import style from './style.module.scss';
import { MailIcon, CallIcon, QuoteIcon } from './icons';

const PersonalCard = ({ avatar, name, title, description, phone, email, moreInfo = [], status, badge, mode = 'large' }) => {
  const statusClass = style[`status-${status}`] || style['status-online'];

  const AvatarWithStatus = ({ size = 'default' }) => {
    const sizeClasses = {
      large: 'w-32 h-32',
      medium: 'w-20 h-20',
      small: 'w-16 h-16'
    };

    return (
      <div className={style['avatar-container'] + ' ' + style[sizeClasses[size] || sizeClasses.medium]}>
        {typeof avatar === 'function' ? avatar({ className: style['avatar'] }) : <img src={avatar} alt={name} className={style['avatar']} />}
        {status && <span className={`${style['status-indicator']} ${statusClass}`}></span>}
      </div>
    );
  };

  const ContactItem = ({ icon: Icon, size = 14, value }) => (
    <div className={style['contact-item']}>
      <Icon className={style['icon']} size={size} />
      {value && <span className={value.includes('@') ? style['email'] : style['phone']}>{value}</span>}
    </div>
  );

  const InfoItem = ({ label, value }) => (
    <div className={style['info-item']}>
      <span className={style['info-label']}>{label}</span>
      <span className={style['info-value']}>{value}</span>
    </div>
  );

  const BasicInfo = ({ showDivider = true }) => {
    return (
      Array.isArray(moreInfo) &&
      moreInfo.length > 0 && (
        <div className={style['basic-info']}>
          {moreInfo.map(({ content }, index) => {
            return (
              <Fragment key={index}>
                {content}
                {showDivider && moreInfo.length - 1 !== index && <span className={style['divider']}></span>}
              </Fragment>
            );
          })}
        </div>
      )
    );
  };

  const InfoGrid = () =>
    Array.isArray(moreInfo) &&
    moreInfo.length > 0 && (
      <div className={style['info-grid']}>
        {moreInfo.map(({ label, content }, index) => {
          return <InfoItem key={index} label={label} value={content} />;
        })}
      </div>
    );

  const renderVertical = () => (
    <div className={style['card'] + ' ' + style['card-vertical']}>
      <div className={style['card-header']}>
        <AvatarWithStatus size="medium" />
        <div className={style['name-section']}>
          <h1 className={style['name']}>
            {name}
            {badge && <span className={style['badge']}>{badge}</span>}
          </h1>
          {title && <div className={style['title']}>{title}</div>}
        </div>
        <BasicInfo />
      </div>
      <div className={style['card-description']}>
        <div className={style['description']}>{description}</div>
      </div>
      <div className={style['card-footer']}>
        <ContactItem icon={MailIcon} size={14} value={email} />
        <ContactItem icon={CallIcon} size={14} value={phone} />
      </div>
    </div>
  );

  const renderMinimal = () => (
    <div className={style['card'] + ' ' + style['card-minimal']}>
      <div className={style['minimal-header']}>
        <AvatarWithStatus size="small" />
        <div className={style['minimal-info']}>
          <div className={style['name-row']}>
            <h1 className={style['name']}>{name}</h1>
            {badge && <span className={style['badge']}>{badge}</span>}
          </div>
          {title && <div className={style['title']}>{title}</div>}
          <div className={style['contact-row']}>
            <ContactItem icon={MailIcon} size={14} value={email} />
            <ContactItem icon={CallIcon} size={14} value={phone} />
          </div>
        </div>
      </div>
      <div className={style['minimal-main']}>
        <InfoGrid />
        <div className={style['mini-description']}>
          <div className={style['description']}>{description}</div>
        </div>
      </div>
    </div>
  );

  const renderHorizontal = () => (
    <div className={style['card'] + ' ' + style['card-horizontal']}>
      <div className={style['card-left']}>
        <AvatarWithStatus size="large" />
        <h1 className={style['name']}>
          {name} {badge && <span className={style['badge']}>{badge}</span>}
        </h1>
        {title && <div className={style['title']}>{title}</div>}
        <div className={style['contact-section']}>
          <div className={style['contact-box']}>
            <ContactItem icon={MailIcon} size={20} value={email} />
            <ContactItem icon={CallIcon} size={20} value={phone} />
          </div>
        </div>
      </div>
      <div className={style['card-right']}>
        <InfoGrid />
        <div className={style['description-box']}>
          <QuoteIcon className={style['quote-icon']} size={24} />
          <div className={style['description']}>{description}</div>
        </div>
      </div>
    </div>
  );

  const renderMode = {
    vertical: renderVertical,
    large: renderHorizontal,
    horizontal: renderMinimal
  };

  return renderMode[mode] ? renderMode[mode]() : renderMode.large();
};

export default PersonalCard;
