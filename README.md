# cssin

`cssin` 是一个高度可定制的低级 CSS-In-JS 框架，它为您提供构建定制设计所需的所有构建模块，而无需任何令人讨厌的样式，您必须努力克服。

大多数 CSS 框架都做得太多了。
它们带有各种预先设计的组件，如按钮，卡片和警报，这些组件可能会帮助您最初快速移动，但是当您的网站使用自定义设计脱颖而出时，会导致更多的痛苦。

`cssin` 与众不同。

`cssin` 提供了低级实用程序类，而不是固定的预先设计的组件，使您可以构建完全自定义的设计而无需离开 JS。

`cssin` 生成的每个相同的样式值可以被重复引用，而不是重新创建。

### 旨在定制

如果可以自定义，`cssin` 允许您自定义它。这包括颜色，边框大小，字体粗细，间距实用程序，断点，阴影和任何 css 样式。

`cssin` 采用纯 Typescript 编写，并且无需对项目框架进行配置，这意味着您可以轻松获得真正编程语言的全部功能。

`cssin` 不仅仅是一个 CSS-IN-JS 框架，它还是一个创建设计系统的引擎。

### 轻巧

- 核心代码 仅有 0.9kb，依赖于 mem 进行缓存以提高 css 注入性能
- 可以在任何框架中使用，如你喜欢的 React、Vue、Stencil

## 使用 `cssin` 直接编写样式

```js
import React from 'react';
import cssin from 'cssin';

// 设置一个全局的 css-value
document.body.style.setProperty('--button-color', '#fff');

export default () => {
  return (
    <div className={cssin`background-color=#f66 padding=1.2rem hover:background-color=#f33 color=--button-color`}>
      Button
    </div>
  );
};
```

上述代码有点像内联样式，但是又有一些不同，因为它可以实现伪类及更好的自定义，我们逐步分析:

- 更直观的编写了 css 样式: `background-color=#f66 padding=1.2rem`
- 直接使用伪类: `hover:background-color=#f33`
- 使用 css 变量，这意味着我们可以更简单的定制主题，和实时修改它: `color=--button-color`

cssin 语法非常简单，每个属性之间用空格分割：
[伪类名]:[属性名]=[属性值]

## 订制自定义样式

和众多 css 框架一样，`cssin` 允许你自定义样式集，这样可以用更简短的声明来描述样式

`cssin` 有一个 setParsers 属性用来描述每个样式

```js
import React from 'react';
import cssin, { setParsers } from 'cssin';

// 设置自定义样式集
setParsers({
  'bgc=': (value) => `{ background-color: ${v}; }`,
  'p=': (value) => `{ padding: ${v}; }`,
  'c=': (value) => `{ color: ${v}; }`,
});

// 在全局范围内使用 自定义的样式
export default () => {
  return <div className={cssin`bgc=#f66 p=1.2rem hover:bgc=#f33 c=--button-color`}>Button</div>;
};
```

## 订制组件

我们希望把刚刚的代码简写成更精巧的组件，组件其实就是一个没有值的样式集

```js
import React from 'react';
import cssin, { setParsers } from 'cssin';

// 设置自定义组件, 我们约定组件使用 `!` 作为名称结尾
setParsers({
  'button!': () => `{ background-color: #f66; padding: 1.2rem; color=var(--button-color); }`,
});

// 最终只需要一个单词的声明
export default () => {
  return <div className={cssin`button!`}>Button</div>;
};
```

### 使用默认组件和 css 变量集合

`cssin` 提供了一整套默认样式集合及 css-value 集合，它精心设计、开箱即用，亦可以作为一个自定义样式集合的参照标本

默认情况下 `cssin` 并未配置它，如果我们需要可以如下配置：

```js
import cssin, { setParsers } from 'cssin';
import commonParser from 'cssin/commonParser'; // parser集合
import 'cssin/commonValues'; // css-value 集合

setParsers(commonParser);
```

我们可以查看默认组件的内容:

[commonParser.ts](./lib/commonParser)
[commonValues.ts](./lib/commonValues)

## 编写 CSS 在 js 中

有时候，我们会需要编写全局样式，我们约定组件使用 `@` 作为片段开头, 此时传入的字符串只会被当成单纯的 css 样式进行注入

```js
import cssin from 'cssin';

cssin`@
  body {
    margin: 0px;
    background-color: #f5f5f5;
  }
`;
```

### 现在开始使用它：

```sh
$ npm i cssin --save
```
