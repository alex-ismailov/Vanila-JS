// import fs from 'fs';

// const unionFilesOLD = (inputPath1, inputPath2, outputPath, cb) => {
//   fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
//     if (error1) {
//       cb(error1);
//       return;
//     }
//     fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
//       if (error2) {
//         cb(error2);
//         return;
//       }
//       fs.writeFile(outputPath, `${data1}${data2}`, cb);
//     });
//   });
// };
/* Запомните этот код — таким вы больше никогда его не увидите ;)
Сейчас мы проведём серию рефакторингов и получим в результате код,
который является каноническим при работе с промисами. Итак, первая версия: */

import { promises as fs } from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath) => {
  // Промисы всегда должны возвращаться и строиться в цепочку!
  const result = fs.readFile(inputPath1, 'utf-8')
    .then((data1) => {
      const promise = fs.readFile(inputPath2, 'utf-8')
        .then((data2) => fs.writeFile(outputPath, `${data1}${data2}`));
      return promise;
    });
  return result; // это промис
};

/* Хорошая новость — код стал понятнее и уменьшился в объёме.
К тому же, из него целиком ушла обработка ошибок, так как промисы обрабатывают
их автоматически и, если вызывающий код захочет их перехватывать,
то сделает это самостоятельно через метод catch(). Но есть и плохая новость —
код всё ещё структурирован, как колбеки, "лесенкой".
В этом коде не учитывается свойство промисов, связанное с возвратом из then().
Напомню, что, если из колбека возвращается промис, то дальнейшая цепочка
then/catch продолжается от него. */

const unionFiles2 = (inputPath1, inputPath2, outputPath) => {
  const result = fs.readFile(inputPath1, 'utf-8')
    .then((data1) => fs.readFile(inputPath2, 'utf-8'))
    // then ниже берется от промиса readFile
    .then((data2) => fs.writeFile(outputPath, `${data1}${data2}`)); // ReferenceError: data1 is not defined
  return result;
};

// unionFiles2(
//   'src/hexlet/17 Asynchronous programming/test files/file1.txt',
//   'src/hexlet/17 Asynchronous programming/test files/file2.txt',
//   'src/hexlet/17 Asynchronous programming/test files/superNew-file.txt',
// ); // ReferenceError: data1 is not defined
/*
^
|
Эта версия совсем плоская, именно к такому коду нужно стремиться в промисах.
Но она таит в себе одну проблему. Если где-то в цепочке ниже нужны данные,
которые были получены сверху, то придется протаскивать их сквозь всю цепочку.
В примере выше это результат чтения первого файла. Переменная data1 недоступна в том месте,
где происходит запись в файл. Основной выход из данной ситуации — создание переменных,
через которые данные будут прокинуты дальше: */

const unionFiles3 = (inputPath1, inputPath2, outputPath) => {
  let data1;
  return fs.readFile(inputPath1, 'utf-8')
    .then((content) => {
      data1 = content;
    })
    .then(() => fs.readFile(inputPath2, 'utf-8'))
    .then((data2) => fs.writeFile(outputPath, `${data1}${data2}`));
};

unionFiles3(
  'src/hexlet/17 Asynchronous programming/test files/file1.txt',
  'src/hexlet/17 Asynchronous programming/test files/file2.txt',
  'src/hexlet/17 Asynchronous programming/test files/superNew-file.txt',
);


/* Контроль асинхронных операций */
/* Частая ошибка при работе с промисами – потеря контроля.
Посмотрите на немного измененный код из примеров выше: */

// Чего здесь не хватает?
const unionFiles4 = (inputPath1, inputPath2, outputPath) => {
  const result = fs.readFile(inputPath1, 'utf-8')
    .then((data1) => {
      const promise = fs.readFile(inputPath2, 'utf-8')
        .then((data2) => fs.writeFile(outputPath, `${data1}${data2}`));
    });
  return result;
};

/* Этот код хоть и сработает во многих ситуациях, все же содержит серьезную ошибку.
Промис внутри константы promise не возвращается наружу. Цепочка промисов прервалась.
Любая ошибка в этом промисе пройдет незамеченной для внешнего кода.
Нет гарантии что этот промис вообще успеет выполниться к тому моменту,
когда этого будет ожидать вызывающий код. */


/* Динамическая цепочка */
/* Иногда количество асинхронных операций заранее неизвестно,но они должны выполняться
строго по очереди. Эту задачу можно решить используя циклы или свертку.
Какой бы способ не был выбран, сам принцип построения цепочки не поменяется.
Цепочка промисов это всегда then().then().then().... */


const filePaths = [
  'src/hexlet/17 Asynchronous programming/test files/file1.txt',
  'src/hexlet/17 Asynchronous programming/test files/file2.txt',
  'src/hexlet/17 Asynchronous programming/test files/file3.txt',
];
// Эта функция принимает на вход необязательное значение,
// которое появится в promise.then((<тут>) => ...)
// Начальное значение в данном случае – массив,
// в котором накапливаются данные из файлов
const initPromise = Promise.resolve([]);

// В then отдается функция, а не ее вызов!
const promise = filePaths.reduce((acc, path) => {
  // Аккумулятор – всегда промис внутри которого массив с содержимым файлов
  const newAcc = acc.then((contents) =>
    // Читаем файл и добавляем его данные в аккумулятор
    fs.readFile(path, 'utf-8').then((data) => contents.concat(data)));
  return newAcc;
}, initPromise);

// Если надо, продолжаем обработку
// или обрабатываем все данные полученные из файлов
promise.then((contents) => console.log(contents));
