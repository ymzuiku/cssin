import { compMap } from "./cache";
import { fixClassName } from "./fixClassName";

export const component = (name: string, value: string) => {
  const old = compMap[name];
  if (old) {
    return old;
  }

  compMap[name] = (values: string[]) => {
    let css = value;
    values.forEach((v, i) => {
      css = css.replace("$" + (i + 1), v);
    });
    let out = "";
    css.split(" ").forEach((v) => {
      // 若css中还有其他 comp，则递归查找，拼接到 out 中
      // 兼容组件名称中带有参数
      const { comp, value } = fixClassName(v);
      out += (comp ? comp(value.split("|")) : v) + " ";
    });
    return out;
  };
};

component("btn", "background:#f00 active:font-size:40px");
component(
  "btn2",
  "margin-left:20px btn hover:border:1px|solid|#00f color:#eee "
);

component("btn3", "margin-left:50px background:$1");
component("btn4", "color:$1 btn3:$2");
