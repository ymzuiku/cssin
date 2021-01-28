import { addStyle } from "./addStyle";
import { compMap, namesMap } from "./cache";
import { cssin } from "./cssin";

export const component = (group: string, name: string, css: string) => {
  const key = `^comp_${group}_${name}`;
  if (compMap[key]) {
    return;
  }

  compMap[key] = (str: string) => {
    namesMap[str] = true;

    const _keys = css.match(/\[(.*?)\]/g);
    if (_keys) {
      // 计算组件嵌套
      let str = "";
      const groups = ["", ..._keys.map((v) => v.replace(/(\[|\])/g, ""))];
      const list = css.split(/\[.*?\]/g).map((v) => v.trim());
      groups.forEach((g, i) => {
        const item = list[i];
        if (!g) {
          str += " " + item + " ";
        } else if (item) {
          const oldGroup = compMap[`^comp_${g}_${str}`];
          str += oldGroup + " ";

          cssin(item);

          item.split(" ").forEach((v) => {
            // 解析出其他组件的值，做拼接
            if (!namesMap[v]) {
              str += v + " ";
              // addStyle(v, g);
            }
          });
        }
      });

      css = str;
    }

    compMap[key] = css;
    css.split(" ").forEach((v: string) => addStyle(v, group, str));
  };
};

component("fish", "btn", "background:#f00 font-size:40px");
component(
  "dog",
  "btn",
  "margin-top:$1 [fish] btn hover:border:1px|solid|#00f color:#eee "
);

const css = "[fish] dog:20|30|40";
