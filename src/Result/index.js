import { useMemo } from 'react';
import tinyColor from 'tinycolor2';
import classnames from 'classnames';
import style from './style.module.scss';
import { SuccessIcon, WarningIcon, ErrorIcon, InfoIcon } from '../icons';

const STATUS_PRESETS = {
  success: {
    color: '#10b981',
    icon: <SuccessIcon />
  },
  warning: {
    color: '#f59e0b',
    icon: <WarningIcon />
  },
  error: {
    color: '#ef4444',
    icon: <ErrorIcon />
  },
  info: {
    color: '#3b82f6',
    icon: <InfoIcon />
  }
};

const Result = ({ className, title, icon, description, color: baseColor = STATUS_PRESETS.success.color, children }) => {
  const colors = useMemo(() => {
    const color = tinyColor(baseColor);
    const lightColor = color.clone().lighten(35).saturate(-10).toRgbString();
    const darkColor = color.clone().darken(40).saturate(5).toRgbString();
    const veryLightColor = color.clone().lighten(55).desaturate(30).toRgbString();

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

const createPresetResult = (displayName, preset) => {
  const PresetResult = ({ color = preset.color, icon = preset.icon, ...props }) => {
    return <Result {...props} color={color} icon={icon} />;
  };

  PresetResult.displayName = displayName;

  return PresetResult;
};

const SuccessResult = createPresetResult('ResultSuccess', STATUS_PRESETS.success);
const WarningResult = createPresetResult('ResultWarning', STATUS_PRESETS.warning);
const ErrorResult = createPresetResult('ResultError', STATUS_PRESETS.error);
const InfoResult = createPresetResult('ResultInfo', STATUS_PRESETS.info);

Result.Success = SuccessResult;
Result.Warning = WarningResult;
Result.Error = ErrorResult;
Result.Info = InfoResult;

export { SuccessResult, WarningResult, ErrorResult, InfoResult };
export default Result;
