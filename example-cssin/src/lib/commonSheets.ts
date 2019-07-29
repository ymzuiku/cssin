import { addSheets } from './index';

const flexCode = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
};

export const commonSheets = {
  dis: (v: any) => `{ display: ${v}; }`,
  items: (v: any) => `{ align-items: ${(flexCode as any)[v] || v};}`,
  justify: (v: any) => `{ justify-content: ${(flexCode as any)[v] || v}; }`,
  self: (v: any) => `{ align-self: ${(flexCode as any)[v] || v} };`,
  content: (v: any) => `{ align-content: ${(flexCode as any)[v] || v}; }`,
  z: (v: any) => `{ z-index: ${v}; }`,
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
  minw: (v: any) => `{ min-width: ${v}; }`,
  maxw: (v: any) => `{ max-width: ${v}; }`,
  mmw: (v: any) => `{ width: ${v}; max-width: ${v}; min-width: ${v}; }`,
  h: (v: any) => `{ height: ${v}; }`,
  minh: (v: any) => `{ min-height: ${v}; }`,
  maxh: (v: any) => `{ maxHeight: ${v}; }`,
  mmh: (v: any) => `{ height: ${v}; min-height: ${v}; max-width: ${v}; }`,
  b: (v: any) => `{ border: ${v}; }`,
  bt: (v: any) => `{ border-top: ${v}; }`,
  br: (v: any) => `{ border-right: ${v}; }`,
  bb: (v: any) => `{ border-bottom: ${v}; }`,
  bl: (v: any) => `{ border-left: ${v}; }`,
  'b-t': (v: any) => `{ border-top: ${v} solid; }`,
  'b-r': (v: any) => `{ border-right: ${v} solid; }`,
  'b-l': (v: any) => `{ border-left: ${v} solid; }`,
  'b-b': (v: any) => `{ border-bottom: ${v} solid; }`,
  'b-color': (v: any) => `{ border-color: ${v}; }`,
  'b-style': (v: any) => `{ border-style: ${v}; }`,
  radius: (v: any) => `{ border-radius: ${v}; }`,
  'radius-t-l': (v: any) => `{ border-top-left-radius: ${v}; }`,
  'radius-t-r': (v: any) => `{ border-top-right-radius: ${v}; }`,
  'radius-b-l': (v: any) => `{ border-bottom-left-radius: ${v}; }`,
  'radius-b-r': (v: any) => `{ border-bottom-right-radius: ${v}; }`,
  font: (v: any) => `{ font-size: ${v}; }`,
  // theme
  bg: (v: any) => `{ background: ${v}; }`,
  bgc: (v: any) => `{ background-color: ${v}; }`,
  // anime
  'ease-in': (v: any) => `{ transition: all ${v} ease-in; }`,
  'ease-in-out': (v: any) => `{ transition: all ${v} ease-in-out; }`,
  scale: (v: any) => `{ transform: scale(${v}, ${v})}; }`,
  center: 'display:flex; flex-direction:column; justify-content:center; align-items:center;',
  row: 'display:flex; flex-direction:row;',
  'row-reverse': 'display:flex; flex-direction:row-reverse;',
  col: 'display:flex; flex-direction:column;',
  'col-reverse': 'display:flex; flex-direction:column-reverse;',
  fixed: 'position:fixed;',
  static: 'position:static;',
  absolute: 'position:absolute;',
  relative: 'position:relative;',
  sticky: 'position:sticky;',
  left: 'left:0px;',
  top: 'top:0px;',
  right: 'right:0px;',
  bottom: 'bottom:0px;',
};

addSheets(commonSheets);
