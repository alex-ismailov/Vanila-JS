import fs from 'fs';

// try {
//   // Пытаемся читать директорию, а это ошибка
//   fs.readFile('./directory', 'utf-8', () => {
//     callUndefinedFunction();
//   });
// } catch (e) {
//   console.log('error!')
// }
/* Так как try/catch работает только с кодом из текущего стека вызовов, то он не сможет
перехватить то что вызвалось в другом стеке. Поэтому мы не увидим сообщения error!,
хотя сама ошибка на экране появится: */

try {
  // Пытаемся читать директорию, а это ошибка
  fs.readFile('./directory', 'utf-8', () => {
    console.log('finished!');
  });
} catch (e) {
  console.log('error!');
}
// => finished

/* Асинхронные функции всегда имеют дело с внешней средой (операционной системой).
Это значит, что любая асинхронная функция потенциально может завершиться с ошибкой.
Причём не важно возвращает ли она какие-то данные или нет, ошибка может возникнуть
всегда. Именно по этой причине колбеки всех асинхронных функций первым параметром
принимают ошибку err и, соответственно, проверять её наличие придётся руками.
Если пришёл null, то ошибки нет, если не null — есть. Это очень важное соглашение,
которого придерживаются не только разработчики стандартной библиотеки, но и все
разработчики сторонних решений. */

fs.readFile('./directory', 'utf-8', (err, data) => {
  // Любые ошибки чтения файла: доступ, отсутствие файла, директория вместо файла
  // null неявно приводится к false, поэтому достаточно такой проверки, 
  // любой другой ответ трактуется как true
  if (err) {
    console.log('error!');
    return; // guard expression
  }

  console.log('finished!')
});

console.log('------------------------');
fs.readFile('./first', 'utf-8', (error1, data1) => {
  if (error1) {
    console.log('error in first file')
    // return;
  }
  fs.readFile('./second', 'utf-8', (error2, data2) => {
    if (error2) {
      console.log('error in second file')
      // return;
    }
    fs.writeFile('./new-file', `${data1}${data2}`, (error3, data3) => {
      if (error3) {
        console.log('error during writing')
        return;
      }
      console.log('finished!');
    });
  });
});

/* Тот же самый код, помещённый внутрь функции, выглядит немного по-другому.
Как только происходит ошибка, мы вызываем основной колбек и отдаём туда ошибку.
Если ошибка не возникла, то мы всё равно вызываем исходный колбек и передаём туда null.
Вызывать его обязательно, иначе внешний код не дождётся окончания операции.
Следующие вызовы больше не выполняются: */

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null); // не забываем последний успешный вызов
      });
    });
  });
};

console.log('--------------------');
unionFiles('./file1', './file1', './', (err, data) => console.log(data));

/* Последний вызов можно сократить. Если в самом конце не было ошибки, то
вызов cb(error3) отработает так же, как и cb(null), а значит, весь код
последнего колбека можно свести к вызову cb(error3): */

// fs.writeFile(outputPath, `${data1}${data2}`, cb);
// что равносильно fs.writeFile(outputPath, `${data1}${data2}`, error3 => cb(error3));
