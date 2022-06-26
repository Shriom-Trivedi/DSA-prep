const linear = (str, target) => {
  if (str.length === 0) return -1;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === target) return [i, `char: ${str[i]}`];
  }

  return Number.MAX_VALUE;
};

const str = 'Assamize';
console.log(linear(str, 'm'));
