const scores1 = [1, 2, 10, 21];
console.log(scores1.sort()); // [1, 10, 2, 21]
const things1 = ['слово', 'Слово', '1 Слово', '2 Слова'];
console.log(things1.sort(compareFunc)); // [1, 10, 2, 21]

const compareFunc = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

const things2 = ['слово', 'Слово', '1 Слово', '2 Слова'];
console.log(things2.sort(compareFunc)); // [1, 10, 2, 21]

// Для числового сравнения, вместо строкового,
// функция сравнения может просто вычитать b из a.
// Следующая функция будет сортировать массив по возрастанию:

function compareNumbers(a, b) {
  return a - b;
}

const scores2 = [1, 2, 10, 21];
console.log(scores2.sort(compareNumbers)); // [1, 10, 2, 21]
