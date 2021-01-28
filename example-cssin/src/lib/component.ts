import { addStyle } from "./addStyle";
import { compMap } from "./cache";

export const component = (name: string, value: string) => {
  if (compMap[name]) {
    return;
  }

  compMap[name] = (values: string[]) => {
    let css = value;
    values.forEach((v, i) => {
      css = css.replace("$" + i, v);
    });
    let out = "";
    css.split(" ").forEach((v) => {
      const fn = compMap[v];
      out += (fn ? fn(v) : v) + " ";
    });
    return out;
  };
};

component("btn", "background:#f00 font-size:40px");
component("btn2", "margin-top:40px btn border:1px|solid|#00f color:#eee ");
