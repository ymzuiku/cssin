const shadowList = {
  sm: (rgb: any, a: any) =>
    `{box-shadow: 0 1px 3px 0 rgba(${rgb}, ${a}), 0 1px 2px 0 rgba(${rgb}, ${a > 0 ? a / 2 : 0});}`,
  md: (rgb: any, a: any) =>
    `{box-shadow: 0 4px 6px -1px rgba(${rgb}, ${a}), 0 2px 4px -1px rgba(${rgb}, ${a > 0 ? a / 2 : 0});}`,
  lg: (rgb: any, a: any) =>
    `{box-shadow: 0 10px 15px -3px rgba(${rgb}, ${a}), 0 4px 6px -2px rgba(${rgb}, ${a > 0 ? a / 2 : 0});}`,
  xl: (rgb: any, a: any) =>
    `{box-shadow: 0 20px 25px -5px rgba(${rgb}, ${a}), 0 10px 10px -5px rgba(${rgb}, ${a > 0 ? a / 2 : 0});}`,
  xxl: (rgb: any, a: any) =>
    `{box-shadow: 0 25px 30px -5px rgba(${rgb}, ${a}), 0 10px 10px -5px rgba(${rgb}, ${a > 0 ? a / 2 : 0});}`,
};

export const commonSheets = {
  gradient: (v: any) => `{
    background: -webkit-linear-gradient(${v});
    background: -moz-linear-gradient(${v});
    background: linear-gradient(${v});
   }`,
  shadow: (v: any) => {
    if (typeof v === 'string') {
      const [key, r, g, b, a] = v.split(',').map(s => s.trim());

      return (shadowList as any)[key]([r, g, b].join(','), a);
    }

    return '';
  },
  // component
  scroll: 'overflow:auto; -webkit-overflow-scrolling: touch;',
  center: 'display:flex; flex-direction:row; justify-content:center; align-items:center;',
  row: 'display:flex; flex-direction:row;',
  'row-reverse': 'display:flex; flex-direction:row-reverse;',
  col: 'display:flex; flex-direction:column;',
  'col-reverse': 'display:flex; flex-direction:column-reverse;',
  'pe-none': 'pointer-events:none;',
  'pe-auto': 'pointer-events:auto;',
};
