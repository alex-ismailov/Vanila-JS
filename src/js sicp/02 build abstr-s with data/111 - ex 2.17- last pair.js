/* Упражнение 2.17.
Определите процедуру last-pair, которая возвращает список, содержащий
только последний элемент данного (непустого) списка.
(last-pair (list 23 72 149 34))
---> (34) */

import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from '@hexlet/pairs-data';

const lastPair = (list) => {
  const iter = (list, acc) => {
    if (isEmpty(list)) {
      return acc;
    }
    return iter(tail(list), head(list));
  };
  return iter(list, head(list));
};

/* testing */
const list = l(23, 72, 149, 34); 
console.log(listToString(lastPair(list)));
