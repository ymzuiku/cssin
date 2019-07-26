
export const cssin = (value: string) => {
  const style = document.createElement('style');
  style.innerHTML = value;
  document.head.appendChild(style);
};

export default cssin;