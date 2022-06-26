const linearSearch = (arr, target) => {
  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return Number.MAX_VALUE;
};

const arr = [1, 2, 5, 6, 7, 10, -1, 60, -21];
console.log(linearSearch(arr, -11));
