import * as React from 'react';

import { cssin } from './lib';

export const App: React.FC = () => {
  return (
    <div color={cssin`.box;`}>
      <div color={cssin`row; m:5rem; items:center;`}>
        hello
      </div>
    </div>
  );
};

