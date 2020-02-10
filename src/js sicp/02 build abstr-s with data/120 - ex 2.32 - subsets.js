import {
  l, isEmpty, isList, head, tail, cons, concat, toString as listToString,
} from '@hexlet/pairs-data';
import { lMap } from '../../myLib/lmap';

/* Упражнение 2.32.
Множество можно представить как список его различных элементов, а
множество его подмножеств как список списков. Например, если множество равно:
(1 2 3),
то множество его подмножеств равно:
(() (3) (2) (2 3) (1) (1 3) (1 2) (1 2 3)).

Закончите следующее определение
процедуры, которая порождает множество подмножеств и дайте ясное объяснение,
почему она работает:
(define (subsets s)
  (if (null? s)
    (list nil)
    (let ((rest (subsets (cdr s))))
      (append rest (map h??i rest))))) */

const subsets = (set) => {
  if (isEmpty(set)) {
    return l(l());
  }
  const rest = subsets(tail(set));
  return concat(rest, lMap((ss) => cons(head(set), ss), rest))
};

/* testing */
const data = l(1, 2, 3);
console.log(listToString(subsets(data)));
