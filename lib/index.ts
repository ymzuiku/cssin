
const getRandomString = (prefix = '', length = 12) => {
  //设置随机数范围
  const charts = 'abcdefghijklmnopqrstuvwxyz_0123456789';
  const maxPos = charts.length;
  let result = prefix;
  for (let i = 0; i < length - 1; i++) {
    result += charts.charAt(Math.floor(Math.random() * maxPos));
  }

  return result;
};

export const cssin = (value: string, replace='##') => {
  let name = '';
  if (value.indexOf(replace) > -1) {
    name = getRandomString('r');
    value = `${value.replace(replace, `${name}`)}`;
  }

  const style = document.createElement('style');
  style.innerHTML = value;
  document.head.appendChild(style);

  return name;
};

export default cssin;