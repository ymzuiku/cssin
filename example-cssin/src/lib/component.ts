import { compMap } from "./cache";

export const component = (name: string, value: string) => {
  const old = compMap[name];
  if (old) {
    return old;
  }

  compMap[name] = (values: string[]) => {
    let css = value;
    values.forEach((v, i) => {
      css = css.replace("$" + i, v);
    });
    let out = "";
    css.split(" ").forEach((v) => {
      // 若css中还有其他 comp，则递归查找，拼接到 out 中
      const fn = compMap[v];
      out += (fn ? fn([]) : v) + " ";
    });
    return out;
  };
};

component("btn", "background:#f00 active:font-size:40px");
component(
  "btn2",
  "margin-top:40px btn hover:border:1px|solid|#00f color:#eee "
);
