const classNameCache = {} as any;
const cssCache = {} as any;

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
} as any;

const addStyle = (str: string) => {
  if (cssCache[str]) {
    return;
  }
  const baseStr = str;

  const ele = document.createElement("style");

  // 计算伪类
  const list = str.split(":");
  const rightStr = [] as string[];
  let pesudo = "";
  let media = "";
  list.forEach((item, i) => {
    if (i === 0) {
      if (/^</.test(item)) {
        media = `@media (max-width: ${item.replace("<", "")})`;
        return;
      }
      if (/^>/.test(item)) {
        media = `@media (min-width: ${item.replace(">", "")})`;
        return;
      }
    }
    const _pesudo = pesudoKeys[item];
    if (_pesudo) {
      pesudo = _pesudo;
      return;
    } else {
      rightStr.push(item);
    }
  });

  // 内容使用移除了伪类的字符串
  const body = rightStr.join(":").replaceAll(/calc\((.*?)\)/g, (item) => {
    item = item.replaceAll(/(-|\+|\*|\/)/g, (v) => " " + v + " ");
    return item;
  });

  // 缓存真实 css
  cssCache[baseStr] = body;

  // 常用标点符号解析
  const key = baseStr.replaceAll(
    /(\:|#|!|,|\.|>|<|@|\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,
    (v) => "\\" + v
  );

  console.log(media, "-----");
  if (media) {
    ele.textContent = `${media} {.${key}${pesudo}{${body}}}`;
  } else {
    ele.textContent = `.${key}${pesudo}{${body}}`;
  }

  console.log(ele.textContent);
  document.head.append(ele);
  return str;
};

export const cssin = (str: string) => {
  if (!classNameCache[str]) {
    classNameCache[str] = 1;
    str.split(" ").forEach(addStyle);
  }

  return str;
};
