import {
  l, isEmpty, head, tail, cons, toString as listToString,
} from '@hexlet/pairs-data';
import { foldRight } from '../../myLib/higherOrderFunctions';

/* Упражнение 2.38.
Процедура accumulate известна также как fold-right (правая свертка), поскольку она
комбинирует первый элемент последовательности с результатом комбинирования всех
элементов справа от него. Существует также процедура fold-left (левая свертка),
которая подобна fold-right, но комбинирует элементы в противоположном направлении:

(define (fold-left op initial sequence)
  (define (iter result rest)
    (if (null? rest)
      result
      (iter (op result (car rest))
            (cdr rest))))
  (iter initial sequence))

Каковы значения следующих выражений?
(fold-right / 1 (list 1 2 3))
(fold-left / 1 (list 1 2 3))
(fold-right list nil (list 1 2 3))
(fold-left list nil (list 1 2 3)) */

/* Не уверен, что это правильное решение */

const foldLeft = (fn, initial, sequence) => {
  const iter = (acc, rest) => {
    if (isEmpty(rest)) {
      return acc;
    }
    return iter(fn(head(rest), acc), tail(rest));
  };
  return iter(initial, sequence);
};

/* testing */
const list = l(1, 2, 3, 4, 5);
console.log(listToString(foldRight((acc, curr) => acc / curr, 1, list)));
console.log(listToString(foldLeft((acc, curr) => acc / curr, 1, list)));

console.log(listToString(foldRight((acc, curr) => l(acc, curr), l(), list)));
console.log(listToString(foldLeft((acc, curr) => l(acc, curr), l(), list)));


console.log(listToString(foldRight((acc, curr) => cons(acc, curr), l(), list)));
console.log(listToString(foldLeft((acc, curr) => cons(acc, curr), l(), list)));
