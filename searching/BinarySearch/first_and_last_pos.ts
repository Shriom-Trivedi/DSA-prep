// arr = [5, 7, 7, 8, 8, 10]

const findPositions = (arr: Number[], target: Number) => {
  let ans: Array<Number> = [-1, -1];
  let findStartIndex: Boolean;
  // check for the occurence if target first
  const start = search(arr, target, (findStartIndex = true));
  const end = search(arr, target, (findStartIndex = false));

  ans[0] = start;
  ans[1] = end;
};

const search = (arr: Number[], target: Number, findStartIndex: Boolean) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1; // Potential answer

  while (start <= end) {
    // find the middle element
    // let mid = ~~((start + end) / 2);
    let mid = start + ~~((end - start) / 2);
    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      // target === arr[mid]
      ans = mid;
      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
};

console.log(findPositions([5, 7, 7, 8, 8, 10], 8));
