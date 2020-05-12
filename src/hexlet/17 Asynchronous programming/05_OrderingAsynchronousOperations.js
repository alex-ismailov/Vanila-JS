/* Предположим, что перед нами стоит задача прочитать содержимое двух файлов и
записать в третий (объединение файлов). */

// import fs from 'fs';
// fs.readFile('./first', 'utf-8', '?');
// fs.readFile('./second', 'utf-8', '?');
// fs.writeFile('./new-file', content, '?');

/* Вся задача сводится к последовательному выполнению трёх операций,
так как записать новый файл мы можем лишь тогда, когда прочитаем данные
первых двух. Упорядочить подобный код можно лишь одним способом:
каждая последующая операция должна запускаться внутри колбека предыдущей.
Тогда мы построим нужную цепочку вызовов: */

// fs.readFile('./first', 'utf-8', (_error1, data1) => {
//   fs.readFile('./second', 'utf-8', (_error2, data2) => {
//     fs.writeFile('./new-file', `${data1}${data2}`, (_error3) => {
//       console.log('File has been written');
//     });
//   });
// });

import path from 'path';
import fs from 'fs';

const getFileOwners = (dirpath, cb) => {
  fs.readdir(dirpath, (_error1, filenames) => {
    const readFileStat = (items, result = []) => {
      if (items.length === 0) {
        // Обработку ошибок пока не рассматриваем
        cb(null, result);
        return;
      }
      const [first, ...rest] = items;
      const filepath = path.join(dirpath, first);
      fs.stat(filepath, (_error2, stat) => {
        readFileStat(rest, [...result, { filename: first, owner: stat.uid }]);
      });
    };
    readFileStat(filenames);
  });
};

getFileOwners('./', console.log);
