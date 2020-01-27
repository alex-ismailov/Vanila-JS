/* На части можно раскладывать не только массивы, но и объекты,
извлекая из них значения по определённым ключам: */
const person = { first: 'Rasmus', last: 'Lerdorf', manager: true };
const {first: firstName, last: lastName, manager: manager} = person;
console.log(firstName);
// создали константу firstName
// и сохранили в ней значение person.first
console.log(firstName); // => 'Rasmus'
// создали константу lastName
// и сохранили в ней значение person.last
console.log(lastName); // => 'Lerdorf'
// создали константу manager
// и сохранили в ней значение person.manager
console.log(manager); // => true
/* Если желаемое имя для создаваемой переменной совпадает с фактическим именем ключа объекта,
то запись можно резко сократить, указав только имя. */
const {first, last, manager} = person;
console.log(first); // => 'Rasmus'
console.log(last); // => 'Lerdorf'
console.log(manager); // => true
// Количество и порядок присваиваемых значений не важны.

/* Как обычно происходит в JavaScript, при попытке взять значение из несуществующего ключа
в переменную запишется значение undefined: */
let { married } = person;
console.log(married); // undefined
// Для таких случаев можно подстраховаться и определить значение по умолчанию:
let { last = 'Ivanov', salary = 1000 } = person;
console.log(last);
console.log(salary);
/* В объекте person нет ключа married, поэтому в константу married
записано значение по умолчанию true. */

/* JavaScript допускает вложенную деструктуризацию. 
С его помощью можно получать значения не только внешнего объекта,
но и вложенных в него объектов: */
const options = { enabled: true, compression: { algo: 'gzip' } };
const {enabled, compression: {algo: compressionAlgo}} = options;
console.log(enabled);
console.log(compressionAlgo);
console.log();

console.log('Деструктуризацию объекта можно комбинировать с деструктуризацией массива:')
const x = { o: [1, 2, 3] };
const { o: [a, b, c] } = x;
console.log(a);
console.log(b);
console.log(c);

const y = { o: [[1, 2, 3], { what: 'WHAT' }] };
const {o: [[one, two, three], { what }]} = y;
console.log(one);
console.log(two);
console.log(what);
