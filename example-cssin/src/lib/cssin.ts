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
  const removePesudoStr = [] as string[];
  let pesudo = "";
  list.forEach((item) => {
    const _pesudo = pesudoKeys[item];
    if (_pesudo) {
      pesudo = _pesudo;
    } else {
      removePesudoStr.push(item);
    }
  });

  // 内容使用移除了伪类的字符串
  const body = removePesudoStr
    .join(":")
    .replaceAll(/calc\((.*?)\)/g, (item) => {
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

  ele.textContent = `.${key}${pesudo}{${body}}`;
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
