import { cssin, device } from './lib/index';

cssin(`
html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

body {
  padding: 0px;
  margin: 0px;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  font-size: 16px;
  height: ${window.innerHeight}px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

input {
  background-color: #f3f3f3;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  -webkit-appearance: none;
}

div,p {
  margin: 0px;
  padding: 0pxl
}

button {
  -webkit-appearance: none;
  outline: none;
  border: none;
  user-select: none;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

:root {
  --safe-top: ${device.topSafe}px;
  --safe-bottom: ${device.bottomSafe}px;
  --hair: ${device.hair}px;
  --line: ${device.line}px;
  --family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --family-serif: Georgia, Cambria, "Times New Roman", Times, serif;
  --family-mono: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --shadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);
  --bar-xxs: 0.5rem;
  --bar-xs: 1rem;
  --bar-sm: 2rem;
  --bar-md: 3rem;
  --bar-lg: 3.5rem;
  --bar-xl: 4rem;
  --bar-xxl: 5rem;
  --radius-xxs: 0.125rem;
  --radius-xs: 0.25rem;
  --radius-sm: 0.4rem;
  --radius-md: 0.6rem;
  --radius-lg: 0.8rem;
  --radius-xl: 1rem;
  --radius-xxl: 2rem;
  --radius-full: 9999px;
  --font-xxs: 0.64rem;
  --font-xs: 0.75rem;
  --font-sm: 0.875rem;
  --font-md: 1rem;
  --font-lg: 1.125rem;
  --font-xl: 1.25rem;
  --font-xxl: 1.75rem;
  --letter-tighter: -0.05em;
  --letter-tight: -0.025em;
  --letter-normal: 0;
  --letter-wide: 0.025em;
  --letter-wider: 0.05em;
  --letter-widest: 0.1em;
  --0: 0;
  --1: 0.25rem;
  --2: 0.5rem;
  --3: 0.75rem;
  --4: 1rem;
  --5: 1.25rem;
  --6: 1.5rem;
  --7: 1.75rem;
  --8: 2rem;
  --9: 2.25rem;
  --10: 2.5rem;
  --11: 2.75rem;
  --12: 3rem;
  --13: 3.25rem;
  --14: 3.5rem;
  --15: 3.75rem;
  --16: 4rem;
  --17: 4.25rem;
  --18: 4.5rem;
  --19: 4.75rem;
  --20: 5rem;
  --21: 5.25rem;
  --22: 5.5rem;
  --23: 5.75rem;
  --24: 6rem;
  --alpha: transparent;
  --white: #fff;
  --black: #000;
  --black-100: #FCFCFC;
  --black-200: #F7F7F7;
  --black-300: #F0F0F0;
  --black-400: #E0E0E0;
  --black-500: #C0C0C0;
  --black-600: #969696;
  --black-700: #686868;
  --black-800: #484848;
  --black-900: #2C2C2C;
  --gray-100: #f7fafc;
  --gray-200: #edf2f7;
  --gray-300: #e2e8f0;
  --gray-400: #cbd5e0;
  --gray-500: #a0aec0;
  --gray-600: #718096;
  --gray-650: #59677C;
  --gray-700: #4a5568;
  --gray-750: #364153;
  --gray-800: #2d3748;
  --gray-850: #232B39;
  --gray-900: #1a202c;
  --gray-950: #121721;
  --red-100: #fff5f5;
  --red-200: #fed7d7;
  --red-300: #feb2b2;
  --red-400: #fc8181;
  --red-500: #f56565;
  --red-600: #e53e3e;
  --red-700: #c53030;
  --red-800: #9b2c2c;
  --red-900: #742a2a;
  --orange-100: #fffaf0;
  --orange-200: #feebc8;
  --orange-300: #fbd38d;
  --orange-400: #f6ad55;
  --orange-500: #ed8936;
  --orange-600: #dd6b20;
  --orange-700: #c05621;
  --orange-800: #9c4221;
  --orange-900: #7b341e;
  --yellow-100: #fffff0;
  --yellow-200: #fefcbf;
  --yellow-300: #faf089;
  --yellow-400: #f6e05e;
  --yellow-500: #ecc94b;
  --yellow-600: #d69e2e;
  --yellow-700: #b7791f;
  --yellow-800: #975a16;
  --yellow-900: #744210;
  --green-100: #f0fff4;
  --green-200: #c6f6d5;
  --green-300: #9ae6b4;
  --green-400: #68d391;
  --green-500: #48bb78;
  --green-600: #38a169;
  --green-700: #2f855a;
  --green-800: #276749;
  --green-900: #22543d;
  --teal-100: #e6fffa;
  --teal-200: #b2f5ea;
  --teal-300: #81e6d9;
  --teal-400: #4fd1c5;
  --teal-500: #38b2ac;
  --teal-600: #319795;
  --teal-700: #2c7a7b;
  --teal-800: #285e61;
  --teal-900: #234e52;
  --blue-100: #ebf8ff;
  --blue-200: #bee3f8;
  --blue-300: #90cdf4;
  --blue-400: #63b3ed;
  --blue-500: #4299e1;
  --blue-600: #3182ce;
  --blue-700: #2b6cb0;
  --blue-800: #2c5282;
  --blue-900: #2a4365;
  --indigo-100: #ebf4ff;
  --indigo-200: #c3dafe;
  --indigo-300: #a3bffa;
  --indigo-400: #7f9cf5;
  --indigo-500: #667eea;
  --indigo-600: #5a67d8;
  --indigo-700: #4c51bf;
  --indigo-800: #434190;
  --indigo-900: #3c366b;
  --purple-100: #faf5ff;
  --purple-200: #e9d8fd;
  --purple-300: #d6bcfa;
  --purple-400: #b794f4;
  --purple-500: #9f7aea;
  --purple-600: #805ad5;
  --purple-700: #6b46c1;
  --purple-800: #553c9a;
  --purple-900: #44337a;
  --pink-100: #fff5f7;
  --pink-200: #fed7e2;
  --pink-300: #fbb6ce;
  --pink-400: #f687b3;
  --pink-500: #ed64a6;
  --pink-600: #d53f8c;
  --pink-700: #b83280;
  --pink-800: #97266d;
  --pink-900: #702459;
}
`);
