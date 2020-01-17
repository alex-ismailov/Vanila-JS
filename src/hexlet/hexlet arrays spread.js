const arr1 = [1, 2, 3];
const newArr1 = [...arr1, 4, 5, 6];

const arr2 = [4, 5, 6];
const newArr2 = [...arr1, ...arr2];

const arr3 = newArr2;
const arr4 = [10, 11, 12];
const newArr3 = [...arr3, 7, 8, 9, ...arr4];

const newArr4 = [0, 0, 0, ...[...arr1, ...arr2]];

console.log(newArr1);
console.log(newArr2);
console.log(newArr3);
console.log(newArr4);
