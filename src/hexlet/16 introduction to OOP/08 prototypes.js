function Company(name) {
  this.name = name;
}

console.log(Company.prototype === Object.getPrototypeOf(new Company));

Company.prototype.getName = function getName() {
  return this.name;
}

const company = new Company('Hexlet');
console.log(company.getName()); // => Hexlet

const company2 = new Company('Google');
company2.getName = function getName() {
  return 'Ta di da !!!';
}

console.log(company2.getName()); // => Ta di da !!!
console.log(company.getName()); // => Hexlet

/* Создание свойств через прототип – и есть правильный способ создания своих абстракций в JavaScript.
Любая новая абстракция, которая нам нужна в коде, должна выглядеть как конструктор и прототип,
наполненный нужными свойствами. */

const nums = [1, 2, 3];

Array.prototype.last = function last() {
  return this[this.length - 1];
}

console.log(nums.last());
