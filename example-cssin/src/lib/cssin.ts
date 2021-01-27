import { templateFn } from "./templateFn";

export const cssin = (...args: any[]) => {
  const a = templateFn(...args);
  return "[cssin] " + a;
};
