import { useMemo } from 'react';
import tinyColor from 'tinycolor2';
import classnames from 'classnames';
import style from './style.module.scss';

const SuccessIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path d="M25.4 42.6L17.9 35.1A3 3 0 0013.7 39.3L23.3 48.9A3 3 0 0027.5 48.9L50.3 26.1A3 3 0 0046.1 21.9L25.4 42.6Z" fill="currentColor" />
  </svg>
);

const WarningIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path d="M32 14C34.7614 14 37 16.2386 37 19V34C37 36.7614 34.7614 39 32 39C29.2386 39 27 36.7614 27 34V19C27 16.2386 29.2386 14 32 14Z" fill="currentColor" />
    <circle cx="32" cy="48" r="5" fill="currentColor" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path d="M21.05 16.8A3 3 0 0125.29 16.8L32 23.51L38.71 16.8A3 3 0 1142.95 21.04L36.24 27.75L42.95 34.46A3 3 0 1138.71 38.7L32 31.99L25.29 38.7A3 3 0 1121.05 34.46L27.76 27.75L21.05 21.04A3 3 0 0121.05 16.8Z" fill="currentColor" />
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path d="M32 13.5A4.5 4.5 0 1132 22.5A4.5 4.5 0 0132 13.5Z" fill="currentColor" />
    <path d="M32 27C34.2091 27 36 28.7909 36 31V46C36 48.2091 34.2091 50 32 50C29.7909 50 28 48.2091 28 46V31C28 28.7909 29.7909 27 32 27Z" fill="currentColor" />
  </svg>
);

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
