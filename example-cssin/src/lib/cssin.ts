import { classNameCache, compMap } from "./cache";
import { addStyle } from "./addStyle";

export const cssin = (css: string, name = "") => {
  if (classNameCache[css]) {
    return css;
  }

  classNameCache[css] = true;

  // const _keys = css.match(/\[(.*?)\]/g);
  // if (_keys) {
  //   const groups = ["", ..._keys.map((v) => v.replace(/(\[|\])/g, ""))];
  //   const list = css.split(/\[.*?\]/g).map((v) => v.trim());
  //   groups.forEach((g, i) => {
  //     const item = list[i];
  //     if (item) {
  //       item.split(" ").forEach((v) => addStyle(v, g));
  //     }
  //   });
  // } else {

  // }
  css.split(" ").forEach((v) => {
    console.log("------", v);
    const fn = compMap[v];
    if (fn) {
      const sub = fn([]);
      console.log("sub", sub);
      cssin(sub, v);
    } else {
      addStyle({
        css: v,
        name: name,
      });
    }
  });

  return css;
};
