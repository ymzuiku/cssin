import { addStyle } from "./addStyle";
import { groupMap, namesMap } from "./cache";
import { cssin } from "./cssin";

export const component = (name: string, css: string) => {
  const key = `^comp_${name}`;
  if (groupMap[key]) {
    return;
  }

  namesMap[name] = true;

  // const _keys = css.match(/\[(.*?)\]/g);
  // if (_keys) {
  //   // 计算组件嵌套
  //   let str = "";
  //   const groups = ["", ..._keys.map((v) => v.replace(/(\[|\])/g, ""))];
  //   const list = css.split(/\[.*?\]/g).map((v) => v.trim());
  //   groups.forEach((g, i) => {
  //     const item = list[i];
  //     if (!g) {
  //       str += " " + item + " ";
  //     } else if (item) {
  //       const oldGroup = groupMap[`^comp_${g}_${name}`];
  //       str += oldGroup + " ";

  //       cssin(item);

  //       item.split(" ").forEach((v) => {
  //         // 解析出其他组件的值，做拼接
  //         if (!namesMap[v]) {
  //           console.log("-----v", v, g);
  //           str += v + " ";
  //           // addStyle(v, g);
  //         }
  //       });
  //     }
  //   });

  //   css = str;
  // }

  groupMap[key] = css;
  css.split(" ").forEach((v: string) => addStyle(v, name));
};

component("btn", "background:#f00 font-size:40px");
component(
  "btn",
  "margin-top:40px [fish] btn border:1px|solid|#00f color:#eee "
);
