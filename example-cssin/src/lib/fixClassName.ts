import { compMap } from "./cache";
import { device } from "./device";

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
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
} as any;

const fixCache = {} as any;

interface FixClassName {
  comp: (params: string[]) => string;
  pesudo: string;
  media: string;
  name: string;
  value: string;
}

export function fixClassName(css: string): FixClassName {
  const old = fixCache[css];
  if (old) {
    return old;
  }
  const out: FixClassName = {
    comp: void 0 as any,
    pesudo: "",
    media: "",
    name: "",
    value: "",
  };

  css.split(":").forEach((v) => {
    if (pesudoKeys[v]) {
      out.pesudo = pesudoKeys[v];
    } else if (compMap[v]) {
      out.comp = compMap[v];
    } else if (mediaMap[v]) {
      out.media = `@media screen and (min-width: ${mediaMap[v]})`;
    } else if ((device() as any)[v] !== void 0) {
      out.media = `@media screen and (min-width: ${
        (device() as any)[v] ? "0px" : "9999px"
      })`;
    } else if (!out.name && !out.comp) {
      out.name = v;
    } else if (!out.value) {
      out.value = v;
    }
  });
  fixCache[css] = out;
  console.log(css, out);
  return out;
}
