// Que: Find ceil of a number in array
// ceiling = smallest element in array >= target

// arr = [2, 3, 5, 9, 14, 16, 17, 18, 20], target = 15, then ans = 16

const ceil_binSearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  // Condition when target is greater than the last element
  if (target > arr[end]) {
    return 'NOT FOUND';
  }

  while (start <= end) {
    const mid = start + ~~((end - start) / 2);

    if (target === arr[mid]) {
      return [`index: ${mid}`, `value: ${arr[mid]}`];
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    }
  }
  return [`index: ${start}`, `value: ${arr[start]}`];
};

const arr = [2, 3, 5, 9, 14, 16, 17, 18, 20];
const target = 15;
console.log(ceil_binSearch(arr, target));

// then ans = 16
