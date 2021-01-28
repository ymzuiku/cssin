import { classNameCache } from "./cache";
import { addStyle } from "./addStyle";

export const cssin = (css: string) => {
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
  css.split(" ").forEach((v) => addStyle(v));

  return css;
};
