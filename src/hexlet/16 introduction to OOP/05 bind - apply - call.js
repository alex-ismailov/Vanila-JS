const printer = {
  name: 'Hexlet',
  print(greeting = 'hello') {
    console.log(`${greeting}, ${this.name}`);
  }
};

setTimeout(printer.print, 1000); // => hello, undefined
setTimeout((() => printer.print()), 1000); // => hello, Hexlet
const value = 'hi';
setTimeout((() => printer.print(value)), 1000); // hi, Hexlet
setTimeout(printer.print.bind(printer), 1000); // hello, Hexlet
setTimeout(printer.print.bind(printer, 'hola'), 1000); // hola, Hexlet

const print = printer.print;
/* Эти функции внутри себя делают две вещи: меняют контекст и сразу же производят вызов функции. */
print.apply(printer, ['hi2020']);
print.call(printer, 'hi3030');

// Эти функции позволяют делать довольно необычные вещи, например так:
// Если контекста нет, то передают null
const numbers = [1, 10, 33, 9, 15];

console.log(Math.max.apply(null, numbers));
console.log(Math.max.call(null, ...numbers));
