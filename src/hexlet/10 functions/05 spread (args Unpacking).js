
/* сигнатура реализации точно такая же
как и в 04 spread (args packing).js, разница в том, что 
теперь мы передаем в функцию массив аргументов*/
const sum = (...params) => {
  // let res = 0;
  // for (const num of params) {
  //   res += num;
  // }
  // return res;
  return params;
};

// const sum2 = (params) => {
//   // let res = 0;
//   // for (const num of params) {
//   //   res += num;
//   // }
//   // return res;
//   return params;
// };

/* testing */
const arrayOfnumbers = [1, 7, 4];
console.log(sum(...arrayOfnumbers)); // 12
console.log(sum(arrayOfnumbers)); // 12


// console.log(...[1, 7, 4]);
// console.log([1, 7, 4]);