const search = (arr, target) => {
  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) return [i, j];
    }
  }

  return [-1, -1];
};

let arr = [
  [1, 2, 3],
  [4, 5, 6, 1, 22],
  [7, 8, 9],
];

console.log(search(arr, 22));
