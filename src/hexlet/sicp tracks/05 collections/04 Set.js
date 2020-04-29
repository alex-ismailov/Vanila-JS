const stopWords = ['one', 'two', 'three'];
const words = ['one', 'five', 'six', 'seven', 'two', 'four', 'nine'];

const stopWordsSet = new Set(stopWords);

const res1 = words.filter((word) => !stopWordsSet.has(word));
console.log(res1); // [ 'five', 'six', 'seven', 'four', 'nine' ]

stopWordsSet.add('seven');

const res2 = words.filter((word) => !stopWordsSet.has(word));
console.log(res2); // [ 'five', 'six', 'four', 'nine' ]

stopWordsSet.delete('one');

const res3 = words.filter((word) => !stopWordsSet.has(word));
console.log(res3); // [ 'one', 'five', 'six', 'four', 'nine' ]


console.log(stopWordsSet.size); // 3
console.log(stopWordsSet);      // Set(3) { 'two', 'three', 'seven' }

stopWordsSet.add('three');
console.log(stopWordsSet);      // Set(3) { 'two', 'three', 'seven' }

const arrayFromStopWordsSet = Array.from(stopWordsSet);
console.log(arrayFromStopWordsSet); // [ 'two', 'three', 'seven' ]
console.log('*****************');

console.log(stopWordsSet.keys());
console.log(stopWordsSet.values());

stopWordsSet.forEach((elem) => console.log(elem));

console.log('*****************');

/* забавный способ создать массив с уникальными элементами: */
const arrWithDoubles = [1, 2, 3, 7, 1, 3, 9, 9, 4, 6];
const arrOfUniqElems = Array.from(new Set(arrWithDoubles));
console.log(arrWithDoubles);
console.log(arrOfUniqElems);
