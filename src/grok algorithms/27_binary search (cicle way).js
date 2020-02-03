/**
 * Binary search (using while cicle)
 * @param {Array} arr among which we are looking for
 * @param {Number} item what are we looking for
 * @return {Number} mid index of desired item in array
*/

const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};

/* testing */
const arr = [1, 3, 5, 7, 9, 11, 13, 14, 16, 18, 20];
console.log(binarySearch(arr, 103)); // null
console.log(binarySearch(arr, 3)); // index = 1
console.log(binarySearch(arr, 20)); // index = 10
console.log(binarySearch(arr, 21)); // null
