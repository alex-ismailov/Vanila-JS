/* Метод Object.keys(obj) позволяет получить массив всех ключей объекта: */
const course = { name: 'JS: React', slug: 'js-react' };
const courseKeys = Object.keys(course);
console.log(`courseKeys -> ${courseKeys}`); // [ 'name', 'slug' ];
/* Далее мы можем обойти в цикле массив ключей и получить нужные значения. */
for (const key of courseKeys) {
  console.log(`course[${key}] -> ${course[key]}`);
}
/* Можно сразу получить массив значений свойств объекта. */
const courseValues = Object.values(course);
console.log(`courseValues -> ${courseValues}`);
/* метод, который делает работу двух предыдущих — сразу возвращает массив свойств.  */
const entries = Object.entries(course);
console.log(entries); // [[ 'name', 'JS: React' ], [ 'slug', 'js-react' ]];
/* Обойти такой массив циклом for...of не составит никакого труда, а дестракчеринг
позволит сделать это элегантно и по-взрослому :) */
for (const [key, value] of entries) {
  console.log('------');
  console.log(key);
  console.log(value);
}