/* Упражнение 2.18.
Определите процедуру reverse, которая принимает список как аргумент и
возвращает список, состоящий из тех же элементов в обратном порядке:
(reverse (list 1 4 9 16 25))
(25 16 9 4 1) */

import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from '@hexlet/pairs-data';

const reverse = (list) => {
  const iter = (curr, acc) => (
    isEmpty(curr)
      ? acc
      : iter(tail(curr), cons(head(curr), acc))
  );
  return iter(list, l());
};

/* testing */
const list = l(1, 4, 9, 16, 25); 
console.log(listToString(reverse(list)));
