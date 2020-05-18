/* Напишем асинхронную функцию-обёртку для чтения файла, которая,
кроме самого чтения, выполняет небольшую чистку, удаляя начальные и
концевые пробелы из содержимого.
 */
import fs from 'fs';

const readFileWithTrim = (filepath, cb) => {
  fs.readFile(filepath, 'utf-8', (_error, data) => {
    cb(null, data.trim());
  });
};

const src = 'src/hexlet/17 Asynchronous programming/test files/fileWithtrim.txt';

readFileWithTrim(src, (_error, data) => console.log(data));
