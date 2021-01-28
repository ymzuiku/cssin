import { classNameCache, compMap } from "./cache";
import { addStyle } from "./addStyle";
import { fixMedia, fixPesudo } from "./fixClassName";

export const cssin = (css: string, name = "", media = "", pesudo = "") => {
  if (classNameCache[css]) {
    return css;
  }

  classNameCache[css] = true;

  css
    .split(" ")
    .filter(Boolean)
    .forEach((item) => {
      // 获取是否有注册的 comp
      const _list = item.split(":");
      const _name = _list[_list.length - 1];
      const fn = compMap[_name];

      if (fn) {
        // 若有，解析伪类和名称，重新使用 cssin 创建
        const sub = fn([]);
        const m = fixMedia(item);
        const p = fixPesudo(item);
        // 这里注意，递归的name由于需要和 className 中的保持一致，所以使用item
        // 也就是说这个行为仅仅是拿到组件的 string：sub、及组件上的 media 和 pesudo
        cssin(sub, item, m, p);
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
