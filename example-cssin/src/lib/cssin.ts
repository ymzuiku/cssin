import { device } from "./device";
const classNameCache = {} as any;
const cssMap = {} as any;

const pesudoKeys = {
  hover: ":hover",
  focus: ":focus",
  active: ":active",
  first: ":first-child",
  last: ":last-child",
  blank: ":blank",
  checked: ":checked",
  current: ":current",
  disabled: ":disabled",
  within: ":focus-within",
  "in-range": ":in-range",
  visited: ":visited",
  even: ":nth-child(even)",
  odd: ":nth-child(odd)",
  "placeholder-shown": ":placeholder-shown",
  after: "::after",
  before: "::before",
  placeholder: "::-webkit-input-placeholder",
} as any;

const addStyle = (str: string, brother: string = "") => {
  if (!str) {
    return;
  }

  const cacheKey = `${brother} ${str}`;

  if (classNameCache[cacheKey]) {
    return;
  }
  // 增加计算锁
  classNameCache[cacheKey] = true;

  const _device = device() as any;

  const ele = document.createElement("style");

  // 计算伪类
  const list = str.split(":");
  const rightStr = [] as string[];
  let pesudo = "";
  let media = "";
  list.forEach((item, i) => {
    if (/^</.test(item)) {
      media = `@media (max-width: ${item.replace("<", "")})`;
      return;
    }
    if (/^>/.test(item)) {
      media = `@media (min-width: ${item.replace(">", "")})`;
      return;
    }

    const native = _device[item];
    if (native !== void 0) {
      media = `@media (min-width: ${native ? "0px" : "9999px"})`;
      return;
    }
    const _pesudo = pesudoKeys[item];
    if (_pesudo) {
      // 使用第一个 pesudo，忽略后续的
      if (!pesudo) {
        pesudo = _pesudo;
      }
      return;
    }
    rightStr.push(item);
  });

  // 内容使用移除了伪类的字符串
  const body = rightStr.join(":").replaceAll(/calc\((.*?)\)/g, (item) => {
    item = item.replaceAll(/(-|\+|\*|\/)/g, (v) => " " + v + " ");
    return item;
  });

  // 常用标点符号解析
  const key = str.replaceAll(
    /(\:|#|!|,|\.|>|<|@|\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,
    (v) => "\\" + v
  );

  // 缓存真实 css
  // cssCache[key] = body;

  const brotherKey = brother ? `.\\[${brother}\\]` : "";

  if (media) {
    ele.textContent = `${media} {${brotherKey}.${key}${pesudo}{${body}}}`;
  } else {
    ele.textContent = `${brotherKey}.${key}${pesudo}{${body}}`;
  }

  document.head.append(ele);
  return str;
};

export const cssin = (str: string) => {
  if (!classNameCache[str]) {
    classNameCache[str] = true;
    const _keys = str.match(/\[(.*?)\]/g);
    if (_keys) {
      const keys = ["", ..._keys.map((v) => v.replace(/(\[|\])/g, ""))];
      const list = str.split(/\[.*?\]/g).map((v) => v.trim());
      keys.forEach((k, i) => {
        const item = list[i];
        if (item) {
          item.split(" ").forEach((v) => addStyle(v, k));
        }
      });
    } else {
      str.split(" ").forEach((v) => addStyle(v));
    }
  }

  return str;
};
