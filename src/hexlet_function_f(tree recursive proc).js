/*
* Функция f задана таким образом:
* f(n) = n if n < 3, and f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3) if n >= 3.
* В файле function_f.rkt создайте процедуру f, которая вычисляет f с помощью рекурсивного процесса или 
* итеративного процесса.
*
* Tree recursive process
*/

const function_f = (n) => {
  if (n < 3) {
    return n;
  }
  if (n >= 3) {
    return function_f(n - 1) + 2 * function_f(n - 2) + 3 * function_f(n - 3);
  }
};

// function_f testing
const params = [1, 2, 3, 4, 5, 6, 7];
params.forEach((param) => {
  console.log(`-------------------\nfunction_f(${param}) = ${function_f(param)}`);
});