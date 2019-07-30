

const sheets = new Map();
const coverCache = new Set();

export const coverAttribute = (attribute='inlist')=>{
  if (coverCache.has(attribute)) {
    return;
  }
  coverCache.add(attribute);
  // tslint:disable
  const docCreate = document.createElement;
  document.createElement = function(name:any, option:any) {
    const ele = docCreate.call(document, name, option);
    const setAttribute = ele.setAttribute;

    ele.setAttribute = (name:any, value:any)=>{
      if(name === attribute) {
        setAttribute.call(ele, 'class', cssin(value));
      } else {
        setAttribute.call(ele, name, value);
      }
    }
    return ele;
  }
  // tslint:enable
}

export const addSheets = (objs: { [key: string]: any }) => {
  Object.keys(objs).forEach((key) => {
    sheets.set(key, objs[key]);
  });

  return sheets;
};

addSheets({
  '@sm': (v: string) => `@media (min-width: 640px) {${v}}`,
  '@md': (v: string) => `@media (min-width: 768px) {${v}}`,
  '@lg': (v: string) => `@media (min-width: 1024px) {${v}}`,
  '@xl': (v: string) => `@media (min-width: 1280px) {${v}}`,
});

const appendCssCache = new Set();

const appendCss = (css: string) => {
  if (appendCssCache.has(css)) {
    return;
  }
  appendCssCache.add(css);
  const ele = document.createElement('style');
  ele.innerHTML = css;
  // tslint:disable-next-line
  ele.type = 'text/css';
  document.head.appendChild(ele);
};

const cssinCache = new Map();

export const cssin = (inlist:any) => {
  const param = typeof inlist === 'string' ? inlist : inlist.join('');

  if (cssinCache.has(param)) {
    return cssinCache.get(param);
  }

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
      const component = sheets.get(str);

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
    const mediaSheet = media[0] === '@' ? sheets.get(media) : '';
    const cssSheet = sheets.get(sheet);

    block = typeof cssSheet === 'function' ? cssSheet(value) : `{${sheet}:${value};}`;

    css = `.${name}${hover ? ':' : ''}${hover} ${block}`;

    if (typeof mediaSheet === 'function') {
      css = mediaSheet(css);
    }

    /** 插入css, 返回拼接 */
    appendCss(css);
    classname += `${name} `;
  });

  cssinCache.set(param, classname);

  return classname;
};
