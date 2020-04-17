const company = { name: 'Yoshi' };

company.getName = function() {
  return this.name;
};

console.log(company.getName());

company.name = 'Hexlet Plus';
console.log(company.getName()); // Hexlet Plus

company.setName = function (name) {
  this.name = name;
};

company.setName('Yaga');
console.log(company.getName()); // Yaga


/* В JavaScript this может измениться прямо во время работы программы: */
const company1 = { name: 'Hexlet', getName: function() { return this.name } };
const company2 = { name: 'Hexlet Plus' };
console.log(company1.getName());

/* Что здесь произошло? Вызов функции из другого объекта привел к смене объекта, на
который ссылается this. Эта особенность называется поздним связыванием.  */
company2.getName = company1.getName;
console.log(company2.getName());


const getNameFunc = function() {
  return this.name;
};

console.log(getNameFunc.call(company1));
console.log(getNameFunc.call(company2));

/* Cпециальный сокращенный синтаксис создания функций при определении объектов: */
const company4 = {
  name: 'Hexlet',
  getName() {
    return this.name;
  },
};