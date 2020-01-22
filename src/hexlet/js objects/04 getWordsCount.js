/*
  Напишем функцию, считающую количество вхождений каждого слова в предложение.
  Результатом работы этой функции является объект, в котором ключ — "слово",
  а значение — "количество вхождений".
*/
const getWordsCount = (content) => {
  const words = content.split(' ');
  const result = {};
  for (const word of words) {
    if (!result.hasOwnProperty(word)) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }
  return result;
};

/* tetsing */
const content = 'cat dog cat eye see cat dog';
console.log(getWordsCount(content));