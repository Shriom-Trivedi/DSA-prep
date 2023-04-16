// array = [2, 4, 6, 9, 11, 12, 14, 20, 36, 48]
// step 1: find middle element
// step 2: target > mid => search in the right else search in the left
// step 3: if middle element === target => target found else start from step 1
// step 4: start > end => element not found

/**
 *
 * @param {Array} arr
 * @param {Number} target
 * @returns index of target found
 * return -1 if not found
 */
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // find the middle element
    // let mid = ~~((start + end) / 2);
    let mid = start + ~~((end - start) / 2);
    if (target === arr[mid]) return [mid, `found: ${arr[mid]}`];
    else if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    }
  }
  return -1;
};

const arr = [2, 4, 6, 9, 11, 12, 14, 20, 36];
console.log(binarySearch(arr, 12));

/**
 *
 * @param {Array} arr
 * @param {Number} target
 * @returns index of target found
 * return -1 if not found
 *
 * Here in order agnostic binary search we don't know whether the array is sorted in ascending or descending order
 */
const orderAgnostic_binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  // find whether the array is sorted in ascending order or in descending order
  const isAsc = arr[start] < arr[end] ? true : false;

  while (start <= end) {
    // find the middle element
    // let mid = ~~((start + end) / 2);
    let mid = start + ~~((end - start) / 2);
    if (target === arr[mid]) return [mid, `found: ${arr[mid]}`];

    if (isAsc) {
      if (target > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (target < arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

const arr2 = [36, 20, 14, 12, 11, 9, 6, 4, 2];
const arr3 = [2, 4, 6, 9, 11, 12, 14, 20, 36];
console.log('ordAdBs', orderAgnostic_binarySearch(arr3, 20));
