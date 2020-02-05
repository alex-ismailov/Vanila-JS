/* Упражнение 2.20.
напишите процедуру same-parity, которая принимает одно или
более целое число и возвращает список всех тех аргументов,
у которых четность та же, что у первого аргумента.
Например:
(same-parity 1 2 3 4 5 6 7)
(1 3 5 7)
(same-parity 2 3 4 5 6 7)
(2 4 6) */

import {
  l, isEmpty, head, tail, cons, reverse, toString as listToString,
} from '@hexlet/pairs-data';

const isEven = (num) => num % 2 === 0;
const isSuitable = (first, curr) => isEven(first) === isEven(curr);

/* version 1 - from end */
/* linear iterative process */
const sameParity = (...args) => {
  const list = l(...args);
  const first = head(list);
  const iter = (currList, acc) => {
    if (isEmpty(currList)) {
      return reverse(acc);
    }
    if (isSuitable(first, head(currList))) {
      return iter(tail(currList), cons(head(currList), acc));
    }
    return iter(tail(currList), acc);
  };
  return iter(list, l());
};

/* version 2 - from end */
/* using while cicle */
const sameParity3 = (...args) => {
  const list = l(...args);
  const first = head(list);
  let pointer = list;
  let acc = l();
  while(!isEmpty(pointer)) {
    if (isSuitable(first, head(pointer))) {
      acc = cons(head(pointer), acc);
    }
    pointer = tail(pointer);
  }
  return reverse(acc);
};

/* version 3 - from begin */
/* linear recursive process */
const sameParity2 = (...args) => {
  const list = l(...args);
  if (isEmpty(list)) {
    return l();
  }
  const first = head(list);
  const iter = (currList) => {
    if (isEmpty(currList)) {
      return l();
    }
    if (isSuitable(first, head(currList))) {
      return cons(head(currList), iter(tail(currList)));
    }
    return iter(tail(currList));
  };
  return cons(first, iter(tail(list)));
};

/* testing */
// console.log(listToString(sameParity(1, 2, 3, 4, 5, 6, 7))); // (1, 3, 5, 7)
// console.log(listToString(sameParity(2, 3, 4, 5, 6, 7))); // (2, 4, 6)

// console.log(listToString(sameParity2(1, 2, 3, 4, 5, 6, 7))); // (1, 3, 5, 7)
// console.log(listToString(sameParity2(2, 3, 4, 5, 6, 7))); // (2, 4, 6)

console.log(listToString(sameParity3(1, 2, 3, 4, 5, 6, 7))); // (1, 3, 5, 7)
console.log(listToString(sameParity3(2, 3, 4, 5, 6, 7))); // (2, 4, 6)
