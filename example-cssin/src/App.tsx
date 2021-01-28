import * as React from "react";
import { cssin, observeClass } from "./lib";

observeClass();

let n = 0;
const css =
  "[fish] background:#f3f3f3 desktop:placeholder:color:#f00 color:#88f font-size:calc(10px+50px)";

export const App: React.FC = () => {
  return (
    <div style={{ "--a2": "#99f" } as any}>
      <div className={cssin(css)}>dog</div>
      <h2 className="bb"></h2>
      <input placeholder="dog" />
    </div>
  );
};
