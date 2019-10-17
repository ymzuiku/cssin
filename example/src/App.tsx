import * as React from 'react';

import * as doc from './doc';
import { addSheets, cssin } from 'cssin';

addSheets({
  code: 'display:block; font-size:14px; color:--teal-700; word-wrap:break-word; word-break:break-all;',
});
addSheets({
  button: 'background:--gray-300; padding:1.2rem; marge:0.5rem; border-radius:5.3rem;',
});
addSheets({
  'button-anime':
    'button; transition:all 0.2s ease-in; shadow:lg,0,0,0,0.2; hover:shadow:lg,0,0,255,0.3; active:shadow:lg,255,0,0,0.3;',
});

cssin`.test {font-size:50px;}`;

export const App: React.FC = () => {
  return (
    <div className={cssin`.box;`}>
      <div className={cssin`font:2rem; font-weight:600; p:2rem; bg:--blue-400; color:--white-0; color:--white-0;`}>
        cssin 文档
      </div>
      <div className={cssin`row; m:5rem; items:center;`}>
        <button
          className={cssin`hover:background:#f00!`}
          style={{
            background: 'var(--gray-300)',
            padding: '1.2rem',
            margin: '0.5rem',
            borderRadius: '0.3rem',
          }}
        >
          我是一个使用style编写的按钮
        </button>
        <code className={cssin`code; ml:1rem;`}>{doc.a}</code>
      </div>
      <div className={cssin`row; m:5rem; items:center;`}>
        <button className={cssin`.test; background:--gray-300; padding:1.2rem; marge:0.5rem; border-radius:0.3rem`}>
          我是一个按钮
        </button>
        <code className={cssin`code; ml:1rem;`}>{doc.a}</code>
      </div>
      <div className={cssin`row; m:5rem; items:center;`}>
        <button className={cssin`button; @md:display:none;`}>将样式打包成组件</button>
        <div>
          <code className={cssin`code; color:#333; m:1rem;`}>创建一个组件：button</code>
          <code className={cssin`code; ml:1rem;`}>{doc.b1}</code>
          <code className={cssin`code; color:#333; m:1rem;`}>只需要一个单词即可调用组件样式</code>
          <code className={cssin`code; ml:1rem;`}>{doc.b2}</code>
        </div>
      </div>
      <div className={cssin`row; m:5rem; items:center;`}>
        <button
          className={cssin`button; ease-in:0.2s; @sm:shadow:lg,0,0,0,1; hover:shadow:lg,0,255,255,1; active:shadow:lg,0,0,255,1;`}
        >
          鼠标移入, 伪类及动画
        </button>
        <div>
          <code className={cssin`code; ml:1rem;`}>{doc.c}</code>
        </div>
      </div>
      <div className={cssin`row; m:5rem; items:center;`}>
        <button className={cssin`button-anime`}>将旧组件和动画打包成新的组件</button>
        <div>
          <code className={cssin`code; color:#333; m:1rem;`}>创建一个组合组件：button-anime</code>
          <code className={cssin`code; ml:1rem`}>{doc.d1}</code>
          <code className={cssin`code; color:#333; m:1rem;`}>只需要一个单词即可调用组件样式</code>
          <code className={cssin`code; ml:1rem;`}>{doc.d2}</code>
        </div>
      </div>
    </div>
  );
};
