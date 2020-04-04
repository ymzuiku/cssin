function template(...args: any): string {
  if (args.length > 1) {
    const [str, ...rest] = args;
    let out = "";

    str.forEach((v: string, i: number) => {
      out += v;
      if (rest[i] !== undefined || rest[i] !== null) {
        out += rest[i];
      }
    });

    return out;
  }
  if (typeof args[0] === "string") {
    return args[0];
  }

  if (args[0]) {
    return args[0].join("");
  }

  return "";
}

export default template;