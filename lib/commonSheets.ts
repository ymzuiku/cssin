const commonSheets = {
  gradient: (v: any) =>
    `background: -webkit-linear-gradient(${v}); background: linear-gradient(${v});`,
  backdrop: (v: string) =>
    `-webkit-backdrop-filter": "saturate(180%) blur(${v});`,
  // flex-justify-content
  row: "display:flex; flex-direction:row;",
  col: "display:flex; flex-direction:column;",
  "row-r": "display:flex; flex-direction:row-reverse;",
  "col-r": "display:flex; flex-direction:column-reverse;",
  "center-start": "justify-content:center; align-items:flex-start;",
  "center-center": "justify-content:center; align-items:center;",
  "center-end": "justify-content:center; align-items:flex-end;",
  "start-start": "justify-content:flex-start; align-items:flex-start;",
  "start-center": "justify-content:flex-start; align-items:center;",
  "start-end": "justify-content:flex-start; align-items:flex-end;",
  "end-start": "justify-content:flex-end; align-items:flex-start;",
  "end-center": "justify-content:flex-end; align-items:center;",
  "end-end": "justify-content:flex-end; align-items:flex-end;",
  "between-start": "justify-content:space-between; align-items:flex-start;",
  "between-center": "justify-content:space-betweend; align-items:center;",
  "between-end": "justify-content:space-between; align-items:flex-end;",
  "around-start": "justify-content:space-around; align-items:flex-start;",
  "around-center": "justify-content:space-around; align-items:center;",
  "around-end": "justify-content:space-around; align-items:flex-end;",
  // snap
  "snap-x": `scroll-snap-type: x mandatory !important;`,
  "snap-y": `scroll-snap-type: y mandatory !important;`,
  "snap-center;": `scroll-snap-align: center;`,
  serif: `font-family: ssans-serif,SimSun,宋体,serif;Arial,sans-serif;`,
};

export default commonSheets;
