import mix from './mixColor';

function calcSpace(unit: number, suffix: string) {
  let out = '';

  for (let i = 0; i <= 100; i++) {
    out += `--${i}:${i * unit}${suffix}; `;
  }

  return out;
}
function getColors(names?: string[]) {
  function calcPalette(name: string, colorMin: string, colorMiddle: string, colorMax: string) {
    let color = '';
    for (let i = 0; i <= 100; i += 5) {
      const cname = `--${name}-${i * 10}`;
      if (names) {
        names.push(cname);
      }

      if (i <= 50) {
        color += `${cname}: ${mix(colorMin, colorMiddle, i / 50)}; `;
      } else {
        color += `${cname}: ${mix(colorMiddle, colorMax, (i - 50) / 50)}; `;
      }
    }

    return color;
  }

  let col = '';
  col += calcPalette('white', '#FFFFFF', '#f0f0f0', '#aaaaaa');
  col += calcPalette('black', '#FCFCFC', '#969696', '#2C2C2C');
  col += calcPalette('gray', '#f7fafc', '#718096', '#121721');
  col += calcPalette('red', '#fff5f5', '#e53e3e', '#742a2a');
  col += calcPalette('orange', '#fffaf0', '#dd6b20', '#7b341e');
  col += calcPalette('yellow', '#fffff0', '#d69e2e', '#744210');
  col += calcPalette('green', '#f0fff4', '#38a169', '#22543d');
  col += calcPalette('teal', '#e6fffa', '#319795', '#234e52');
  col += calcPalette('blue', '#ebf8ff', '#3182ce', '#2a4365');
  col += calcPalette('indigo', '#ebf4ff', '#5a67d8', '#3c366b');
  col += calcPalette('purple', '#faf5ff', '#805ad5', '#44337a');
  col += calcPalette('pink', '#fff5f7', '#d53f8c', '#702459');

  return col;
}

const colors = getColors();
const space = calcSpace(0.25, 'rem');

export const valueCss = `
.cssin-body {
  --family-sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--family-serif:Georgia,Cambria,"Times New Roman",Times,serif;--family-mono:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--shadow-inner:inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);--shadow-outline:0 0 0 3px rgba(66, 153, 225, 0.5);--bar-xxs:0.5rem;--bar-xs:1rem;--bar-sm:2rem;--bar-md:3rem;--bar-lg:3.5rem;--bar-xl:4rem;--bar-xxl:5rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.4rem;--radius-md:0.6rem;--radius-lg:0.8rem;--radius-xl:1rem;--radius-xxl:2rem;--radius-full:9999px;--font-xxs:0.64rem;--font-xs:0.75rem;--font-sm:0.875rem;--font-md:1rem;--font-lg:1.125rem;--font-xl:1.25rem;--font-xxl:1.75rem;--letter-tighter:-0.05em;--letter-tight:-0.025em;--letter-normal:0;--letter-wide:0.025em;--letter-wider:0.05em;--letter-widest:0.1em;--alpha:transparent;--white:#fff;--black:#000;${colors}; ${space};
}
  `;

export const globalCss = `
.cssin-body {line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

.cssin-body {padding:0;margin:0;position:relative;-webkit-tap-highlight-color:transparent;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif}
  
.cssin-input {background-color:transparent;outline:0;border:none;padding:0;margin:0;-webkit-appearance:none}

.csin-div {margin:0;padding:0pxl}
.csin-p {margin:0;padding:0pxl}

.cssin-button {-webkit-appearance:none;outline:0;border:none;user-select:none}
  `;

// 用于开发调试颜色
function __cssinShowPalete() {
  const names: string[] = [];

  getColors(names);
  const palette = document.createElement('div');
  palette.id = 'render-palette';
  palette.style.cssText =
    'z-index: 20000; top: 0px; left:0px; position: fixed; width:100vw; height:100vh; overflow:scroll; ';

  names.forEach(col => {
    const colBox = document.createElement('div');
    colBox.textContent = col;
    colBox.style.cssText = `width: 50vw; margin: 8px; user-select:text; padding: 15px; background-color:var(${col});`;
    palette.append(colBox);
  });

  document.body.append(palette);
}

(window as any).__cssinShowPalete = __cssinShowPalete;
(window as any).__cssinHiddenPalete = () => {
  const palette = document.getElementById('render-palette');
  if (palette) {
    palette.parentNode!.removeChild(palette);
  }
};
