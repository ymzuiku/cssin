import mem from 'mem';

const appendCss = mem((str: string, isNotRegex = false) => {
  const ele = document.createElement('style');
  ele.innerHTML = str;
  // tslint:disable-next-line
  ele.type = 'text/css';
  document.head.appendChild(ele);

  if (isNotRegex) {
    return '';
  }

  // 暂时只匹配一个class
  const regex = /\.[^{^:]*/;
  const names = str.match(regex);
  const classname = names ? names.map((v) => v.replace(/(\.| )/g, '')).join(' ') : '';

  return `${classname} `;
});

let allParasers: any = {};

export const cssin = mem(
  (...args: any[]): string => {
    const param = args.join(' ');
    if (param[0] === '@') {
      return appendCss(param.replace('@', ''));
    }

    let style = '';
    const tokens = param.split(' ');

    tokens.forEach((v: string) => {
      if (v === '') {
        return;
      }
      const prelist = v.split(':');
      let pre = '';

      if (prelist.length > 1) {
        const [thePre, ...rest] = prelist;
        pre = `:${thePre}`;
        v = rest.join('');
      }
      const [key, value] = v.split('=');
      // 将特殊字符转为 number code
      const name = v.replace(/[^-0-0a-zA-Z]/g, (reg: string) => `_${reg.charCodeAt(0).toString(16)}_`);
      if (value) {
        // 包含等号的token 如 bg=#f00
        const fn = allParasers[`${key}=`];
        if (fn) {
          const cssString = `.${name}${pre} ${fn(value)}`;
          style += appendCss(cssString);
        } else {
          // 包含等号的token, 且未预设如 background-color=#f00
          let subV = value;
          if (value.indexOf('--') === 0) {
            subV = `var(${value})`;
          }

          subV = subV.replace(/_/g, ' ');
          const cssString = `.${name}${pre} {${key}:${subV}}`;
          style += appendCss(cssString);
        }
      } else {
        // 不包含等号的token，如 fixed!
        const cssCode = allParasers[v];
        if (cssCode) {
          const componentName = cssin(cssCode);
          style += componentName;
        }
      }
    });

    return style;
  },
);

export const addParsers = (objs: { [key: string]: any }) => {
  const parser: any = {};
  const keys = Object.keys(objs);
  keys.forEach((key: string) => {
    const fn = objs[key];
    if (typeof fn === 'string') {
      parser[key] = fn;
    } else {
      parser[key] = mem(
        (param: string): string => {
          let v: string = param.replace(key, '') as any;
          if (v.indexOf('--') === 0) {
            v = `var(${v})`;
          }
          v = v.replace(/_/g, ' ');

          return fn(v);
        },
      );
    }
  });
  allParasers = { ...allParasers, ...parser };

  return parser;
};

// tslint:disable-next-line
export default cssin;
