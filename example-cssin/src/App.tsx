import * as React from 'react';

import { addParsers, cssin } from './lib';

addParsers({
  'code!': 'font-size=10px color=--teal-700',
});

cssin`code!`;

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">cssin 文档</header>
      <div className={cssin`row! m=5rem items=center`}>
        <button className={cssin`bgc=--gray-300 p=1.2rem m=0.5rem r=0.2rem`}>Test Cssin</button>
        <p className={cssin`m=0.5rem`}>简单的样式: </p>
        <code className={cssin`code! m=0.5rem`}>cssin`bgc=--gray-300 p=1.2rem m=5rem r=0.2rem`</code>
      </div>
    </div>
  );
};
