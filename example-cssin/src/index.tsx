import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';
import { coverAttribute } from './lib';
import { setGlobalCss } from './lib/commonCSSValues';
import './lib/commonSheets';
import * as serviceWorker from './serviceWorker';

setGlobalCss();
coverAttribute('inlist');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
