

const one = 1;
// console.log(one.toString());
// console.log((1).toString());

// console.log(true.toString());

/* Интересно то, как происходит распаковка.
Для этого JavaScript автоматически вызывает метод valueOf у объекта: */

// const number = new Number(100);

// console.log(number);
// console.log(number.valueOf());

// // А еще valueOf() вызывается в результате разных операций над объектом
// console.log(number == 100);

/* ********************* */

const obj = {
  one: 1,
  two: 2,
};

console.log(obj);           // { one: 1, two: 2 }
console.log(obj.valueOf()); // { one: 1, two: 2 }

console.log('************');
obj.valueOf = () => 'ta da!';
console.log(obj);           // { one: 1, two: 2, valueOf: [Function (anonymous)] }
console.log(obj.valueOf()); // ta da!

const fn = (arg) => {
  arg.valueOf = () => 'NEW NEW tada!!!!!';
  return arg;
};

console.log(fn(obj).valueOf()); // NEW NEW tada!!!!!
