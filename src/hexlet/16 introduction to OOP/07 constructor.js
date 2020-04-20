const make = (name, website) => {
  return { name, website };
}

const getName = (company) => company.name;
const getWebsite = (company) => company.website;

// Теперь использование:
// import { make, getName } from './company.js';

const company = make('Hexlet', 'https://hexlet.io');
console.log(getName(company)); // Hexlet
console.log('************');

/* Попробуем сделать то же самое используя инкапсуляцию: */
const make2 = (name, website) => {
  return {
    name,
    website,
    getName() {
      return this.name;
    },
    getWebsite() {
      return this.website;
    },
  };
};

/* И использование: */
// import { make } from './company.js';

const company2 = make2('Hexlet', 'https://hexlet.io');
console.log(company2.getName()); // Hexlet
console.log(company2.getWebsite()); // https://hexlet.io
console.log('************');

/* Перепишем наш пример, избежав постоянного создания методов: */
function getName3() {
  return this.name;
};

function getWebsite3() {
  return this.website;
};

// С точки зрения использования ничего не поменялось, но зато перестали копироваться функции.
const make3 = (name, website) => ({
  name,
  website,
  getName3,
  getWebsite3,
});

const company3 = make3('Hexlet', 'https://hexlet.io');
console.log(company3.getName3()); // Hexlet
console.log(company3.getWebsite3()); // 'https://hexlet.io'
console.log('************');

// В JavaScript есть встроенная поддержка генерации объектов. Перепишем наш пример и разберем его.
/* Оператор new */

function Company4(name, website) {
  this.name = name;
  this.website = website;
  this.getName = getName3;
  this.getWebsite = getWebsite3;
};

const compObj = new Company4('Hexlet', 'https://hexlet.io');
console.log(compObj.getName());
console.log(compObj.getWebsite());
console.log('************');

const compObj2 = new Company4('Hexlet2', 'https://hexlet2.io');
console.log(compObj2.getName());
console.log(compObj2.getWebsite());
console.log('************');

/* ------------------------------------------------------__ */
const arr = [1,2,3];
console.log(typeof arr);
console.log(Object.prototype.toString.call(arr));
