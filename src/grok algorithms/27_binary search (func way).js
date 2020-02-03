/**
 * Binary search (using while cicle)
 * @param {Array} arr among which we are looking for
 * @param {Number} item what are we looking for
 * @param {Number} low begining index
 * @param {Number} high end index
 * @return {Number} mid index of desired item in array
*/

const binarySearch = (item, arr, low = 0, high = arr.length - 1) => {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      return binarySearch(item, arr, low, mid - 1);
    } else {
      return binarySearch(item, arr, mid + 1, high);
    }
  }
  return null; 
};


/* testing */
const arr = [1, 3, 5, 7, 9, 11, 13, 14, 16, 18, 20];
console.log(binarySearch(103, arr));
console.log(binarySearch(3, arr));
console.log(binarySearch(20, arr));
console.log(binarySearch(21, arr));
