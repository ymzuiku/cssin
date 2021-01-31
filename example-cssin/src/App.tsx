import * as React from "react";
import "./lib";

let n = 0;
const css0 = "border:2px|solid|--red-500 sm:border:2px|solid|--blue-500";

// function space() {
//   const v = ~~(Math.random() * 100);
//   parser(`hover:background:#${v}f sm:background:#${v}f`);
//   parser("btn");
//   parser(`btn2 font-size:${v}px`);
//   parser(`hover:btn2`);
//   parser(`btn3:--red-500`);
//   parser(`btn4:#fff,#${v}f`);
//   parser(`hover:btn4:#fff,#${v}f`);
//   parser(`"sm:hover:btn4:#fff,#${v}f"`);
//   parser(`"sm:hover:btn4:#fff,#${v}f:.fish"`);
// }

// console.time("a");
// for (let i = 0; i < 1000; i++) {
//   space();
// }
console.timeEnd("a");

const Item: React.FC = () => {
  const v = ~~(Math.random() * 100);
  const css1 = `hover:background:#${v}f sm:background:#${v}f`;
  const css2 = "btn";
  const css3 = "hover:btn";
  const css4 = `btn2 font-size:${v}px`;
  const css5 = "hover:btn2";
  const css6 = "btn3:--red-500";
  const css7 = "btn4:#fff,#00f";
  const css8 = "hover:btn4:#fff,#00f";
  const css9 = "sm:hover:btn4:#fff,#00f";
  const css10 = "sm:hover:btn4:#fff,#00f:.fish";

  return (
    <div style={{ "--a2": "#99f" } as any}>
      <div className="areas:a|a|c~b|b|c">
        <div className="grid-area:a">a</div>
        <div className="grid-area:b">b</div>
        <div className="grid-area:c">c</div>
      </div>
      <div className={css0}>css0 {css0}</div>
      <div className={css1}>css1 {css1}</div>
      <div className={css2}>css2 {css2}</div>
      <div className={css3}>css3 {css3}</div>
      <div className={css4}>css4 {css4}</div>
      <div className={css5}>css5 {css5}</div>
      <div className={css6}>css6 {css6}</div>
      <div className={css7}>css7 {css7}</div>
      <div className={css8}>css8 {css8}</div>
      <div className={css9}>css9 {css9}</div>
      <div className={css10}>
        <label></label>
        <label>label</label>
        <p className="fish">the-p</p>
        <label>label</label>
        <p>the-p</p>
      </div>
      <h2 className="bb"></h2>
      <input placeholder="dog" />
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <template>
        <div
          class-group="btn"
          className="background:#f00 active:font-size:40px"
        />
        <div
          class-group="btn2"
          className="margin-left:20px btn hover:border:4px|solid|#00f color:#eee"
        />
        <div class-group="btn3" className="margin-left:50px background:$1" />
        <div class-group="btn4" className="color:$1 btn3:$2" />
      </template>
      {Array(1000)
        .fill(0)
        .map((v, i) => {
          return <Item key={i} />;
        })}
    </div>
  );
};
