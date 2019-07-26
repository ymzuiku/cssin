# css-in JS

Only 0.5 kb, Ease use

## Use

```js
import cssin from 'cssin';

cssin(`
  body {
    margin: 0px
  }
`);
```

## Use className

```js
import cssin from 'cssin';

const className1 = cssin(`
  .dog {
    margin: 0px
  }
`);

console.log(className1); // dog

const className2 = cssin(`
  .dog## {
    margin: 0px
  }
`);

console.log(className2); // dogfjkdajf291321
```
