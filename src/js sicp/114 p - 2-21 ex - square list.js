/* Упражнение 2.21.
Процедура square-list принимает в качестве аргумента список чисел и
возвращает список квадратов этих чисел.
(square-list (list 1 2 3 4))
(1 4 9 16)
Перед Вами два различных определения square-list. Закончите их,
вставив пропущенные выражения:

(define (square-list items)
  (if (null? items)
    nil
    (cons h??i h??i)))

(define (square-list items)
  (map h??i h??i))
*/

import {
  l, isEmpty, head, tail, cons, toString as listToString,
} from '@hexlet/pairs-data';

import { lMap } from '../myLib/lmap';

/* version 1 */
const squareList = (items) => {
  if (isEmpty(items)) {
    return l();
  }
  return cons(head(items) ** 2, squareList(tail(items)));
};

/* version 2 */
const squareList2 = (items) => {
  return lMap((n) => n ** 2, items);
};

/* testing */
const list = l(1, 2, 3, 4, 5);
console.log(listToString(squareList(list)));
console.log(listToString(squareList2(list)));
