import fs from 'fs';

const myPath = 'src/hexlet/17 Asynchronous programming/test files/file1.txt';

const promise = new Promise((resolve, reject) => {
  fs.readFile(myPath, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(data);
  });
});

promise.then(console.log).catch(console.log);

/* А что, если нужно обернуть две асинхронных операции, или три, или даже больше?
Придётся оборачивать каждую из них независимо. Другими словами, одна асинхронная
операция — один конструктор new Promise. Кстати, эту задачу можно автоматизировать,
и в ноду встроена специальная функция, которая делает промисы из асинхронных функций: */

import util from 'util';
import fs from 'fs';

const stat = util.promisify(fs.stat);
stat('.')
  .then((stats) => console.log(stats))
  .catch((error) => console.log(error));

/* 
В реальной жизни, встречаются задачи, когда асинхронного кода нет, но
нужен промис чтобы построить цепочку. Такой промис можно создать самостоятельно: */
const promise = new Promise((resolve) => resolve());
// promise.then ...

/* Тоже самое для промиса, который завершается неуспешно: */
const promise11 = new Promise((resolve, reject) => reject());
// promise.catch ...

/* Для этих задач добавили специальные сокращения, с которыми код становится чище: */
const promise1 = Promise.resolve();
// promise1.then

const promise2 = Promise.reject();
// promise2.catch ...



console.log('******** string from main call stack ********');