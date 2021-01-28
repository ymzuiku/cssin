import { classNameCache } from "./cache";
import { device } from "./device";

const minWidthMap = {
  xs: "var(--xs, 375px)",
  sm: "var(--sm, 640px)",
  md: "var(--md, 748px)",
  lg: "var(--lg, 1024px)",
  xl: "var(--xl, 1440px)",
  "2xl": "var(--2xl, 1920px)",
} as any;

export const addStyle = (css: string, group = "", name = "") => {
  if (!css) {
    return;
  }
  // debugger;

  const _key = `^sty_${css}_${group}_${name}`;
  if (classNameCache[_key]) {
    return;
  }
  classNameCache[_key] = true;

  // 计算伪类
  const list = css.split(":");
  const bodys = [] as string[];
  let pesudo = "";
  let media = "";

  // if (name) {
  //   name.split(":").forEach((item) => {
  //     if (!media) {
  //       const m = fixMedia(item);
  //       if (m) {
  //         media = m;
  //       }
  //     }

  //     if (!pesudo) {
  //       const p = fixPesudo(item);
  //       if (p) {
  //         pesudo = p;
  //       }
  //     }
  //   });
  // }

  list.forEach((item) => {
    const m = fixMedia(item);
    const p = fixPesudo(item);
    if (!media) {
      if (m) {
        media = m;
      }
    }

    if (!pesudo) {
      if (p) {
        pesudo = p;
      }
    }

    if (!m && !p) {
      bodys.push(item);
    }
  });
  const len = bodys.length - 1;

  if (bodys.length < 2) {
    return;
  }

  // let body = rightStr.join(":").replace(/(\|)/g, " ");
  // 内容使用移除了伪类的字符串
  if (bodys[len]) {
    bodys[len] = bodys[len].replaceAll(/calc\((.*?)\)/g, (item) => {
      item = item.replaceAll(/(-|\+|\*|\/)/g, (v) => " " + v + " ");
      return item;
    });
    bodys[len] = bodys[len].replace(/\|/g, " ");
  }

  // 常用标点符号解析
  const key = (name || css).replaceAll(
    /(\:|#|!|,|\.|>|<|@|\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,
    (v) => "\\" + v
  );

  const groupKey = group ? `.\\[${group}\\]` : "";

  const ele = document.createElement("style");
  if (media) {
    ele.textContent = `${media} {${groupKey}.${key}${pesudo}{${bodys.join(
      ":"
    )}}}`;
  } else {
    ele.textContent = `${groupKey}.${key}${pesudo}{${bodys.join(":")}}`;
  }

  console.log("end", ele.textContent);

  document.head.append(ele);
};

const pesudoKeys = {
  hover: ":hover",
  focus: ":focus",
  active: ":active",
  "first-child": ":first-child",
  "last-child": ":last-child",
  blank: ":blank",
  checked: ":checked",
  current: ":current",
  disabled: ":disabled",
  "focus-within": ":focus-within",
  "in-range": ":in-range",
  visited: ":visited",
  even: ":nth-child(even)",
  odd: ":nth-child(odd)",
  "placeholder-shown": ":placeholder-shown",
  after: "::after",
  before: "::before",
  placeholder: "::-webkit-input-placeholder",
} as any;

let _device: any;

function fixMedia(item: string) {
  if (!_device) {
    _device = device() as any;
  }
  let media = "";

  // 计算Media
  const minWidth = minWidthMap[item];
  if (minWidth !== void 0) {
    media = `@media (min-width: ${minWidth})`;
    return media;
  }

  const native = _device[item];

  if (native !== void 0) {
    media = `@media (min-width: ${native ? "0px" : "9999px"})`;
    return media;
  }

  return media;
}

function fixPesudo(item: string) {
  return pesudoKeys[item] || "";
}
