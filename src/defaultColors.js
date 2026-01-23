const defaultColors = {
  Purple: '#9333ea',
  Orange: '#fb923c',
  Blue: '#0ea5e9',
  Pink: '#fb7185',
  Green: '#10b981',
  Yellow: '#f59e0b',
  Red: '#ef4444',
  Gray: '#6b7280',
  Black: '#000000'
};

export const withColors = target => {
  target.Colors = defaultColors;
  Object.keys(target.Colors).forEach(name => {
    target[name] = defaultColors[name];
  });
};

export default defaultColors;
