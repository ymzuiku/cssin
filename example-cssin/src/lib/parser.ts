import { classNameCache, compMap } from "./cache";
import { addStyle } from "./addStyle";
import { fixMedia, fixParams, fixPesudo } from "./fixClassName";

export const parser = (css: string, name = "", media = "", pesudo = "") => {
  const key = `^parser_${css}_${name}_${media}_${pesudo}`;
  if (classNameCache[key]) {
    return css;
  }

  classNameCache[key] = true;

  css
    .split(" ")
    .filter(Boolean)
    .forEach((item) => {
      // 获取是否有注册的 comp
      const list = item.split(":");
      const params = fixParams(list);
      let index = list.length - 1;
      if (params.length) {
        index -= 1;
      }
      const _name = list[index];
      const fn = compMap[_name];

      if (fn) {
        // 若有，解析伪类和名称，重新使用 cssin 创建
        const sub = fn(params);
        const m = fixMedia(list);
        const p = fixPesudo(list);
        // 这里注意，递归的name由于需要和 className 中的保持一致，所以使用item
        // 也就是说这个行为仅仅是拿到组件的 string：sub、及组件上的 media 和 pesudo
        parser(sub, item, m, p);
      } else {
        addStyle({
          css: item,
          name,
          media,
          pesudo,
        });
      }
    });

  return css;
};
