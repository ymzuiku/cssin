// tslint:disable-next-line

import * as device from './device';

/* 设备信息，用于辅助设置媒体查询 */
export { device };

/* 所有样式表 */
const sheets = new Map();
/* 由于某些使用 cssin 的组件库会设置 coverAttribute，防止项目和组件库重复设置，故记录缓存 */
const coverCache = new Set();

/* 添加自定义样式表，例：addSheets({ mb: (v: any) => `{ margin-bottom: ${v}; }`})  */
export const addSheets = (objs: { [key: string]: any }) => {
  Object.keys(objs).forEach(key => {
    sheets.set(key, objs[key]);
  });

  return sheets;
};

/* 添加默认的媒体查询和设备查询 */
addSheets({
  // 用来占位置，使用运算拦截会产生 undefined;
  undefined: '',
  '@sm': (v: string) => `@media (min-width: 640px) {${v}}`,
  '@md': (v: string) => `@media (min-width: 768px) {${v}}`,
  '@lg': (v: string) => `@media (min-width: 1024px) {${v}}`,
  '@xl': (v: string) => `@media (min-width: 1280px) {${v}}`,
  '@ios': (v: string) =>
    `@media (min-width: ${device.isIos ? '0px' : '9999px'}) {${v}}`,
  '@android': (v: string) =>
    `@media (min-width: ${device.isAndroid ? '0px' : '9999px'}) {${v}}`,
  '@native': (v: string) =>
    `@media (min-width: ${device.isNative ? '0px' : '9999px'}) {${v}}`,
  '@pc': (v: string) =>
    `@media (min-width: ${device.isPc ? '0px' : '9999px'}) {${v}}`,
});

/* 用于缓存 css 片段的插入 */
const appendCssCache = new Set();

/* 用于插入css片段 */
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

/* 用于缓存 cssin 的计算逻辑 */
const cssinCache = new Map();

/* cssin 的主函数，用于实现 cssin 语法，返回用于 className 的字符串 */
export const cssin = (inlist: any) => {
  // 实现 tagged-template
  const param =
    typeof inlist === 'string' ? inlist : inlist ? inlist.join('') : '';

  // 如果计算过，直接返回结果
  if (cssinCache.has(param)) {
    return cssinCache.get(param);
  }

  // 如果内容包含 {, 表示是一个纯 css，只需要插入内容，不需要计算 className
  if (param.indexOf('{') > 0) {
    appendCss(param);
    // 记录缓存
    cssinCache.set(param, param);

    return '';
  }

  // 得到属性列表
  const list = param.split(';');
  let classname = '';

  // 开始计算每一个属性
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
    const name = `c-${str.replace(
      /[^-0-0a-zA-Z]/g,
      (reg: string) => `_${reg.charCodeAt(0).toString(16)}_`
    )}`;
    let media = obj[obj.length - 4] || '';
    let hover = obj[obj.length - 3] || '';
    const sheet = obj[obj.length - 2] || '';
    if (obj.length === 3 && hover[0] === '@') {
      media = hover;
      hover = '';
    }
    let value = obj[obj.length - 1] || '';
    value = value.trim();

    // 记录 important 逻辑
    let isImportant = false;
    if (value[value.length - 1] === '!') {
      isImportant = true;
      value = value.substr(0, value.length - 1);
    }

    // 实现 --value -> var(--value)
    if (value.indexOf('--') === 0) {
      value = `var(${value})`;
    }

    // 实现 ! -> !important
    if (isImportant) {
      value = `${value} !important`;
    }

    // 计算并插入css
    let css = '';
    let block = '';
    const mediaSheet = media[0] === '@' ? sheets.get(media) : '';
    const cssSheet = sheets.get(sheet);

    // 如果是 sheet，使用 cssSheet 返回 block，
    // 如果是 string(component)，直接使用 value, 因为 value 在其他逻辑已然计算过了
    block =
      typeof cssSheet === 'function' ? cssSheet(value) : `{${sheet}:${value};}`;

    // 拼装 css 内容
    css = `.${name}${hover ? ':' : ''}${hover} ${block}`;

    // 实现媒体查询类的 sheet
    if (typeof mediaSheet === 'function') {
      css = mediaSheet(css);
    }

    // 插入css，内部做拦截
    appendCss(css);

    // 返回拼接后的 classname
    classname += `${name} `;
  });

  // 记录缓存
  cssinCache.set(param, classname);

  return classname;
};

/* 给 HTMLElement 添加 cssin 属性, 默认相当于设置 setAttribute('class', cssin``); */
(HTMLElement as any).prototype.cssin = function(inlist: any) {
  this.setAttribute('class', cssin(inlist));
};

/* 给 SVGSVGElement 添加 cssin 属性, 默认相当于设置 setAttribute('class', cssin``); */
(SVGSVGElement as any).prototype.cssin = function(inlist: any) {
  this.setAttribute('class', cssin(inlist));
};

/* 覆盖某个 setAttribute 属性 */
export const coverAttribute = (attribute: string) => {
  if (coverCache.has(attribute)) {
    return;
  }
  coverCache.add(attribute);

  (HTMLElement as any).prototype.__cssin = {};

  const setAttribute = (HTMLElement as any).prototype.setAttribute;
  HTMLElement.prototype.setAttribute = function(name: any, value: any) {
    if (name === attribute) {
      if (!(this as any).__cssin.useAutoCssin) {
        (this as any).__cssin.useAutoCssin = true;
      }

      if ((this as any).__cssin.tempClass) {
        setAttribute.call(
          this,
          'class',
          `${cssin(value)} ${(this as any).__cssin.tempClass}`
        );
      } else {
        setAttribute.call(this, 'class', cssin(value));
        setAttribute.call(this, attribute, cssin(value));
      }
    } else if (name === 'class') {
      if (!(this as any).__cssin.useAutoCssin) {
        setAttribute.call(this, 'class', value);
      }
      (this as any).__cssin.tempClass = value;
    } else {
      setAttribute.call(this, name, value);
    }
  };
};
