/* Определение типа */
console.log([] instanceof Array);  // true
console.log({} instanceof Object); // true
console.log([] instanceof Object); // true

console.log('string' instanceof String);               // false
console.log((new String('string')) instanceof String); // true

console.log(typeof 'simple string hello' === 'string');

console.log('****************');

const data = ['simple string', 1, ['a', 'r', 'r'], { prop: 'first prop' }, false, null, undefined, 19241924124n, (e) => e];

data.forEach((e) => {
  console.log(`typeof '${e}' is: ${typeof e}`);
  // console.log(`e.[[value]]: ${e[[value]]}`);
});

/* instanceof, отвечает на вопрос о том, какой конструктор был использован для создания структуры. */

console.log(typeof []);

const data = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];

/* обобщенное предствление узла */
[tagname, attributes, body, children];

/* Оптимизированное представление */
[tagname, attributes, body, children];

[tagname];

[tagname, attributes];

[tagname, body];
[tagname, attributes, body];

[tagname, children];
[tagname, attributes, children];



