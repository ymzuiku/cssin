import * as React from 'react';

import { cssin } from 'cssin';

export const App: React.FC = () => {
  return (
    <div className={cssin`.box;`}>
      <div className={cssin`row; m:5rem; items:center;`}>hello</div>
    </div>
  );
};
