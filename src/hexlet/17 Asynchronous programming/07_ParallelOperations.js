import fs from 'fs';

const state = {
  count: 0,
  results: [],
};

const tryWriteNewFile = () => {
  if (state.count !== 2) {
    return;
  }
};
//   fs.writeFile('./src/hexlet/17 Asynchronous programming/test files/new-file.txt', state.results.join(''), (error) => {
//     if (error) {
//       return;
//     }
//     console.log('finished!');
//   });
// };

// console.log('first reading was started');
// fs.readFile('src/hexlet/17 Asynchronous programming/test files/file1.txt', 'utf-8', (err1, data1) => {
//   console.log('first callback1');
//   if (err1) {
//     return;
//   }
//   state.count += 1;
//   state.results[0] = data1;
//   tryWriteNewFile();
// });

// console.log('second reading was started');
// fs.readFile('src/hexlet/17 Asynchronous programming/test files/file2.txt', 'utf-8', (error2, data2) => {
//   console.log('second callback');
//   if (error2) {
//     return;
//   }
//   state.count += 1;
//   state.results[1] = data2;
//   tryWriteNewFile();
// });

/* ------------------------------------------ */

/* Каждый раз писать подобный код очень утомительно, поэтому лучше воспользоваться
библиотекой под названием async, */

import async from 'async';

async.map([
  'src/hexlet/17 Asynchronous programming/test files/file1.txt',
  'src/hexlet/17 Asynchronous programming/test files/file2.txt'
  ], fs.readFile, (err1, results) => {
    if (err1) {
      return;
    }
    fs.writeFile(
      './src/hexlet/17 Asynchronous programming/test files/new-file-async.txt',
      results.join(''), (err2) => {
        if (err2) {
          return;
        }
        console.log('finished!');
    });
  });