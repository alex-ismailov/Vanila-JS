const data = [16, 64, 4];
const data2 = data.map(Math.sqrt); // [4, 8, 2]
const predicate = (v) => unkonwn > 2;
const data3 = data2.filter(predicate); // ReferenceError
// file:///home/smile/code/Vanila-JS/src/hexlet/17%20Asynchronous%20programming/02_callStack.js:3
// const predicate = (v) => unkonwn > 2;
//                                  ^

// ReferenceError: unkonwn is not defined
//     at predicate (file:///home/smile/code/Vanila-JS/src/hexlet/17%20Asynchronous%20programming/02_callStack.js:3:34)
//     at Array.filter (<anonymous>)
//     at file:///home/smile/code/Vanila-JS/src/hexlet/17%20Asynchronous%20programming/02_callStack.js:4:21
//     at ModuleJob.run (internal/modules/esm/module_job.js:110:37)
//     at async Loader.import (internal/modules/esm/loader.js:176:24)