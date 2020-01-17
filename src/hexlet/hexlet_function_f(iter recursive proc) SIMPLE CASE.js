/*
* Simple case
* Функция f задана таким образом:
* f(n) = n if n < 3, and f(n) = f(n - 1) + f(n - 2) + f(n - 3) if n >= 3.
* Cоздайте процедуру f, которая вычисляет f с помощью рекурсивного процесса или 
* итеративного процесса.
*
* Iter recursive process
*/

const function_f = (n) => {
  if (n <= 1) {
    return n;
  }
  let a = 2;
  let b = 1;
  let c = 0;
  for (let aa = 0, bb = 0, cc = 0, count = n - 2; count > 0; count -= 1) {
    aa =  (a + b + c);
    bb = a;
    cc = b;
    a = aa;
    b = bb;
    c = cc;
  }
  return a;
};

// testing function_f
const MAX = 10;
for (let i = 0; i <= MAX; i += 1) {
  console.log(`function_f(${i}) = ${function_f(i)}`);
}
