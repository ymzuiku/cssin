export const tailwind = (classGroup: Function) => {
  if (typeof classGroup !== "function") {
    throw "tailwind unfinded classGroup Function";
  }
  classGroup("");
};
