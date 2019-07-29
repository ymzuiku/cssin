import * as React from 'react';

import { addParsers, cssin } from './lib';

addParsers({
  'code!': 'dis=block font-size=14px color=--teal-700 word-wrap=break-word word-break=break-all',
});

addParsers({ 'button!': 'background=--gray-300 padding=1.2rem marge=0.5rem border-radius=0.3rem' });
addParsers({
  'button-anime!':
    'button! transition=all_0.3s_ease-in box-shadow=--shadow-lg hover:box-shadow=--shadow-md active:box-shadow=--shadow-sm',
});

const a = `<button className={cssin\`background=--gray-300 padding=1.2rem marge=0.5rem border-radius=0.3rem\`}>我是一个按钮</button>`;

const b1 = `
addParsers({
  'button!': 'background=--gray-300 padding=1.2rem marge=0.5rem border-radius=0.3rem',
});
`;
const b2 = `
<button className={cssin\`button!\`}>将样式打包成组件</button>
`;

const c = `
<button className={cssin\`button! transition=all_0.3s_ease-in box-shadow=--shadow-lg hover:box-shadow=--shadow-md active:box-shadow=--shadow-sm\`}>将样式打包成组件</button>
`;

const d1 = `
addParsers({
  'button!': 'button! transition=all_0.3s_ease-in box-shadow=--shadow-lg hover:box-shadow=--shadow-md active:box-shadow=--shadow-sm',
});
`;
const d2 = `
<button className={cssin\`button-anime!\`}>将button!和动画打包成新的组件</button>
`;

export const App: React.FC = () => {
  return (
    <div className={cssin`.box`}>
      <header className={cssin`.box`}>cssin 文档</header>
      <div className={cssin`row! m=5rem items=center`}>
        <button className={cssin`background=--gray-300 padding=1.2rem marge=0.5rem border-radius=0.3rem`}>
          我是一个按钮
        </button>
        <code className={cssin`code! ml=1rem`}>{a}</code>
      </div>
      <div className={cssin`row! m=5rem items=center`}>
        <button className={cssin`button!`}>将样式打包成组件</button>
        <div>
          <code className={cssin`code! color=#333 m=1rem`}>创建一个组件：button!</code>
          <code className={cssin`code! ml=1rem`}>{b1}</code>
          <code className={cssin`code! color=#333 m=1rem`}>只需要一个单词即可调用组件样式</code>
          <code className={cssin`code! ml=1rem`}>{b2}</code>
        </div>
      </div>
      <div className={cssin`row! m=5rem items=center`}>
        <button
          className={cssin`button! transition=all_0.3s_ease-in box-shadow=--shadow-lg hover:box-shadow=--shadow-md active:box-shadow=--shadow-sm`}>
          鼠标移入, 伪类及动画
        </button>
        <div>
          <code className={cssin`code! ml=1rem`}>{c}</code>
        </div>
      </div>
      <div className={cssin`row! m=5rem items=center`}>
        <button className={cssin`button-anime!`}>将button!和动画打包成新的组件</button>
        <div>
          <code className={cssin`code! color=#333 m=1rem`}>创建一个组合组件：button-anime!</code>
          <code className={cssin`code! ml=1rem`}>{d1}</code>
          <code className={cssin`code! color=#333 m=1rem`}>只需要一个单词即可调用组件样式</code>
          <code className={cssin`code! ml=1rem`}>{d2}</code>
        </div>
      </div>
    </div>
  );
};
