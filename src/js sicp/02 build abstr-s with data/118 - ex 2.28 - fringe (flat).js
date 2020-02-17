import { l, isEmpty, isList, cons, head, tail, concat, reverse, toString as listToString } from "@hexlet/pairs-data";

/* Упражнение 2.28.
Напишите процедуру fringe, которая берет в качестве аргумента
дерево (представленное в виде списка) и возвращает список,
элементы которого — все листья дерева, упорядоченные слева направо.
Например:
(define x (list (list 1 2) (list 3 4)))

(fringe x)
(1 2 3 4)

(fringe (list x x))
(1 2 3 4 1 2 3 4)
*/

const fringe = (list) => (
  isEmpty(list)
    ? l()
    : ! isList(head(list))
      ? cons(head(list), fringe(tail(list)))
      : concat(fringe(head(list)), fringe(tail(list)))
);

/* testing */
const list = l(l(1, 2), l(3, 4));
console.log(listToString(fringe(list)));

const list2 = l(l(1, 2), 3, 4, l(5, 6));
console.log(listToString(fringe(list2)));

const list3 = l(l(1, 2), l(3, 4, l(5, l(6, l(7, 8, l(9))))));
console.log(listToString(fringe(list3)));
