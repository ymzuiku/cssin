import { classNameCache } from "./cache";
import { device } from "./device";

export const addStyle = (css: string, name = "") => {
  if (!css) {
    return;
  }

  const _key = `^sty_${css}_${name}`;
  if (classNameCache[_key]) {
    return;
  }
  classNameCache[_key] = true;

  const ele = document.createElement("style");

  // 计算伪类
  const list = css.split(":");
  const bodys = [] as string[];
  let pesudo = "";
  let media = "";

  // if (name) {
  //   name.split(":").forEach((item) => {
  //     const { media: m, pesudo: p } = fixMediaAndPesudo(item);
  //     media = m;
  //     pesudo = p;
  //   });
  // }

  list.forEach((item) => {
    const { media: m, pesudo: p } = fixMediaAndPesudo(item);
    console.log(m, p);
    media = m;
    pesudo = p;
    bodys.push(item);
  });
  if (bodys.length < 2) {
    return;
  }

  // let body = rightStr.join(":").replace(/(\|)/g, " ");
  // 内容使用移除了伪类的字符串
  bodys[1] = bodys[1].replaceAll(/calc\((.*?)\)/g, (item) => {
    item = item.replaceAll(/(-|\+|\*|\/)/g, (v) => " " + v + " ");
    return item;
  });
  bodys[1] = bodys[1].replace(/\|/g, " ");

  // 常用标点符号解析
  const key = (name || css).replaceAll(
    /(\:|#|!|,|\.|>|<|@|\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,
    (v) => "\\" + v
  );

  if (media) {
    ele.textContent = `${media} {.${key}${pesudo}{${bodys.join(":")}}}`;
  } else {
    ele.textContent = `.${key}${pesudo}{${bodys.join(":")}}`;
  }
  console.log(ele.textContent);

  document.head.append(ele);
};

const pesudoKeys = {
  hover: ":hover",
  focus: ":focus",
  active: ":active",
  blank: ":blank",
  checked: ":checked",
  current: ":current",
  disabled: ":disabled",
  "focus-within": ":focus-within",
  "in-range": ":in-range",
  visited: ":visited",
  first: ":first-child",
  last: ":last-child",
  even: ":nth-child(even)",
  odd: ":nth-child(odd)",
  "placeholder-shown": ":placeholder-shown",
  after: "::after",
  before: "::before",
  placeholder: "::-webkit-input-placeholder",
} as any;

let _device: any;

function fixMediaAndPesudo(item: string) {
  if (!_device) {
    _device = device() as any;
  }
  let media = "";
  let pesudo = "";

  if (/^</.test(item)) {
    media = `@media (max-width: ${item.replace("<", "")})`;
    return { pesudo, media };
  }
  if (/^>/.test(item)) {
    media = `@media (min-width: ${item.replace(">", "")})`;
    return { pesudo, media };
  }

  const native = _device[item];

  if (native !== void 0) {
    media = `@media (min-width: ${native ? "0px" : "9999px"})`;
    return { pesudo, media };
  }

  const _pesudo = pesudoKeys[item];

  if (_pesudo) {
    // 使用第一个 pesudo，忽略后续的
    if (!pesudo) {
      pesudo = _pesudo;
    }
  }
  return { pesudo, media };
}
