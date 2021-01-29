import * as React from "react";
import { init } from "./lib";

init(true);

let n = 0;
const css0 = "background:#aaa  sm:background:#66f md:background:#aaf ";

// const css0 =
//   "background:#aaa md:background:#aaf sm:background:#66f xs:background:#00f ";
const css1 = "hover:background:#f00 sm:background:#00f";
const css2 = "btn";
const css3 = "hover:btn";
const css4 = "btn2";
const css5 = "hover:btn2";
const css6 = "btn3:#00f";
const css7 = "btn4:#fff|#00f";
const css8 = "hover:btn4:#fff|#00f";
const css9 = "sm:hover:btn4:#fff|#00f";

export const App: React.FC = () => {
  return (
    <div style={{ "--a2": "#99f" } as any}>
      <div className={css0}>css0 {css0}</div>
      {/* <div className={css1}>css1 {css1}</div> */}
      {/* <div className={css2}>css2 {css2}</div> */}
      {/* <div className={css3}>css3 {css3}</div> */}
      {/* <div className={css4}>css4 {css4}</div> */}
      {/* <div className={css5}>css5 {css5}</div> */}
      {/* <div className={css6}>css6 {css6}</div> */}
      {/* <div className={css7}>css7 {css7}</div> */}
      <div className={css8}>css8 {css8}</div>
      <div className={css9}>css9 {css9}</div>
      <h2 className="bb"></h2>
      <input placeholder="dog" />
    </div>
  );
};
