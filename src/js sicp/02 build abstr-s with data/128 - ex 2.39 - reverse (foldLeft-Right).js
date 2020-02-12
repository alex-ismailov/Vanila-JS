import {
  l, isEmpty, head, tail, cons, concat, toString as listToString,
} from '@hexlet/pairs-data';
import { foldLeft, foldRight } from '../../myLib/higherOrderFunctions';

/* Упражнение 2.39.
Закончите следующие определения reverse (упражнение 2.18) в терминах процедур
foldright и fold-left из упражнения 2.38:

(define (reverse sequence)
  (fold-right (lambda (x y) <??>) nil sequence))

(define (reverse sequence)
  (fold-left (lambda (x y) <??>) nil sequence)) */

// const foldRight = (fn, acc, sequence) => {
//   if (isEmpty(sequence)) {
//     return acc;
//   }
//   return fn(head(sequence), foldRight(fn, acc, tail(sequence)));
// };

/* fold-left */
const reverse1 = (sequence) => {
  return foldRight((curr, acc) => concat(acc, l(curr)), l(), sequence);
};

/* fold-left */
const reverse2 = (sequence) => {
  return foldLeft((curr, acc) => cons(curr, acc), l(), sequence);
};

/* testing */
const list = l(1, 2, 3, 4, 5);
console.log(listToString(reverse1(list)));
console.log(listToString(reverse2(list)));
