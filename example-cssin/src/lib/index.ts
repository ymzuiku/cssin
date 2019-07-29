import mem from 'mem';

let sheets: any = {
  '@sm': (v: string) => `@media (min-width: 640px) {${v}}`,
  '@md': (v: string) => `@media (min-width: 768px) {${v}}`,
  '@lg': (v: string) => `@media (min-width: 1024px) {${v}}`,
  '@xl': (v: string) => `@media (min-width: 1280px) {${v}}`,
};

export const addSheets = (newSheets: { [key: string]: any }) => {
  sheets = {
    ...sheets,
    ...newSheets,
  };

  return sheets;
};

const appendCss = mem((css: string) => {
  const ele = document.createElement('style');
  ele.innerHTML = css;
  // tslint:disable-next-line
  ele.type = 'text/css';
  document.head.appendChild(ele);
});

export const cssin = mem((...args: any[]) => {
  const param = args.join(' ');

  if (param.indexOf('{') > 0) {
    appendCss(param);

    return '';
  }

  const list = param.split(';');
  let classname = '';

  list.forEach((str: string) => {
    str = str.trim();
    if (str === '') {
      return;
    }

    const obj = str.split(':');

    if (obj.length === 1) {
      if (str[0] === '.') {
        classname += `${str} `;

        return;
      }
      const component = sheets[str];

      if (typeof component === 'string') {
        classname += `${cssin(component)} `;
      }

      return;
    }
    // tslint:disable-next-line
    const name = 'c-' + str.replace(/[^-0-0a-zA-Z]/g, (reg: string) => `_${reg.charCodeAt(0).toString(16)}_`);
    let media = obj[obj.length - 4] || '';
    let hover = obj[obj.length - 3] || '';
    const sheet = obj[obj.length - 2] || '';
    if (obj.length === 3 && hover[0] === '@') {
      media = hover;
      hover = '';
    }
    let value = obj[obj.length - 1] || '';
    value = value.trim();
    if (value.indexOf('--') === 0) {
      value = `var(${value})`;
    }

    /** 计算并插入css */
    let css = '';
    let block = '';
    const mediaSheet = media[0] === '@' ? sheets[media] : '';
    const cssSheet = sheets[sheet];

    block = typeof cssSheet === 'function' ? sheets[sheet](value) : `{${sheet}:${value};}`;
    css = `.${name}${hover ? ':' : ''}${hover} ${block}`;

    if (typeof mediaSheet === 'function') {
      css = mediaSheet(css);
    }

    /** 插入css, 返回拼接 */
    appendCss(css);
    classname += `${name} `;
  });

  return classname;
});