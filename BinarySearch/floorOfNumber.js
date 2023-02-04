// Que: Find floor of a number in array
// ceiling = greatest element in which is smaller than the target

const floor_binSearch = (arr, target) => {
  let start = 0;
  let end = Object.keys(arr).length;

  while (start <= end) {
    let mid = start + ~~((end - start) / 2);
    if (target === arr[mid]) return [`index: ${mid}, element: ${arr[mid]}`];
    else if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    }
  }

  return [`index: ${end}, element: ${arr[end]}`];
};

const arr = [2, 3, 5, 9, 14, 17, 18, 20, 29];
const target = 15; // ans = 14
console.log(floor_binSearch(arr, target));
