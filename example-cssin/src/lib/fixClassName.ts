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

const minWidthMap = {
  xs: "var(--xs, 375px)",
  sm: "var(--sm, 640px)",
  md: "var(--md, 748px)",
  lg: "var(--lg, 1024px)",
  xl: "var(--xl, 1440px)",
  "2xl": "var(--2xl, 1920px)",
} as any;

export function fixMedia(names: string[]) {
  if (!_device) {
    _device = device() as any;
  }
  let media = "";
  names.forEach((item) => {
    // 计算Media
    const minWidth = minWidthMap[item];
    if (minWidth !== void 0) {
      media = `@media (min-width: ${minWidth})`;
      return;
    }

    const native = _device[item];

    if (native !== void 0) {
      media = `@media (min-width: ${native ? "0px" : "9999px"})`;
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
        params.push(v);
      }
    }
  });
  return params;
}
