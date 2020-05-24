/* Вспомним нашу задачу по объединению двух файлов. Вот её код: */

import { promises as fs } from 'fs';

const src1 = 'src/hexlet/17 Asynchronous programming/test files/file1.txt';
const src2 = 'src/hexlet/17 Asynchronous programming/test files/file2.txt';
const srcBad = 'src/hexlet/17 Asynchronous programming/test files/file222.txt';
const dest = 'src/hexlet/17 Asynchronous programming/test files/Async-Await-file.txt';

const unionFilesOnPromise = (inputPath1, inputPath2, outputPath) => {
  let data1;
  return fs.readFile(inputPath1, 'utf-8')
    .then((content) => {
      data1 = content;
    })
    .then(() => fs.readFile(inputPath2, 'utf-8'))
    .then((data2) => fs.writeFile(outputPath, `${data1}${data2}`));
};

/* А теперь посмотрим на этот же код с использованием async/await. Подчеркну, что
async/await работает с промисами:
 */
const unionFiles = async (inputPath1, inputPath2, outputPath) => {
  // Очень важный момент. Так же как и в примере выше, эти запросы выполняются
  // строго друг за другом (хотя при этом не блокируется программа, это значит,
  // что другой код тоже может выполняться во время этих запросов)
  // подряд идущие await в рамках одной функции всегда выполняются строго друг за другом. 
  const data1 = await fs.readFile(inputPath1, 'utf-8');
  const data2 = await fs.readFile(inputPath2, 'utf-8');
  await fs.writeFile(outputPath, `${data1}${data2}`);
};
// unionFiles(src1, src2, dest);

/* А что с обработкой ошибок? Теперь достаточно поставить обычные try/catch и ошибки
будут отловлены! */
const unionFiles2 = async (inputPath1, inputPath2, outputPath) => {
  try {
    const data1 = await fs.readFile(inputPath1, 'utf-8');
    const data2 = await fs.readFile(inputPath2, 'utf-8');
    await fs.writeFile(outputPath, `${data1}${data2}`);
  } catch (e) {
    console.log(e);
    // снова бросаем, потому что вызывающий код должен иметь возможность отловить ошибку
    throw e;
  }
};
// unionFiles2(src1, srcBad, dest);


/* Однако, при параллельном выполнении промисов не обойтись без функции Promise.all: */
const unionFilesParallel = async (inputPath1, inputPath2, outputPath) => {
    // Эти вызовы начинают чтение почти одновременно и не ждут друг друга
    const promise1 = fs.readFile(inputPath1, 'utf-8');
    const promise2 = fs.readFile(inputPath2, 'utf-8');
    // Теперь дожидаемся когда они оба завершатся
    // Данные можно сразу разложить
    const [data1, data2] = await Promise.all([promise1, promise2]);
    await fs.writeFile(outputPath, `${data1}${data2}`);
};
// unionFilesParallel(src1, src2, dest);

/* with try/catch */
const unionFilesParallelTryCatch = async (inputPath1, inputPath2, outputPath) => {
  try {
    // Эти вызовы начинают чтение почти одновременно и не ждут друг друга
    const promise1 = fs.readFile(inputPath1, 'utf-8');
    const promise2 = fs.readFile(inputPath2, 'utf-8');
    // Теперь дожидаемся когда они оба завершатся
    // Данные можно сразу разложить
    const [data1, data2] = await Promise.all([promise1, promise2]);
    await fs.writeFile(outputPath, `${data1}${data2}`);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
unionFilesParallelTryCatch(src1, src2, dest);

console.log('***** string from main call stack *****');
