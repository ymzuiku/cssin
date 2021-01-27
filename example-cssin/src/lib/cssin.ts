import { templateFn } from "./templateFn";

export const cssin = (...args: any[]) => {
  const a = templateFn(...args);

  a.replace(/! /g, "");
  return "! " + a;
};
