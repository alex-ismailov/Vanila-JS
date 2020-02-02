/* Предположим, что мы пишем функцию, которая принимает на вход список путей файловой системы,
находит среди них файлы с расширением js без учёта регистра и возвращает имена этих файлов. */

/* Для решения этой задачи нам понадобятся следующие функции: */
// fs.existsSync(filepath) — проверяет, существует ли файл по указанному пути
// fs.lstatSync(filepath).isFile() — проверяет, является ли объект обычным "регулярным" файлом (а не директорией, ссылкой или другим типом файлов)
// path.extname(filepath) — извлекает "расширение" из имени файла
// path.basename(filepath) — извлекает имя файла из полного пути
import fs from 'fs';
import path from 'path';

/* const getJSFileNames = (paths) => {
  const result = [];
  // Подход противоположный потоковой обработке.
  // Здесь всё выполняется сразу в куче без разделения по шагам.
  for (const filepath of paths) {
    const extension = path.extname(filepath).toLowerCase;
    if (fs.existsSync(filepath) && fs.lstatSync(filepath).isFile() && extension === '.js') {
      result.push(path.basename(filepath.toLowerCase(), extension));
    }
  }
  return result;
}; */

// const names = getJSFileNames(['index.js', 'wop.JS', 'nonexists', 'node_modules']);
// console.log(names); // => [index, wop]

/* В примере выше типовое решение с использованием цикла. Его алгоритм можно описать так: */

/* Если попытаться то же самое реализовать, используя метод reduce, то на выходе получится код,
идентичный решению на циклах. Но если хорошо подумать, то можно увидеть, что эта задача
распадается на две: фильтрацию и отображение. */
const getJSFileNames = (paths) => paths
  // отбираем реально существующие файлы
  .filter((filepath) => fs.existsSync(filepath))
  // отбор по типу файла
  .filter((filepath) => fs.lstatSync(filepath).isFile())
  // отбор по расширению
  .filter((filepath) => path.extname(filepath).toLowerCase() === '.js')
  // отображаем в имена (нам нужен массив с именами)
  .map((filepath) => path.basename(filepath.toLowerCase(), '.js'));

const names = getJSFileNames(['index.js', 'wop.JS', 'nonexists', 'node_modules']);
console.log(names); // => [index, wop]