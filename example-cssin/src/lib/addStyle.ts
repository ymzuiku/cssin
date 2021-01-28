import { classNameCache } from "./cache";
import { fixPesudo, fixMedia } from "./fixClassName";

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
  const list = css.split(":");
  const bodys = [] as string[];

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
    const m = fixMedia([item]);
    const p = fixPesudo([item]);
    // 媒体查询和伪类，子组件优先， 子属性的 m,p 会覆盖父亲的 m,p
    if (m) {
      media = m;
    }

    if (p) {
      pesudo = p;
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

  const ele = document.createElement("style");
  if (media) {
    ele.textContent = `${media} {.${key}${pesudo}{${bodys.join(":")}}}`;
  } else {
    ele.textContent = `.${key}${pesudo}{${bodys.join(":")}}`;
  }

  console.log("end", { css, name, out: ele.textContent });

  document.head.append(ele);
};
