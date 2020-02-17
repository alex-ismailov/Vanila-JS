/* Упражнение 2.27.
Измените свою процедуру reverse из упражнения 2.18 так,
чтобы получилась процедура deepreverse, которая принимает список в
качестве аргумента и возвращает в качестве значения список, где
порядок элементов обратный и подсписки также обращены. Например:

(define x (list (list 1 2) (list 3 4)))
x
((1 2) (3 4))

(reverse x)
((3 4) (1 2))

(deep-reverse x)
((4 3) (2 1))
 */

import { l, isEmpty, head, tail, cons, isList, concat as append, filter, toString as listToString } from '@hexlet/pairs-data';
import { reverse } from '../../myLib/seqlib';

const reverseIt = (elem) => (
  isList(elem)
    ? deepReverse(elem)
    : elem
);

const deepReverse = (list) => {
  const iter = (rest, acc) => (
    isEmpty(rest)
      ? acc
      : iter(tail(rest), cons(reverseIt(head(rest)), acc))
  );
  return iter(list, l());
};
/* testing */
const list = l(l(1, 2), l(3, 4));
const list2 = l(l(1, 2, l(5, 6)), l(3, 4));

console.log(listToString(list));
console.log(listToString(deepReverse(list)));
console.log(listToString(list2));
console.log(listToString(deepReverse(list2)));
