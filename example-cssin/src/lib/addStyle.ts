import { classNameCache } from "./cache";
import { fixClassName } from "./fixClassName";

interface AddStyle {
  css: string;
  name?: string;
  media?: string;
  pesudo?: string;
}

export const addStyle = ({
  css,
  name = "",
  media = "",
  pesudo = "",
}: AddStyle) => {
  if (!css) {
    return;
  }
  // debugger;

  const _key = `^sty_${css}_${name}_${media}_${pesudo}`;
  if (classNameCache[_key]) {
    return;
  }
  classNameCache[_key] = true;

  // 计算伪类
  // const list = css.split(":");
  const fix = { ...fixClassName(css) };
  if (fix.media) {
    media = fix.media;
  }
  if (fix.pesudo) {
    pesudo = fix.pesudo;
  }

  // list.forEach((item) => {
  //   const { media: m, pesudo: p } = fixClassName(item);
  //   // 媒体查询和伪类，子组件优先， 子属性的 m,p 会覆盖父亲的 m,p
  //   if (m) {
  //     media = m;
  //   }

  //   if (p) {
  //     pesudo = p;
  //   }

  //   if (!m && !p) {
  //     bodys.push(item);
  //   }
  // });

  // let body = rightStr.join(":").replace(/(\|)/g, " ");
  // 内容使用移除了伪类的字符串
  let val = fix.value;
  if (val) {
    // 多行空格 "a b c" "c e f" -> a|b|c~d|e|f
    const _list = val.split("~");
    if (_list.length > 1) {
      val = " " + _list.map((v) => `"${v}"`).join(" ");
      val += ";";
    }
    val = val.replaceAll(/calc\((.*?)\)/g, (item) => {
      item = item.replaceAll(/(-|\+|\*|\/)/g, (v) => " " + v + " ");
      return item;
    });
    // | 转译成空格
    val = val.replace(/\|/g, " ");

    // 目的兼容 var() 的写法
    val = val.replaceAll(/var\((.*?)\)/g, (v) => {
      return v.replace(/(var\(|\))/g, "");
    });
    // --dog 转译成 var(--dog)
    val = val.replaceAll(/--([a-zA-Z0-9_-]*)/g, (v) => `var(${v})`);
  }

  // 常用标点符号解析
  const key = (name || css).replaceAll(
    /(\:|#|!|,|\.|>|<|@|~|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,
    (v) => "\\" + v
  );

  const ele = document.createElement("style");
  if (media) {
    ele.textContent = `${media} {.${key}${pesudo}{${fix.name}:${val}}}`;
  } else {
    ele.textContent = `.${key}${pesudo}{${fix.name}:${val}}`;
  }

  document.head.append(ele);
};
