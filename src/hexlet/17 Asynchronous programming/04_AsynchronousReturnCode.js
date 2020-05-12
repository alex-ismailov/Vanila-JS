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

readFileWithTrim('src/hexlet/17 Asynchronous programming/fileWithtrim.txt', (_error, data) => console.log(data.trim()));
