import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';
import './commonCSSValues';
import './commonSheets';
import { coverAttribute } from './lib';
import * as serviceWorker from './serviceWorker';

coverAttribute('inlist');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
