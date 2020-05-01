const reverse = (arr) => arr.reduce((acc, el) => [el, ...acc], []);

const reverseFast = (arr) => arr.reduce((acc, el) => {
  const newAcc = [el];
  newAcc.push(...acc);
  return newAcc;
}, []);

const arr = [1, 2, 3];
const newArr = reverse(arr);
const newArr2 = reverseFast(arr);

console.log(newArr);
console.log(newArr2);


/* Spread операцию можно применять не только к массивам, но и к объектам: */
const obj = { key: 'value' };
console.log({ ...obj, port: 80 }); // => { key: 'value', port: 80 }
