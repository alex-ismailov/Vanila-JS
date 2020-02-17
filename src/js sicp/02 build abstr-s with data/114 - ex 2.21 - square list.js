import {
  l, isEmpty, head, tail, cons, toString as listToString,
} from '@hexlet/pairs-data';

import { lMap } from '../../myLib/seqlib';

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

const squareList = (items) => (
  isEmpty(items)
    ? l()
    : cons(head(items) ** 2, squareList(tail(items)))
);

const squareList2 = (items) => lMap((curr) => curr ** 2, items);

/* testing */
const list = l(1, 2, 3, 4, 5);
console.log(listToString(squareList(list)));
console.log(listToString(squareList2(list)));
