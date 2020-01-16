const arr1 = [1, 2, 3];
const newArr1 = [...arr1, 4, 5, 6];

const arr2 = [4, 5, 6];
const newArr2 = [...arr1, ...arr2];

console.log(newArr1);
console.log(newArr2);
