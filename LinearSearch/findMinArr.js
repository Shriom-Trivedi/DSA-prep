const minArr = (arr) => {
  if (arr.length === 0) return -1;

  let min = arr[0];
  arr.forEach((ele) => {
    if (ele < min) min = ele;
  });
  return min;
};

const arr = [];
console.log(minArr(arr));
