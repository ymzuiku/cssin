import * as React from 'react';

import * as doc from './doc';
import { addSheets } from './lib';

addSheets({
  code: 'dis:block; font-size:14px; color:--teal-700; word-wrap:break-word; word-break:break-all;',
});
addSheets({ button: 'background:--gray-300; padding:1.2rem; marge:0.5rem; border-radius:0.3rem;' });
addSheets({
  'button-anime':
    'button; transition:all 0.2s ease-in; box-shadow:--shadow-lg; hover:box-shadow:--shadow-md; active:box-shadow:--shadow-sm;',
});


export const App: React.FC = () => {
  return (
    <div inlist=".box;">
      <header inlist={[
        'font:2rem; font-weight:600; p:2rem; bg:--blue-400; color:--white;',
        'color:--white;',
      ]}>cssin 文档</header>
      <div inlist="row; m:5rem; items:center;">
        <button inlist="background:--gray-300; padding:1.2rem; marge:0.5rem; border-radius:0.3rem">
          我是一个按钮
        </button>
        <code inlist="code; ml:1rem;">{doc.a}</code>
      </div>
      <div inlist="row; m:5rem; items:center;">
        <button inlist="button">将样式打包成组件</button>
        <div>
          <code inlist="code; color:#333; m:1rem;">创建一个组件：button</code>
          <code inlist="code; ml:1rem;">{doc.b1}</code>
          <code inlist="code; color:#333; m:1rem;">只需要一个单词即可调用组件样式</code>
          <code inlist="code; ml:1rem;">{doc.b2}</code>
        </div>
      </div>
      <div inlist="row; m:5rem; items:center;">
        <button
          inlist="button; transition:all 0.2s ease-in; @sm:box-shadow:--shadow-lg; hover:box-shadow:--shadow-md; active:box-shadow:--shadow-sm;">
          鼠标移入, 伪类及动画
        </button>
        <div>
          <code inlist="code; ml:1rem;">{doc.c}</code>
        </div>
      </div>
      <div inlist="row; m:5rem; items:center;">
        <button inlist="button-anime">将旧组件和动画打包成新的组件</button>
        <div>
          <code inlist="code; color:#333; m:1rem;">创建一个组合组件：button-anime</code>
          <code inlist="code; ml:1rem">{doc.d1}</code>
          <code inlist="code; color:#333; m:1rem;">只需要一个单词即可调用组件样式</code>
          <code inlist="code; ml:1rem;">{doc.d2}</code>
        </div>
      </div>
    </div>
  );
};
