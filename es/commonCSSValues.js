"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var device=require("./device"),index_1=require("./index");document.addEventListener("gesturestart",function(n){n.preventDefault()}),index_1.cssin("\nhtml{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\n\n#root {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  padding: 0px;\n  margin: 0px;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n  font-size: 16px;\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n}\n\ninput {\n  background-color: #f3f3f3;\n  outline: none;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  -webkit-appearance: none;\n}\n\ndiv, button, {\n  user-select: none;\n}\n\nbutton {\n  -webkit-appearance: none;\n  outline: none;\n  border: none;\n  user-select: none;\n}\n\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n\n:root {\n  --top-safe: "+device.topSafe+"px;\n  --bottom-safe: "+device.bottomSafe+"px;\n  --px1: "+device.onePx+'px;\n  --family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  --family-serif: Georgia, Cambria, "Times New Roman", Times, serif;\n  --family-mono: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  --radius-sm: 0.125rem;\n  --radius-def: 0.25rem;\n  --radius-lg: 0.5rem;\n  --radius-xl: 1rem;\n  --radius-2xl: 2rem;\n  --radius-full: 9999px;\n  --shadow-def: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.06);\n  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.06);\n  --shadow-2xl: 0 25px 30px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  --shadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  --font-xxs: 0.64rem;\n  --font-xs: 0.75rem;\n  --font-sm: 0.875rem;\n  --font-base: 1rem;\n  --font-lg: 1.125rem;\n  --font-xl: 1.25rem;\n  --font-2xl: 1.5rem;\n  --font-3xl: 1.875rem;\n  --font-4xl: 2.25rem;\n  --font-5xl: 3rem;\n  --font-6xl: 4rem;\n  --letter-tighter: -0.05em;\n  --letter-tight: -0.025em;\n  --letter-normal: 0;\n  --letter-wide: 0.025em;\n  --letter-wider: 0.05em;\n  --letter-widest: 0.1em;\n  --0: 0;\n  --1: 0.25rem;\n  --2: 0.5rem;\n  --3: 0.75rem;\n  --4: 1rem;\n  --5: 1.25rem;\n  --6: 1.5rem;\n  --7: 1.75rem;\n  --8: 2rem;\n  --9: 2.25rem;\n  --10: 2.5rem;\n  --11: 2.75rem;\n  --12: 3rem;\n  --13: 3.25rem;\n  --14: 3.5rem;\n  --15: 3.75rem;\n  --16: 4rem;\n  --17: 4.25rem;\n  --18: 4.5rem;\n  --19: 4.75rem;\n  --20: 5rem;\n  --21: 5.25rem;\n  --22: 5.5rem;\n  --23: 5.75rem;\n  --24: 6rem;\n  --ts: transparent;\n  --black: #000;\n  --white: #fff;\n  --neutral-100: #FCFCFC;\n  --neutral-200: #F7F7F7;\n  --neutral-300: #F0F0F0;\n  --neutral-400: #E0E0E0;\n  --neutral-500: #C0C0C0;\n  --neutral-600: #969696;\n  --neutral-700: #686868;\n  --neutral-800: #484848;\n  --neutral-900: #2C2C2C;\n  --gray-100: #f7fafc;\n  --gray-200: #edf2f7;\n  --gray-300: #e2e8f0;\n  --gray-400: #cbd5e0;\n  --gray-500: #a0aec0;\n  --gray-600: #718096;\n  --gray-700: #4a5568;\n  --gray-800: #2d3748;\n  --gray-900: #1a202c;\n  --red-100: #fff5f5;\n  --red-200: #fed7d7;\n  --red-300: #feb2b2;\n  --red-400: #fc8181;\n  --red-500: #f56565;\n  --red-600: #e53e3e;\n  --red-700: #c53030;\n  --red-800: #9b2c2c;\n  --red-900: #742a2a;\n  --orange-100: #fffaf0;\n  --orange-200: #feebc8;\n  --orange-300: #fbd38d;\n  --orange-400: #f6ad55;\n  --orange-500: #ed8936;\n  --orange-600: #dd6b20;\n  --orange-700: #c05621;\n  --orange-800: #9c4221;\n  --orange-900: #7b341e;\n  --yellow-100: #fffff0;\n  --yellow-200: #fefcbf;\n  --yellow-300: #faf089;\n  --yellow-400: #f6e05e;\n  --yellow-500: #ecc94b;\n  --yellow-600: #d69e2e;\n  --yellow-700: #b7791f;\n  --yellow-800: #975a16;\n  --yellow-900: #744210;\n  --green-100: #f0fff4;\n  --green-200: #c6f6d5;\n  --green-300: #9ae6b4;\n  --green-400: #68d391;\n  --green-500: #48bb78;\n  --green-600: #38a169;\n  --green-700: #2f855a;\n  --green-800: #276749;\n  --green-900: #22543d;\n  --teal-100: #e6fffa;\n  --teal-200: #b2f5ea;\n  --teal-300: #81e6d9;\n  --teal-400: #4fd1c5;\n  --teal-500: #38b2ac;\n  --teal-600: #319795;\n  --teal-700: #2c7a7b;\n  --teal-800: #285e61;\n  --teal-900: #234e52;\n  --blue-100: #ebf8ff;\n  --blue-200: #bee3f8;\n  --blue-300: #90cdf4;\n  --blue-400: #63b3ed;\n  --blue-500: #4299e1;\n  --blue-600: #3182ce;\n  --blue-700: #2b6cb0;\n  --blue-800: #2c5282;\n  --blue-900: #2a4365;\n  --indigo-100: #ebf4ff;\n  --indigo-200: #c3dafe;\n  --indigo-300: #a3bffa;\n  --indigo-400: #7f9cf5;\n  --indigo-500: #667eea;\n  --indigo-600: #5a67d8;\n  --indigo-700: #4c51bf;\n  --indigo-800: #434190;\n  --indigo-900: #3c366b;\n  --purple-100: #faf5ff;\n  --purple-200: #e9d8fd;\n  --purple-300: #d6bcfa;\n  --purple-400: #b794f4;\n  --purple-500: #9f7aea;\n  --purple-600: #805ad5;\n  --purple-700: #6b46c1;\n  --purple-800: #553c9a;\n  --purple-900: #44337a;\n  --pink-100: #fff5f7;\n  --pink-200: #fed7e2;\n  --pink-300: #fbb6ce;\n  --pink-400: #f687b3;\n  --pink-500: #ed64a6;\n  --pink-600: #d53f8c;\n  --pink-700: #b83280;\n  --pink-800: #97266d;\n  --pink-900: #702459;\n}\n');