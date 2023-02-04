// Finds smallest letter in an array greater than target
// arr = ['c', 'f', 'j'], target = 'a', output = 'c'
const smallestLetter = (arr: string[], target: string) => {
  let start = 0;
  let end = arr.length - 1;

  if (target > arr[end]) return arr[0];

  while (start <= end) {
    const mid = ~~((start + end) / 2);
    if (target < arr[end]) end = mid - 1;
    else start = mid + 1;
  }

  return `output: ${arr[start]}`;
};

console.log(smallestLetter(['c', 'f', 'j'], 'c'));
