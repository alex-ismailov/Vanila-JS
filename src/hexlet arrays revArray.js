const revArr = (arr) => {
  const size = arr.length;
  const maxSize = Math.floor(size / 2);
  for (let i = 0; i < maxSize; i += 1) {
    const tmp = arr[(size - 1) - i];
    arr[(size - 1) - i] = arr[i];
    arr[i] = tmp; 
  }
  return arr;
};

// testing
const arr1 = [1];
const arr2 = [1, 2];
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3, 4, 5];
const arr5 = [1, 2, 3, 4, 5, 6];
console.log(revArr(arr1));
console.log(revArr(arr2));
console.log(revArr(arr3));
console.log(revArr(arr4));
console.log(revArr(arr5));