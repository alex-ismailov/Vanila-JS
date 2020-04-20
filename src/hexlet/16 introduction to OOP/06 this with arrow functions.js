const f1 = () => console.log(this);

function f2() {
  console.log(this);
};

/* В es6 this у модулей не определен!!! */
f1(); // undefined
f2(); // undefined
console.log('************');

const obj = {
  f1,
  f2,
};

obj.f1(); // undefined
obj.f2(); // { f1: [Function: f1], f2: [Function: f2] }
console.log('************');

const company = {
  f1: () => { // стрелочная функция
    console.log(this);
  },
  f2() { // обычная функция
    console.log(this);
  },
};

company.f1(); // undefined
company.f2(); // { f1: [Function: f1], f2: [Function: f2] }
console.log('************');

const printer = {
  items: [1],
  print() {
    this.items.forEach(() => console.log(this.items));
  }
};

printer.print(); // [1]
