我们先看看我们最终的目标, 我们可以如何描述代码:

```js
import React from 'react';

export default () => <button css-in="bg:#f00; @md:display:none; hover:radius:8px; radius:4px">我是一个按钮</button>;
```

在这个文件中，我们 "似乎没有引入任何库"，就好像写内联样式一样，把样式描述、媒体查询、伪类都实现了, 并且可自定义样式名，如 bg、radius。

# cssin

cssin 是一个高度可定制的低级 CSS-In-JS 框架，它为您提供构建定制设计所需的所有构建模块，而无需任何令人讨厌的样式，你可以使用内联样式的所有语法，和其他扩展语法。

大多数 CSS 框架都做得太多了。
它们带有各种预先设计的组件，如按钮，卡片和警报，这些组件可能会帮助您最初快速移动，但是当您的网站使用自定义设计脱颖而出时，会导致更多的痛苦。

cssin 与众不同。

cssin 提供了低级实用程序类，而不是固定的预先设计的组件，使您可以构建完全自定义的设计而无需离开 JS。

cssin 生成的每个相同的样式值可以被重复引用，而不是重新创建。

### 理念

我们在使用 cssin 之前做了非常多的尝试，css\less\scss, tailwindCSS, styled-components 和其他 css-in-js 方案。其中 tailwindCSS 是最符合生产需要的，我们从中学到许多东西和理念；可是这些样式方案对于作者来说并没能真正解决问题：

**简短高效的描述我的样式，并且不离开 js；当然也不放弃 css 的任何一个特性**

css-in 就是为了解决此类问题而存在

### 旨在定制

cssin 所有样式都是通过定制而得，cssin 允许您自定义它。这包括颜色，边框大小，字体粗细，间距实用程序，断点，阴影和任何 css 样式。

cssin 采用纯 Typescript 编写，并且无需对项目框架进行配置，这意味着您可以轻松获得真正编程语言的全部功能。

cssin 相当于在内敛样式上扩展了伪类和媒体查询，并且支持自定义属性名和设定组件。

cssin 不仅仅是一个 CSS-IN-JS 框架，它还是一个创建设计系统的引擎。

### 轻巧

- 仅有 2kb (gzip)
- 每条样式会被缓存, 以更高的性能进行样式处理
- 可以在任何框架中使用，如你喜欢的 React、Vue、Stencil

### 安装

```sh
$ npm i cssin --save
```

# 先看看展现形式

example: [navar.workos.top](http://navar.workos.top)

在没有进行任何配置之前，cssin 的语法和内敛样式是一致的

```js
import React from 'react';
import cssin from 'cssin';

// 设置一个全局的 css-value
document.body.style.setProperty('--button-color', '#fff');

export default () => {
  return (
    <div
      className={cssin`background-color:#f66; hover:background-color:#f33; padding:8px; color:#000; border:2px solid #f33; @md:border-radius:4px;`}
    >
      Button
    </div>
  );
};
```

看起来还不错，有点像内联样式，但是又有些许不同，似乎直接描述了伪类和媒体查询，而且代码不够精简。

好的，我们最后会通过简单的配置的让样式描述变成这样：

```js
import React from 'react';
import cssin from 'cssin';

export default () => {
  return <div className={cssin`btn:#f33, 8px; hover:bg:#f33; @md:radius:4px;`}>Button</div>;
};
```

或者极限简洁：

```js
import React from 'react';
import cssin from 'cssin';

export default () => {
  return <div className={cssin`button`}>Button</div>;
};
```

更加极限极限简洁, 连 cssin 的包裹都省略掉：

```js
import React from 'react';

export default () => {
  return <div css-in="button">Button</div>;
};
```

我们会一步步来达到最后的步骤。

# 或许一段话就可以描述清楚 cssin

我们先回顾刚开始的代码块：

```js
export default () => {
  return (
    <div
      className={cssin`background-color:#f66; hover:background-color:#f33; padding:8px; color:--button-color; border:2px solid #f33; @md:border-radius:4px;`}
    >
      Button
    </div>
  );
};
```

上述代码有点像内联样式，但是又有一些不同，因为它可以实现伪类及更好的自定义，我们逐步分析:

- 和编写内联样式一样的编写 css 样式, 如: `background-color: #f66; padding: 4px;`
- 直接使用伪类, 伪类在属性名之前，使用`:`分割如: `hover:background-color=#f33`
- 可以直接描述媒体查询等功能, 媒体查询对象使用`@`开头, 如: `@md:border-radius=4px`

其他规则：

- 如果只有属性名，那么它将是一个组件, 如 `button;`
- 如果值是一个**单一**的 css 变量， 如 `color:--button-color`； 等效于 `color:var(--button-color);`
- 使用`!`表示`!important`， 如 `color: #f00!`； 等效于 `color: #f00 !important`
- 如果只有属性名，并且以 `.` 开头, 那么就是对原生 css 样式的引用, 如 `.button;`
- 如果包含 `{}`, 表示这是一个纯 css, 它会被插入至全局样式中, 如 `body { margin:0px; }`

以上就是 cssin 的所有规则

下面是完整属性的表达式：
@[媒体查询]:[伪类名]:[属性名]:[属性值];

下面这句完整的语法描述：

```js
// 当媒体查询大于 760px 时、鼠标移入时、描边等于 #f00;
cssin`@md:hover:border:1px solid #f00;`;
```

### 为什么不直接编写 style 内联样式？

1. style 样式无法完全描述 css 的功能，如媒体查询、伪类等等 style；
2. 样式无法自定义更简短的样式集、样式集的组合、嵌套；
3. 内联样式无法直接引用 className，这样我们通常需要编写 css 文件，设置 className 和 style；
4. 并且默认优先级比 css 高，css 和 内联样式混合使用需要注意优先级；

cssin 最后生成的还是 css 样式，所以不会有以上的问题

# 如果更喜欢编写 style 属性

有的朋友更喜欢编写 style 属性，但是 style 中的一个痛点是无法实现伪类或媒体查询。

cssin 足够轻量，我们也可以仅仅使用它的伪类或媒体查询特性，来配合 style 属性进行项目样式的编写.

不过我们要注意，style 中编写的属性权重默认高于 className 中的样式，所以需要添加 `!important`:

```js
import React from 'react';
import cssin from 'cssin';

export default () => {
  return (
    <div
      className={cssin`hover:background:#f00 !important;`}
      style={{
        background: '#00f',
        fontSize: '20px',
      }}
    >
      Button
    </div>
  );
};
```

由于这个模式很常见，所以在 cssin 中，它可以使用 `!` 直接表示 `!important`:

```js
...
export default () => {
  return (
    <div
      className={cssin`hover:background:#f00!;`}
      style={{
        background: "#00f",
        fontSize: "20px"
      }}
    >
      Button
    </div>
  );
};Z
```

# 订制自定义样式

和众多 css 框架一样，cssin 允许你自定义样式集，这样可以用更简短的声明来描述样式

cssin 有一个 addSheets 属性用来添加样式映射表

我们现在达成刚刚的约定，将：

`background-color:#f66; hover:background-color:#f33; padding:4px; color:--button-color; border:2px solid #f33; @md:border-radius:8px;`

变成：

`btn:#f33, 4px; hover:bg:#f33; @md:radius:8px;`

```js
import React from 'react';
import cssin, { addSheets } from 'cssin';

// 添加自定义样式集
addSheets({
  bg: (v) => `{ background-color: ${v}; }`,
  radius: (v) => `{ border-radius: ${v}; }`,
  btn: (v) => {
    const values = v.split(';');
    return {
      `{ background-color: ${values[0]}; padding:${values[1]}; color:var(--button-color); }`
    }
  },
});

// 使用自定义的样式
export default () => {
  return <div className={cssin`btn:#f33, 4px; hover:bg:#f33; @md:radius:8px;`}>Button</div>;
};
```

由于使用 cssin , 我们不会需要有 css 代码，所以可以降低项目首屏的资源请求。

自定义样式除了可以简化开发，还可以减少 js 代码量，从而最终达到相对更少的打包资源。

# 订制媒体查询

cssin 默认配置了 4 个尺寸级别的媒体查询，和基于设备媒体查询，我们可以覆盖它或者创建新的规则

注意，我们约定，只有以 `@` 开头的才是媒体查询对象

```js
// 默认的媒体查询
addSheets({
  '@sm': (v: string) => `@media (min-width: 640px) {${v}}`,
  '@md': (v: string) => `@media (min-width: 768px) {${v}}`,
  '@lg': (v: string) => `@media (min-width: 1024px) {${v}}`,
  '@xl': (v: string) => `@media (min-width: 1280px) {${v}}`,
  '@ios': (v: string) => `@media (min-width: ${device.isIos ? '0px' : '9999px'}) {${v}}`,
  '@android': (v: string) => `@media (min-width: ${device.isAndroid ? '0px' : '9999px'}) {${v}}`,
  '@native': (v: string) => `@media (min-width: ${device.isNative ? '0px' : '9999px'}) {${v}}`,
  '@pc': (v: string) => `@media (min-width: ${device.isPc ? '0px' : '9999px'}) {${v}}`,
});
// 我们覆盖 @md 以及创建一个 @xxl
addSheets({
  '@md': v => `@media (min-width: 800px) {${v}}`,
  '@xxl': v => `@media (min-width: 1920px) {${v}}`,
});
```

使用媒体查询，以下例子是屏幕宽度大于 800px，button 宽度为 200px，并且在 native 端隐藏

```js
import React from 'react';
// 最终只需要包裹一个单词的声明
export default () => {
  return <div css-in="width:100px; height:50px; @md:width:200px; @native:display:none;">Button</div>;
};
```

# 订制组件

我们希望把刚刚的代码简写成更精巧的组件, 组件其实是一组样式集

设置自定义组件, 因为 sheets 是一个简单的对象表，请注意不要和其他自定义样式重名导致覆盖

它和自定义样式或媒体查询的区别是它的值是一个单纯的字符串：

```js
import React from 'react';
import cssin, { addSheets } from 'cssin';

addSheets({
  // 区别于自定义样式，组件的值是一个字符串，它遵循 cssin 语法，可以调用其他组件和自定义样式
  button: 'bgc:#f66; hover:bgc:#f22; padding:8px; color:--button-color;',
});

// 最终只需要包裹一个单词的声明
export default () => {
  return <div className={cssin`button;`}>Button</div>;
};
```

注意，组件不可以和伪类或者媒体查询进行组合，因为组件内部就已经包含了伪类或媒体查询

# 覆盖 setAttribute

这里涉及一些魔法，请辩证的使用。

作者在编写代码的时候不希望每次都引用 cssin，这对作者来说太过繁琐了，如果你也有这种感觉，可以使用 cssin 的 `coverAttribute`

index.js

```js
import React from 'react';
import { coverAttribute } from 'cssin';

// 这里我们设置css-in属性，它会模拟 className={cssin`...`}
coverAttribute('css-in');

// 请确保 coverAttribute 在 ReactDOM.render 之前执行
ReactDOM.render(<App />, document.getElementById('root'));
```

App.js

```js
import React from 'react';

// 最终只需要一个单词的声明，就像原生声明一样
export const App = () => {
  return (
    <div css-in="full; m:20px;">
      <div css-in="button">Button</div>
    </div>
  );
};
```

inlint 可以和 className 一起使用，前提是 className 必须在 css-in 之前声明

```js
import React from 'react';

// 最终只需要一个单词的声明，就像原生声明一样
export const App = () => {
  return (
    <div>
      <div className="app-box" css-in="button">
        Button
      </div>
    </div>
  );
};
```

我们需要注意，覆盖 setAttribute 并不是非常正确的做法，因为它带来了其他开发人员的不友好，其他人员并不知道我们做了这些黑魔法的前提下，会非常困惑。

另外，请不要覆盖 className 等常用属性，这样会让其他组件库失效

# 使用 css 原生功能在 javascript 中

### 使用 `{}` 编写单纯的 css 片段

有时候，我们会需要编写单纯的 css 片段，我们约定若字符串中包含 `{}`

此时传入的字符串只会被当成单纯的 css 样式进行注入至 html 中

```js
import cssin from 'cssin';

cssin`
  body {
    margin: 0px;
    background-color: #f5f5f5;
  }

  @media (min-width: 640px) {
    .box {
      background: #f00;
    }
  }
`;
```

### 使用 `.` 引用原生的 css

其他地方定义的原生的 css 可以和 cssin 混合使用，只需要在属性名前面增加 `.`:

```js
import React from 'react';
import cssin from 'cssin';

// 使用 .box 引用 css 样式
export default () => {
  return <div css-in="margin:4px; .box">Button</div>;
};
```

# 使用预设自定义样式、组件、 css-values

cssin 提供了一整套预设的自定义样式集合及 css-value 集合，它精心设计、开箱即用，亦可以作为一个自定义样式集合的参照标本

默认情况下 cssin 并未配置它，如果我们需要可以如下配置：

```js
import 'cssin/commonSheets'; // 引入 sheets集合
import 'cssin/commonCSSValues'; // 引入 css-value 集合
```

commonSheets 中的内容:

| 自定义样式名 | 映射样式                                          | 使用                        |
| ------------ | ------------------------------------------------- | --------------------------- |
| dis          | display                                           | dis: flex;                  |
| items        | align-items                                       | items: 20px;                |
| justify      | justify-content                                   | justify: start;             |
| self         | align-self                                        | self: center;               |
| content      | align-content                                     | content: end;               |
| z            | z-index                                           | z: 10;                      |
| p            | padding                                           | p: 5rem;                    |
| px           | pading-left, padding-right                        | px: 5rem;                   |
| py           | padding-top, padding-bottom                       | py: 5rem;                   |
| pl           | padding-left                                      | pl: 5rem;                   |
| pt           | padding-top                                       | pt: 5rem;                   |
| pr           | padding-right                                     | pr: 5rem;                   |
| pb           | padding-bottom                                    | pb: 5rem;                   |
| m            | margin                                            | m: 5rem;                    |
| mx           | margin-left, margin-right                         | mx: 5rem;                   |
| my           | margin-top, margin-bottom                         | my: 5rem;                   |
| ml           | margin-left                                       | ml: 5rem;                   |
| mt           | margin-top                                        | mt: 5rem;                   |
| mr           | margin-right                                      | mr: 5rem;                   |
| mb           | margin-bottom                                     | mb: 5rem;                   |
| w            | width                                             | w: 5rem;                    |
| w-min        | min-width                                         | w-min: 5rem;                |
| w-max        | max-width                                         | w-max: 5rem;                |
| w-min-max    | min-width, max-width                              | w-min-max: 5rem;            |
| h            | height                                            | h: 5rem;                    |
| h-min        | min-height                                        | h-min: 5rem;                |
| h-max        | max-height                                        | h-max: 5rem;                |
| h-min-max    | min-height, max-height                            | h-min-max: 5rem;            |
| b            | border: \${v} solid;                              | b: 5rem;                    |
| bl           | border-left: \${v} solid;                         | bl: 5rem;                   |
| bt           | border-top: \${v} solid;                          | bt: 5rem;                   |
| br           | border-right: \${v} solid;                        | br: 5rem;                   |
| bb           | border-bottom: \${v} solid;                       | bb: 5rem;                   |
| bc           | border-color                                      | bc: #f00;                   |
| radius       | border-radius                                     | radius: 2rem;               |
| font         | font-size                                         | font: 1.25rem;              |
| bg           | background                                        | background: #f00;           |
| bgc          | background-color                                  | bgc: #f00;                  |
| linear       | transition: all \${v} linear;                     | linear: 0.3s;               |
| ease         | transition: all \${v} ease;                       | ease: 0.3s;                 |
| ease-in      | transition: all \${v} ease-in;                    | ease-in: 0.3s;              |
| ease-out     | transition: all \${v} ease-out;                   | ease-out: 0.3s;             |
| ease-in-out  | transition: all \${v} ease-in-out;                | ease-in-out: 0.3s;          |
| move-x       | transform: translateX(\${v});                     | move-x: 50%;                |
| move-y       | transform: translateY(\${v});                     | move-y: 50%;                |
| move-z       | transform: translateZ(\${v});                     | move-z: 50%;                |
| rotate       | transform: rotate(\${v}deg);                      | rotate: 180;                |
| scale        | transform: scale(\${v}, \${v});                   | scale: 0.7;                 |
| shadow       | shadow: shadowFN(size, r, g, b, a);               | shadow: lg, 0, 0, 255, 0.7; |
| 以下均为组件 |                                                   | 组件不需要设置值            |
| scroll       | overflow:auto; -webkit-overflow-scrolling: touch; | scroll;                     |
| col          | dis:flex; flex-direction:column;                  | col;                        |
| row          | dis:flex; flex-direction:row;                     | row;                        |
| center       | col; justify:center; items:center;                | center;                     |
| fixed        | position:fixed;                                   | fixed;                      |
| static       | position:static;                                  | static;                     |
| absolute     | position:absolute;                                | absolute;                   |
| relative     | position:relative;                                | relative;                   |
| sticky       | position:sticky;                                  | sticky;                     |
| left         | left:0px;                                         | left;                       |
| top          | top:0px;                                          | top;                        |
| right        | right:0px;                                        | right;                      |
| bottom       | bottom:0px;                                       | bottom;                     |
| bold         | font-weight: bold;                                | bold;                       |

commonCSSValues 设置了一些 css-value, 其中的颜色、尺寸分类、投影均取自于 tailwindCSS 的配置：

![](https://github.com/ymzuiku/cssin/blob/master/imgs/1.png)
![](https://github.com/ymzuiku/cssin/blob/master/imgs/2.png)
![](https://github.com/ymzuiku/cssin/blob/master/imgs/3.png)
![](https://github.com/ymzuiku/cssin/blob/master/imgs/4.png)

使用预设的示例：

```js
import React from 'react';
import cssin from 'cssin';

// 使用预设的自定义样式和 css-value 配合使用
export default () => {
  return (
    <div
      className={cssin`
        bg:--gray-200; 
        p:--2; 
        font:--font-sm; 
        shadow:xl,255,0,0,0.5;
      `}
    >
      Button
    </div>
  );
};
```

我们可以查看这两个文件，它们只是使用 cssin API 的简单配置，也欢迎有朋友提供更好的自定义样式及组件：

[commonSheets.ts](https://github.com/ymzuiku/cssin/blob/master/lib/commonSheets.ts)

[commonCSSValues.ts](https://github.com/ymzuiku/cssin/blob/master/lib/commonCSSValues.ts)

如果我们要对其进行修改，可以下载该资源进行修改：

# 性能开销

cssin 虽然是运行时创建 css 样式，但是它有着极低的性能开销。

我们可以看到，创建重复执行 500 次，每次大约创建 20 条样式，只消耗了 `1.6ms`, 这是因为 cssin 会对整体属性做缓存，还会对子属性创建 css 样式做缓存：

```js
console.time(t);
for (let i = 0; i < 500; i++) {
  cssin(
    `transition:all 0.1s ease-in; box-shadow:--shadow-1lg; hover:box-shadow:--shadow-1md; active:box-shadow:--shadow-sm1;`
  );
  cssin(
    `transition:all 0.2s ease-in; box-shadow:--shadow-2lg; hover:box-shadow:--shadow-2md; active:box-shadow:--shadow-sm2;`
  );
  cssin(
    `transition:all 0.3s ease-in; box-shadow:--shadow-3lg; hover:box-shadow:--shadow-3md; active:box-shadow:--shadow-sm3;`
  );
  cssin(
    `transition:all 0.4s ease-in; box-shadow:--shadow-4lg; hover:box-shadow:--shadow-4md; active:box-shadow:--shadow-sm4;`
  );
}
console.timeEnd(t); // 1.60009765625ms
```

### 现在开始使用它：

```sh
$ npm i cssin --save
```

盼望 Star 或提出贡献，仓库地址：

[github.com/ymzuiku/cssin](https://github.com/ymzuiku/cssin)
