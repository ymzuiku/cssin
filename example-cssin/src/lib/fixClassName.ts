import { compMap } from "./cache";
import { device } from "./device";
let _device: any;

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

const mediaMap = {
  xs: "375px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  "3xl": "9999px",
} as any;

export function fixMedia(names: string[]) {
  if (!_device) {
    _device = device() as any;
  }
  let media = "";
  names.forEach((item) => {
    // 计算Media
    const iw = mediaMap[item];
    if (iw !== void 0) {
      media = `@media screen and (max-width: ${iw})`;
      return;
    }

    const native = _device[item];

    if (native !== void 0) {
      media = `@media screen and (min-width: ${native ? "0px" : "9999px"})`;
      return;
    }
  });

  return media;
}

export function fixPesudo(names: string[]) {
  let pesudo = "";
  names.forEach((item) => {
    const v = pesudoKeys[item];
    if (v) {
      pesudo = v;
    }
  });
  return pesudo;
}

export function fixParams(names: string[]) {
  const params = [] as string[];
  names.forEach((item, i) => {
    if (compMap[item]) {
      const v = names[i + 1];
      if (v) {
        Object.assign(params, v.split("|"));
      }
    }
  });
  return params;
}

export function fixComponentName(names: string[]) {
  return names.find((v) => compMap[v] as string) || "";
}
