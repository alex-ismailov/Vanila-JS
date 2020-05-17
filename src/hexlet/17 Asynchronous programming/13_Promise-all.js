/* Промисы, как и колбеки, позволяют выполнять асинхронные операции параллельно.
Причём умеют делать это в автоматическом режиме, без ручного отслеживания окончания
одной из операций. Для этого достаточно собрать массив из промисов и передать их
в функцию Promise.all. В результате вернётся обычный промис, на основе которого
можно строить дальнейшую цепочку. Данными в первом then будет массив с данными всех
выполненных операций. */

import { promises as fs } from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath) => {
  const promise1 = fs.readFile(inputPath1, 'utf-8');
  const promise2 = fs.readFile(inputPath2, 'utf-8');
  // На вход идет МАССИВ из промисов
  const promise = Promise.all([promise1, promise2]);
  // Обязательно делать возврат!
  return promise.then(([data1, data2]) => fs.writeFile(outputPath, `${data1}${data2}`));
};

const path1 = 'src/hexlet/17 Asynchronous programming/test files/file1.txt';
const path2 = 'src/hexlet/17 Asynchronous programming/test files/file2.txt';
const outputPath = 'src/hexlet/17 Asynchronous programming/test files/unionFileFromLes13.txt'

// unionFiles(path1, path2, outputPath);

/* Функции Promise.all не важно каким образом была получена коллекция промисов.
Единственное что ей нужно – получить на вход массив этих промисов.
Поэтому Promise.all легко комбинируется с любыми функциями, возвращающими коллекции.
В примере ниже дается массив путей до файлов, которые нужно прочитать и вывести на экран их содержимое.
Первым делом в коде формируется массив из промисов, затем он передается в Promise.all и, наконец,
содержимое файлов выводится на экран: */



const showContent = (filepaths) => {
  const promises = filepaths.map((path) => fs.readFile(path, 'utf-8'));
  // console.log(promises); // [ Promise { <pending> }, Promise { <pending> } ]

  const promise = Promise.all(promises);
  
  return promise.then((contents) => contents.map(console.log));
};

const filepaths = [
  'src/hexlet/17 Asynchronous programming/test files/file1.txt',
  'src/hexlet/17 Asynchronous programming/test files/file2.txt',
  // 'src/hexlet/17 Asynchronous programming/test files/file123.txt', // ENOENT
];

showContent(filepaths); // =>
// file 1 content
//  0 [ 'file 1 content\n', 'file 2 content\n' ]
// file 2 content
//  1 [ 'file 1 content\n', 'file 2 content\n' ]

/* Promise.all всегда запускает операции одновременно и эти операции друг от друга
никак не зависят. Это значит, что никакая ошибка (кроме остановки программы) 
е остановит запросы. Ошибка хотя бы в одном из промисов не помешает выполниться
всем остальным запросам. Однако, если хотя бы один промис завершился с ошибкой,
весь результат Promise.all будет помечен как ошибочный, а значит управление попадёт
в ближайший catch. Чтобы этого избежать, можно передавать в Promise.all не просто
промисы, а промисы с повешенными на них обработчиками ошибок catch, из которых уже
возвращаются данные с пометкой об успешности. */

const showContentWithCatch = (paths) => {
  const promises = filepaths.map((path) => fs.readFile(path, 'utf-8')
    .then((v) => ({ result: 'success', value: v }))
    .catch((e) => ({ result: 'error', error: e })));
  
  const promise = Promise.all(promises);
  return promise;
};

const filepaths2 = [
  'src/hexlet/17 Asynchronous programming/test files/file1.txt',
  'src/hexlet/17 Asynchronous programming/test files/file2.txt',
  'src/hexlet/17 Asynchronous programming/test files/file123.txt', // this file is not exist
];

showContentWithCatch(filepaths2)
  .then((content) => console.log(content));
