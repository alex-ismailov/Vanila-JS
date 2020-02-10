/* evevnFibs строит список всех четных чисел Фибоначчи Fib(k), где k меньше
или равно данного целого числа n */

import {
  l, isEmpty, head, tail, cons, toString as listToString,
} from '@hexlet/pairs-data';

const isEven = (num) => num % 2 === 0;

const fib = (num) => {
  const iter = (a, b, count) => {
    if (count === 0) {
      return b;
    }
    return iter((a + b), a, (count - 1));
  };
  return iter(1, 0, num);
};

const evenFibs = (n) => {
  const next = (k) => {
    if (k > n) {
      return l();
    }
    const f = fib(k);
    if (isEven(f)) {
      return cons(f, next(k + 1));
    }
    return next(k + 1);
  };
  return next(0);
};

/* testing */
console.log(listToString(evenFibs(15)));
