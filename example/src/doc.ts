export const a = `<button className={cssin\`background:--gray-300; padding:1.2rem; marge:0.5rem; border-radius:0.3rem;\`}>我是一个按钮</button>`;

export const b1 = `
addSheets({
  'button': 'background:--gray-300; padding:1.2rem; marge:0.5rem; border-radius:0.3rem;',
});
`;
export const b2 = `
<button className={cssin\`button;\`}>将样式打包成组件</button>
`;

export const c = `
<button className={cssin\`button; transition:all 0.3s ease-in; box-shadow:--shadow-lg; hover:box-shadow:--shadow-md; active:box-shadow:--shadow-sm;\`}>将样式打包成组件</button>
`;

export const d1 = `
addSheets({
  'button-anime': 'button; transition:all 0.3s ease-in; box-shadow:--shadow-lg hover:box-shadow:--shadow-md; active:box-shadow:--shadow-sm;',
});
`;
export const d2 = `
<button className={cssin\`button-anime;\`}>将button和动画打包成新的组件</button>
`;
