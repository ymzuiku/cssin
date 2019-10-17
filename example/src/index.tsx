import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';
import { cssin, addSheets } from 'cssin';
import { commonSheets } from 'cssin/umd/commonSheets';
import { globalCss, valueCss } from 'cssin/umd/commonCSSValues';
import * as serviceWorker from './serviceWorker';

addSheets(commonSheets);
cssin(globalCss);
cssin(valueCss);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
