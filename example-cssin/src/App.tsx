import * as React from "react";
import { init } from "./lib";

init();

let n = 0;
const css1 = "hover:background:#f00";
const css2 = "btn";
const css3 = "hover:btn";
const css4 = "btn2";
const css5 = "hover:btn2";
const css6 = "btn3:#00f";

export const App: React.FC = () => {
  return (
    <div style={{ "--a2": "#99f" } as any}>
      <div className={css1}>css1 {css1}</div>
      <div className={css2}>css2 {css2}</div>
      <div className={css3}>css3 {css3}</div>
      <div className={css4}>css4 {css4}</div>
      <div className={css5}>css5 {css5}</div>
      {/* <div className={css6}>css6</div> */}
      <h2 className="bb"></h2>
      <input placeholder="dog" />
    </div>
  );
};
