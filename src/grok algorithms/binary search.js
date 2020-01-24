

const arr = [1, 3, 5, 7, 9, 11, 13, 14, 16, 18, 20];


// const binarySearch = (arr, item) => {
//   let low = 0;
//   let high = arr.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     let guess = arr[mid];
//     if (guess === item) {
//       return mid;
//     }
//     if (guess > item) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return null;
// };

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
      // console.log(`right side -> low = ${low}; high = ${high}, mid = ${mid}, guess = ${arr[mid]}; arr.length = ${arr.length}`);
      return binarySearch(item, arr, mid + 1, high);
    }
  }
  return null; 
};

console.log(binarySearch(103, arr));
console.log(binarySearch(3, arr));
console.log(binarySearch(20, arr));
console.log(binarySearch(21, arr));
