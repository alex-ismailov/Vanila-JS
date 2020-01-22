const user = { name: 'Vasya', married: true, age: 25 };

/* Копирование объекта, а не ссылки на объект, 
создаётся новый объект — копия объекта user.
Это хороший способ сделать копию объекта.*/
const newUser = {...user};
console.log(newUser);
console.log(newUser.married);

// Конструирование нового объекта на основе старого.
const newUser2 = {...newUser, lang: 'JS'};
console.log(newUser2);

// Слияние нескольких объектов.
const newUser3 = {prop1: 1, prop2: 2};
const newUser4 = {prop3: 3, prop4: 4};
const newUser5 = {...newUser3, ...newUser4};
console.log(newUser5);

/* Гибкое конструирование. 
Может быть задействовано любое количество spread-операторов и в любом порядке: */
const user2 = { name: 'Vasya', age: 25 };
const user3 = { name: 'Petya', surname: 'Ivanov' };
const newUser6 = {...user2, married: true, ...user3};
console.log(newUser6);

const married = true;
const property = 'middleName';
const newUser7 = {
  married,
  [property]: 'Nikolaevich',
  ...{...user2, ...user3},
};
console.log(newUser7);
