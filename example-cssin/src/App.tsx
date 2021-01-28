import * as React from "react";
import { cssin, observeClass } from "./lib";

observeClass();

let n = 0;
// const css = "gw-button gw-button-big gw-desktop";
const css =
  "hover:background:#f3f3f3 desktop:active:color:#f00 color:#88f font-size:calc(10px+50px)";
// css =
// "gw-button background:#f3f3f3 desktop:active:color:#f00 color:#88f font-size:calc(10px+50px)";

export const App: React.FC = () => {
  return (
    <div style={{ "--a2": "#99f" } as any}>
      <div className={cssin(css)}>dog</div>
      <h2 className="bb"></h2>
      <input placeholder="dog" />
    </div>
  );
};

let c0 = `
bg-blue-500 sm:active:c:blue-500 br-sm br-solid br-primary-500
`;

let c1 = `
background:var(--blue-500) sm:active:color:var(--sm) border-right:1px|solid|var(--primary-500)
`;

let c2 = `
background:blue-5 sm:active:color:sm border-right:1px|solid|primary-500
`;

let c3 = `
[wf] bg:blue-500 sm:active:c:sm br:1px|solid|primary-500
`;

let c4 = `
background:--blue-500 sm:active:color:--sm border-right:1px|solid|--primary
`;

console.log(document.body.classList);
