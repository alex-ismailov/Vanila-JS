// Нужно сделать заглавной первую букву каждого слова в тексте.
import _ from 'lodash';

const capitalizeWords = (sentence) => {
  const separator = ' '; // пробел
  const words = sentence.split(separator);
  const capitalizedWords = [];
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    // capitalizedWords[index] = _.upperFirst(word);
    capitalizedWords.push(_.upperFirst(word));
  }
  return capitalizedWords.join(separator);
};

// testing
const str = 'test string';
console.log(capitalizeWords(str));