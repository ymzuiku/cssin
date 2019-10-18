const flexCode = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
};

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
  gtrow: (v: any) => `{ grid-template-rows: ${v}; }`,
  gtcol: (v: any) => `{ grid-template-columns: ${v}; }`,
  grow: (v: any) => `{ grid-row: ${v}; }`,
  gcol: (v: any) => `{ grid-column: ${v}; }`,
  items: (v: any) => `{ align-items: ${(flexCode as any)[v] || v};}`,
  justify: (v: any) => `{ justify-content: ${(flexCode as any)[v] || v}; }`,
  'align-self': (v: any) => `{ align-self: ${(flexCode as any)[v] || v} };`,
  'align-content': (v: any) => `{ align-content: ${(flexCode as any)[v] || v}; }`,
  // positions
  p: (v: any) => `{ padding: ${v}; }`,
  px: (v: any) => `{ padding-left: ${v}; padding-right: ${v};}`,
  py: (v: any) => `{ padding-top: ${v}; padding-bottom: ${v}; }`,
  pl: (v: any) => `{ padding-left: ${v}; }`,
  pt: (v: any) => `{ padding-top: ${v}; }`,
  pr: (v: any) => `{ padding-right: ${v}; }`,
  pb: (v: any) => `{ padding-bottom: ${v}; }`,
  m: (v: any) => `{ margin: ${v}; }`,
  mx: (v: any) => `{ margin-left: ${v}; margin-right: ${v}; }`,
  my: (v: any) => `{ margin-top: ${v}; margin-bottom: ${v}; }`,
  ml: (v: any) => `{ margin-left: ${v}; }`,
  mt: (v: any) => `{ margin-top: ${v} };`,
  mr: (v: any) => `{ margin-right: ${v}; }`,
  mb: (v: any) => `{ margin-bottom: ${v}; }`,
  w: (v: any) => `{ width: ${v} }`,
  'w-min': (v: any) => `{ min-width: ${v}; }`,
  'w-max': (v: any) => `{ max-width: ${v}; }`,
  'w-min-max': (v: any) => `{ width: ${v}; max-width: ${v}; min-width: ${v}; }`,
  h: (v: any) => `{ height: ${v}; }`,
  'h-min': (v: any) => `{ min-height: ${v}; }`,
  'h-max': (v: any) => `{ maxHeight: ${v}; }`,
  'h-min-max': (v: any) => `{ height: ${v}; min-height: ${v}; max-width: ${v}; }`,
  wh: (v: any) => `{ width: ${v}; height:${v}; }`,
  'wh-min': (v: any) => `{ min-width: ${v}; min-height:${v}; }`,
  'wh-max': (v: any) => `{ max-width: ${v}; max-height:${v}; }`,
  b: (v: any) => `{ border: ${v} solid; }`,
  bl: (v: any) => `{ border-left: ${v} solid;}`,
  bt: (v: any) => `{ border-top: ${v} solid; }`,
  br: (v: any) => `{ border-right: ${v} solid;}`,
  bb: (v: any) => `{ border-bottom: ${v} solid;}`,
  bc: (v: any) => `{ border-color: ${v}; }`,
  radius: (v: any) => `{ border-radius: ${v}; }`,
  // theme
  bg: (v: any) => `{ background: ${v}; }`,
  bgc: (v: any) => `{ background-color: ${v}; }`,
  gradient: (v: any) => `{
    background: -webkit-linear-gradient(${v});
    background: -moz-linear-gradient(${v});
    background: linear-gradient(${v});
   }`,
  // anime
  linear: (v: any) => `{ transition: all ${v} linear; }`,
  ease: (v: any) => `{ transition: all ${v} ease; }`,
  'ease-in': (v: any) => `{ transition: all ${v} ease-in; }`,
  'ease-out': (v: any) => `{ transition: all ${v} ease-out; }`,
  'ease-in-out': (v: any) => `{ transition: all ${v} ease-in-out; }`,
  'move-x': (v: any) => `{ transform: translateX(${v}); }`,
  'move-y': (v: any) => `{ transform: translateY(${v}); }`,
  'move-z': (v: any) => `{ transform: translateZ(${v}); }`,
  shadow: (v: any) => {
    if (typeof v === 'string') {
      const [key, r, g, b, a] = v.split(',').map(s => s.trim());

      return (shadowList as any)[key]([r, g, b].join(','), a);
    }

    return '';
  },
  rotate: (v: any) => `{ transform: rotate(${v}deg); }`,
  scale: (v: any) => `{ transform: scale(${v}, ${v}); }`,
  // component
  scroll: 'overflow:auto; -webkit-overflow-scrolling: touch;',
  center: 'display:flex; flex-direction:row; justify-content:center; align-items:center;',
  full: 'width:100%; height:100%;',
  row: 'display:flex; flex-direction:row;',
  'row-reverse': 'display:flex; flex-direction:row-reverse;',
  col: 'display:flex; flex-direction:column;',
  'col-reverse': 'display:flex; flex-direction:column-reverse;',
  'pe-none': 'pointer-events:none;',
  'pe-auto': 'pointer-events:auto;',
};
