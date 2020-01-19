// обмен переменных местами XOR вариант, src: https://habr.com/ru/post/183462/
let x = 5;
let y = 3;
console.log(`defore XOR change: x = ${x}, y = ${y}`);
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log(`after XOR change: x = ${x}, y = ${y}`);

// обмен при помощи деструктуризации
let a = 5;
let b = 3;
console.log(`defore destructuring change: x = ${a}, y = ${b}`);
[a, b] = [b, a]
console.log(`after destructuring change: x = ${a}, y = ${b}`);

// destructuring
const arr = ['Sasha', 'Ksusha'];
const [f_name, s_name] = arr;
console.log(`f_name = ${f_name}, s_name = ${s_name}`); 

/* Дестракчеринг работает для любого количества элементов. 
Более того, из массива можно выборочно извлекать конкретные элементы */
const [, secondElement, , fourthElement, fifthElement] = [1, 2, 3, 4, 5, 6];
console.log(`secondElement = ${secondElement}`);
console.log(`fourthElement = ${fourthElement}`);
console.log(`fifthElement = ${fifthElement}`);

/* Деструктурируемый массив состоит всего из двух элементов,
поэтому в thirdElement сохранится undefined.
Но таких от случаев можно подстраховаться и определить значение по умолчанию: */
const [f_Element, s_Element, t_Element = 3] = [1, 2];
console.log(f_Element);  // => 1
console.log(s_Element); // => 2
console.log(t_Element);  // => 3

/* Разложение массива можно использовать не только как отдельную инструкцию в коде,
но и, например, в циклах: */
const points = [
  [4, 3],
  [0, -3],
];

for (const [x, y] of points) {
  console.log([x, y]);
}
