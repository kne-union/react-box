import { useMemo } from 'react';
import classnames from 'classnames';
import tinyColor from 'tinycolor2';
import { withColors } from '../defaultColors';
import style from './style.module.scss';
const Jelly = ({ className, size = '60px', width, borderRadius = '18px', color = Jelly.Purple, ...props }) => {
  const colors = useMemo(() => {
    const colorObj = tinyColor(color);
    return {
      base: colorObj.toHexString(),
      lightest: tinyColor.mix(colorObj, '#fff', 90).toHexString(),
      light: tinyColor.mix(colorObj, '#fff', 80).toHexString(),
      transparentBase: colorObj.clone().setAlpha(0.2).toRgbString(),
      transparentLight: tinyColor.mix(colorObj, '#fff', 80).setAlpha(0.4).toRgbString()
    };
  }, [color]);

  return (
    <div
      {...props}
      className={classnames(style['box'], className)}
      style={{
        '--width': width || size,
        '--size': size,
        '--border-radius': borderRadius,
        '--base-color': colors.base,
        '--lightest-color': colors.lightest,
        '--light-color': colors.light,
        '--transparent-base-color': colors.transparentBase,
        '--transparent-light-color': colors.transparentLight
      }}
    />
  );
};

withColors(Jelly);

export default Jelly;
