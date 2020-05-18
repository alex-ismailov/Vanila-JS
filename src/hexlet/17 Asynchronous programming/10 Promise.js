import { promises as fs } from 'fs';

export const copy = (src, dest) => {
  return fs.readFile(src, 'utf-8')
    .then((content) => fs.writeFile(dest, content));
};

const show = (src) => fs.readFile(src, 'utf-8').then((content) => console.log(content));
const src = 'src/hexlet/17 Asynchronous programming/test files/myfile.txt';
const dest = 'src/hexlet/17 Asynchronous programming/test files/newMyfile.txt';
show(src);

// Тот же код в более короткой записи
// const copy = (src, dest) =>
//   fs.readFile(src, 'utf-8').then((content) => fs.writeFile(dest, content));

/* В свою очередь then тоже возвращает промис. */
const promise = fs.readFile(src, 'utf-8')
  // .then(() => 'go to the next then')
  .then(() => 'go to the next then')
  .then(console.log);

fs.readFile(src, 'utf-8')
  .then((content) => fs.writeFile(dest, `${content}${content}`))
  // Следующий then берется от writeFile. То есть этот код равносилен fs.writeFile(dest, content).then(...)
  .then(() => console.log('writing has been finished!'));
  
console.log('string from call stack');
