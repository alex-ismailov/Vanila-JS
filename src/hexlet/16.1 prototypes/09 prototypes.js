const obj = { key: 'value' };
console.log(Object.getOwnPropertyNames(obj));

const proto = Object.getPrototypeOf(obj);// [ 'key' ]
console.log(Object.getOwnPropertyNames(proto)); // =>
// [
//   'constructor',
//   '__defineGetter__',
//   '__defineSetter__',
//   'hasOwnProperty',
//   '__lookupGetter__',
//   '__lookupSetter__',
//   'isPrototypeOf',
//   'propertyIsEnumerable',
//   'toString',
//   'valueOf',
//   '__proto__',
//   'toLocaleString'
// ]

const get = (obj, property) => {
  if (obj.hasOwnProperty(property)) {
    return obj[property];
  }
  if (Object.getPrototypeOf(obj) === null) {
    return undefined;
  }
  return get(Object.getPrototypeOf(obj), property);
}

/* Создание объектов */
const obj2 = new Object(); // {} - это синт.сахар
console.log(typeof Object); // function

const proto2 = Object.getPrototypeOf(obj2);
console.log(proto2 === Object.prototype); // true
console.log(obj2.prototype); // undefined

/* ****************** */
/* Создание прототипа */
function F() {}
F.prototype; // {}

/* св-ва самой функции(Конструктора) ни как с объектами не связаны, а
вот прототип связан и он находится внутри объектов порождаемой этой функцией !!! */
console.log(Object.getOwnPropertyNames(F)); // [ 'length', 'name', 'prototype' ]

console.log(Object.getOwnPropertyNames(F.prototype)); // [ 'constructor' ]

const obj3 = new F();
console.log(obj3.constructor === F); // true
console.log(obj3.name); // undefined

/* Изменение прототипа */
F.prototype.color = 'green';
const obj4 = new F();

console.log(obj3.color);// green
console.log(obj4.color);// green

/* ****************** */
/* Определение класса */
/* определение класса в JS по стандартам ниже ES6 */
function Node(name) {
  this.name = name;
}

Node.prototype.getName = function getName() {
  return this.name;
};

const obj5 = new Node('span');
console.log(obj5.getName()); // span

/* ********** */
/* Перекрытие (overlap) */
/* Это особенность прототипов в JS */
F.prototype.color = 'yellow';
const obj6 = new F();
const obj7 = new F();
obj7.color = 'red';

console.log(obj6.color); // yellow
console.log(obj7.color); // red
console.log(F.prototype.color); // yellow


console.log('----------------------------');

function Person(name, sex) {
  this.name = name;
  this.sex = sex;
}

Person.prototype.showName = function showName() {
  console.log(this.name);
}

const first = new Person('Alex', 'male');
const second = new Person('Marina', 'female');

console.log(Person.prototype !== Object.getPrototypeOf(second)); // false
console.log(Object.getPrototypeOf(first) !== Object.getPrototypeOf(second)); // false
console.log(Object.getPrototypeOf(first) === Object.getPrototypeOf(second)); // true
console.log(Person.prototype === Object.getPrototypeOf(second)); // true
console.log(Person.prototype === Object.getPrototypeOf(first)); // true

console.log('-------');
console.log(Person.prototype);              // Person { showName: [Function: showName] }
console.log(Object.getPrototypeOf(second)); // Person { showName: [Function: showName] }
console.log(Object.getPrototypeOf(Person)); // [Function (anonymous)]

console.log(Person.prototype.showName === first.showName);
console.log(Person.prototype.showName !== second.showName);