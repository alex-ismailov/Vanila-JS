/* Упражнение 2.26.
Допустим, мы определили x и y как два списка:
(define x (list 1 2 3))
(define y (list 4 5 6))
Какой результат напечатает интерпретатор в ответ на следующие выражения:
*/
import { l, isEmpty, head, tail, cons, concat as append, filter, toString as listToString } from '@hexlet/pairs-data';

const x = l(1, 2, 3);
const y = l(4, 5, 6);

/* testing */
console.log(listToString(append(x, y))); // --> (1, 2, 3, 4, 5, 6)
console.log(listToString(cons(x, y))); // --> ((1, 2, 3), 4, 5, 6)
console.log(listToString(l(x, y))); // --> ((1, 2, 3), (4, 5, 6))
// (cons x y)
// (list x y)