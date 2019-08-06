import { addSheets } from "./index";

const flexCode = {
  start: "flex-start",
  end: "flex-end",
  between: "space-between",
  around: "space-around"
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
  "w-min": (v: any) => `{ min-width: ${v}; }`,
  "w-max": (v: any) => `{ max-width: ${v}; }`,
  "w-min-max": (v: any) => `{ width: ${v}; max-width: ${v}; min-width: ${v}; }`,
  h: (v: any) => `{ height: ${v}; }`,
  "h-min": (v: any) => `{ min-height: ${v}; }`,
  "h-max": (v: any) => `{ maxHeight: ${v}; }`,
  "h-min-max": (v: any) =>
    `{ height: ${v}; min-height: ${v}; max-width: ${v}; }`,
  b: (v: any) => `{ border: ${v} solid; }`,
  bl: (v: any) => `{ border-left: ${v} solid;}`,
  bt: (v: any) => `{ border-top: ${v} solid; }`,
  br: (v: any) => `{ border-right: ${v} solid;}`,
  bb: (v: any) => `{ border-bottom: ${v} solid;}`,
  bc: (v: any) => `{ border-color: ${v}; }`,
  radius: (v: any) => `{ border-radius: ${v}; }`,
  font: (v: any) => `{ font-size: ${v}; }`,
  // theme
  bg: (v: any) => `{ background: ${v}; }`,
  bgc: (v: any) => `{ background-color: ${v}; }`,
  // anime
  linear: (v: any) => `{ transition: all ${v} linear; }`,
  ease: (v: any) => `{ transition: all ${v} ease; }`,
  "ease-in": (v: any) => `{ transition: all ${v} ease-in; }`,
  "ease-out": (v: any) => `{ transition: all ${v} ease-out; }`,
  "ease-in-out": (v: any) => `{ transition: all ${v} ease-in-out; }`,
  "move-x": (v: any) => `{ transform: translateX(${v}); }`,
  "move-y": (v: any) => `{ transform: translateY(${v}); }`,
  "move-z": (v: any) => `{ transform: translateZ(${v}); }`,
  rotate: (v: any) => `{ transform: rotate(${v}deg); }`,
  scale: (v: any) => `{ transform: scale(${v}, ${v}); }`,
  center:
    "display:flex; flex-direction:column; justify-content:center; align-items:center;",
  full: "width:100%; height:100%;",
  row: "display:flex; flex-direction:row;",
  "row-reverse": "display:flex; flex-direction:row-reverse;",
  col: "display:flex; flex-direction:column;",
  "col-reverse": "display:flex; flex-direction:column-reverse;",
  fixed: "position:fixed;",
  static: "position:static;",
  absolute: "position:absolute;",
  relative: "position:relative;",
  sticky: "position:sticky;",
  hidden: "display:none;",
  left: "left:0px;",
  top: "top:0px;",
  right: "right:0px;",
  bottom: "bottom:0px;",
  bold: "font-weight: bold"
};

addSheets(commonSheets);
