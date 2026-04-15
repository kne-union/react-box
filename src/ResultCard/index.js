import { useMemo } from 'react';
import tinyColor from 'tinycolor2';
import classnames from 'classnames';
import style from './style.module.scss';
import { SuccessIcon, WarningIcon, ErrorIcon, InfoIcon } from '../icons';

const STATUS_PRESETS = {
  success: {
    color: '#07c160',
    icon: <SuccessIcon />,
    bgStart: '#e8f8ef',
    bgEnd: '#f0f9f4'
  },
  warning: {
    color: '#fa5151',
    icon: <WarningIcon />,
    bgStart: '#fff0f0',
    bgEnd: '#fef2f2'
  },
  error: {
    color: '#ef4444',
    icon: <ErrorIcon />,
    bgStart: '#fef2f2',
    bgEnd: '#fee2e2'
  },
  info: {
    color: '#3b82f6',
    icon: <InfoIcon />,
    bgStart: '#eff6ff',
    bgEnd: '#f0f7ff'
  }
};

const ResultCardItem = ({ icon, label, value }) => (
  <div className={style['result-card-item']}>
    <div className={style['result-card-item-icon']}>{icon}</div>
    <div className={style['result-card-item-label']} title={typeof label === 'string' ? label : undefined}>
      {label}
    </div>
    <div className={style['result-card-item-value']} title={typeof value === 'string' ? value : undefined}>
      {value}
    </div>
  </div>
);

const ResultCard = ({ className, title, icon, description, color: baseColor = STATUS_PRESETS.success.color, width, items = [], children }) => {
  const colors = useMemo(() => {
    const color = tinyColor(baseColor);
    const lightBgColor = color.clone().setAlpha(0.2).toString();

    return { baseColor, lightBgColor };
  }, [baseColor]);

  return (
    <div
      className={classnames(style['result-card'], className)}
      style={{
        '--base-color': colors.baseColor,
        '--light-bg-color': colors.lightBgColor,
        ...(width != null ? { '--width': typeof width === 'number' ? `${width}px` : width } : {})
      }}
    >
      <div className={style['icon-wrapper']}>
        <div className={style['icon-circle']}>
          <div className={style['icon-svg']}>{icon}</div>
        </div>
      </div>

      <div className={style['title']} title={typeof title === 'string' ? title : undefined}>
        {title}
      </div>
      {description && <div className={style['description']}>{description}</div>}

      {(items.length > 0 || children) && (
        <div className={style['extra']}>
          {items.map((item, index) => (
            <ResultCardItem key={index} {...item} />
          ))}
          {children}
        </div>
      )}
    </div>
  );
};

const createPresetResult = (displayName, preset) => {
  const PresetResult = ({ color = preset.color, icon = preset.icon, ...props }) => {
    return <ResultCard {...props} color={color} icon={icon} />;
  };

  PresetResult.displayName = displayName;
  return PresetResult;
};

const SuccessResult = createPresetResult('ResultCardSuccess', STATUS_PRESETS.success);
const WarningResult = createPresetResult('ResultCardWarning', STATUS_PRESETS.warning);
const ErrorResult = createPresetResult('ResultCardError', STATUS_PRESETS.error);
const InfoResult = createPresetResult('ResultCardInfo', STATUS_PRESETS.info);

ResultCard.Success = SuccessResult;
ResultCard.Warning = WarningResult;
ResultCard.Error = ErrorResult;
ResultCard.Info = InfoResult;

export { SuccessResult, WarningResult, ErrorResult, InfoResult, ResultCardItem };
export default ResultCard;
