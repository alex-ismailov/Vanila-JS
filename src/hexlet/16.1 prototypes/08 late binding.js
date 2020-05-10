const makeNode = (name) => {
  return {
    name,
    getName() {
      return this.name;
    }
  }
};

const obj = makeNode('table');
console.log(obj.name);
console.log(obj.getName());

const func = obj.getName;
// func(); // TypeError: Cannot read property 'name' of undefined
console.log(func.call(obj)); // table
console.log(func.apply(obj)); // table

/* *********************************************************************** */
/* Было бы более яснее и нагляднее использ. вмсето слова this слово context*/
/* *********************************************************************** */
/* Позднее связывание заключается в том, что this присваивается не в момент вызова, а в момент вызова функции. */
/* *********************************************************************************************************** */

function f(name) {
  this.name = name;
}

const obj1 = { setName: f };
const obj2 = { setName: f };

console.log(obj1.setName === obj2.setName); // true

obj1.setName('martin');
obj2.setName('mike');

console.log(`obj1.name: ${obj1.name}`);
console.log(`obj1.name: ${obj2.name}`);

/* ****************** */
/* Стрелочные функции */
/* У стрелочных функций раннее связывание, т.е. их this жестко связывается с
this окружающего их контекста, в котором эта стрелочная функция была объявлена */

const makeNode2 = (name) => {
  return {
    name,
    getName: () => {
      return this.name;
    }
  };
};

const node2 = makeNode2('table2');
/* TypeError: Cannot read property 'name' of undefined */
// console.log(node2.getName());

