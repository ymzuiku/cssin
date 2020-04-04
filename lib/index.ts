import commonSheets from "./commonSheets";
import os from "./os";
import template from './template';

// 所有 sheets预设
const cssSheets = {} as any;
const addSheets = (objs: { [key: string]: any }) => {
  Object.keys(objs).forEach(key => {
    cssSheets[key] = objs[key];
  });

  return cssSheets;
};

function charCode(str: string) {
  return (
    "c" +
    str.replace(/[^0-0a-zA-Z]/g, (reg: string) =>
      reg.charCodeAt(0).toString(32)
    )
  );
}

const parserCache = {} as any;

function changeValue(value: string, isMedia = false) {
  value = value
    .split(";")
    .map((v: string) => {
      v = v.trim();
      v = v.replace("!!", " !important");
      if (isMedia && v.indexOf("important") === -1) {
        v += " !important";
      }
      return v;
    })
    .join(";");

  return value;
}

// 解析一个item, 成为一个sheet
function parserItem(item: string) {
  let key = charCode(item);
  if (parserCache[key]) {
    return parserCache[key];
  }
  if (item[0] === ".") {
    parserCache[key] = {
      key: item,
      name: item,
    };
    return parserCache[key];
  }
  const list = item.split(":").map(v => v.trim());
  let name = "";
  if (list.length > 1) {
    for (let i = 0; i < list.length - 1; i++) {
      name += list[i] + "_";
    }
  } else {
    name += list[0];
  }

  if (list.length === 1) {
    const value = cssSheets[list[0]];

    parserCache[key] = { key, name, value };
    appendStyle(parserCache[key]);
    return parserCache[key];
  }

  if (list.length === 2) {
    let event = cssSheets[list[0]];
    let value = cssSheets[list[1]] || item;
    if (typeof event === "function") {
      value = event(list[1]);
    }
    parserCache[key] = { key, name, value };
    appendStyle(parserCache[key]);
    return parserCache[key];
  }

  if (list.length === 3) {
    let event = cssSheets[list[1]];
    let value = cssSheets[list[2]] || list[1] + ":" + list[2];
    if (typeof event === "function") {
      value = event(list[2]);
    }

    if (list[0][0] === "@") {
      parserCache[key] = {
        key,
        name,
        value,
        hover: "",
        media: cssSheets[list[0]],
      };
      appendStyle(parserCache[key]);
      return parserCache[key];
    }

    parserCache[key] = {
      key,
      name,
      value,
      hover: ":" + list[0],
    };
    appendStyle(parserCache[key]);
    return parserCache[key];
  }

  if (list.length === 4) {
    let event = cssSheets[list[2]];
    let value = list[2] + ":" + list[3] + ";";
    if (typeof event === "function") {
      value = event(list[3]);
    }
    parserCache[key] = {
      key,
      name,
      value,
      hover: ":" + list[1],
      media: cssSheets[list[0]],
    };

    appendStyle(parserCache[key]);
    return parserCache[key];
  }
}

// 通过字符串创建 sheet 表
function createSheet(...args: any[]) {
  const css = template(...args);
  const sheet: {
    [key: string]: { key: string; name: string; value: string };
  } = {};
  css.split(";").forEach(item => {
    item = item.trim();
    if (item) {
      const data = parserItem(item);
      sheet[data.name] = data;
    }
  });
  return sheet;
}

// 插入样式到head
function appendStyle({ key, hover = "", media, value }: any) {
  if (os.isMobile && hover === ":hover") {
    hover = ":ignore";
  }
  if (!value) {
    return;
  }
  value = changeValue(value, !!media);
  const ele = document.createElement("style");
  ele.id = key;
  if (media) {
    ele.innerText = media(`.${key}${hover} {${value}}`);
  } else {
    ele.innerText = `.${key}${hover} {${value}}`;
  }
  document.head.append(ele);
}

function createStyle(...args: any[]) {
  const ele = document.createElement("style");
  ele.innerText = template(...args);
  document.head.append(ele);
}

function cssin(...args: any[]) {
  const sheet = createSheet(...args);
  return (...args: Element[]) => {
    args.forEach((ele: any) => {
      if (!ele.__cssin_sheet) {
        ele.__cssin_sheet = {};
      }
      Object.keys(sheet).forEach(name => {
        const data = sheet[name];
        const old = ele.__cssin_sheet[name];
        if (old) {
          ele.classList.replace(old.key, data.key);
        } else {
          ele.classList.add(data.key);
        }
      });
      ele.__cssin_sheet = Object.assign(ele.__cssin_sheet, sheet);
    });
  };
}

const setAttribute = HTMLElement.prototype.setAttribute;

HTMLElement.prototype.setAttribute = function(name: any, value: any) {
  if (cssin.coverAttribute[name]) {
    cssin(value)(this);
    setAttribute.call(this, "data-cssin", value);
  } else {
    setAttribute.call(this, name, value);
  }
};

cssin.addSheets = addSheets;
cssin.cssSheets = cssSheets;
cssin.createStyle = createStyle;
cssin.coverAttribute = { cssin: true } as any;

const max = "@media (max-width: ";
const min = "@media (min-width: ";
cssin.addSheets({
  undefined: "",
  "@xs": (v: string) => `${max}640px){${v}}`,
  "@s": (v: string) => `${max}720px){${v}}`,
  "@m": (v: string) => `${max}1024px){${v}}`,
  "@l": (v: string) => `${max}1280px){${v}}`,
  "@xl": (v: string) => `${max}1920px){${v}}`,
  "@!xs": (v: string) => `${min} 640px){${v}}`,
  "@!s": (v: string) => `${min}720px){${v}}`,
  "@!m": (v: string) => `${min}1024px){${v}}`,
  "@!l": (v: string) => `${min}1280px){${v}}`,
  "@!xl": (v: string) => `${min}1920px){${v}}`,
  "@ios": (v: string) => `${min}${os.isIOS ? "0px" : "9999px"}){${v}}`,
  "@android": (v: string) => `${min}${os.isAndroid ? "0px" : "9999px"}){${v}}`,
  "@pc": (v: string) => `${min}${os.isPc ? "0px" : "9999px"}) {${v}}`,
  "@mobile": (v: string) => `${min}${os.isMobile ? "0px" : "9999px"}){${v}}`,
});

addSheets(commonSheets);

cssin.os = os;

export default cssin;
