import { cssin } from './index';
export const commonValues = `@
:root {
  --px1: 1px;
  --pt1: 0.5px;
  --family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --family-serif: Georgia, Cambria, "Times New Roman", Times, serif;
  --family-mono: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius-sm: 0.125rem;
  --radius-def: 0.25rem;
  --radius-lg: 0.5rem;
  --radius-xl: 1rem;
  --radius-2xl: 2rem;
  --radius-full: 9999px;
  --shadow-def: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.06);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.06);
  --shadow-2xl: 0 25px 30px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --shadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);
  --font-xxs: 0.64rem;
  --font-xs: 0.75rem;
  --font-sm: 0.875rem;
  --font-base: 1rem;
  --font-lg: 1.125rem;
  --font-xl: 1.25rem;
  --font-2xl: 1.5rem;
  --font-3xl: 1.875rem;
  --font-4xl: 2.25rem;
  --font-5xl: 3rem;
  --font-6xl: 4rem;
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
  --ts: transparent;
  --black: #000;
  --white: #fff;
  --neutral-100: #FCFCFC;
  --neutral-200: #F7F7F7;
  --neutral-300: #F0F0F0;
  --neutral-400: #E0E0E0;
  --neutral-500: #C0C0C0;
  --neutral-600: #969696;
  --neutral-700: #686868;
  --neutral-800: #484848;
  --neutral-900: #2C2C2C;
  --gray-100: #f7fafc;
  --gray-200: #edf2f7;
  --gray-300: #e2e8f0;
  --gray-400: #cbd5e0;
  --gray-500: #a0aec0;
  --gray-600: #718096;
  --gray-700: #4a5568;
  --gray-800: #2d3748;
  --gray-900: #1a202c;
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
`;

cssin(commonValues);
