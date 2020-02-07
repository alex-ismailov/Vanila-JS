/* Упражнение 2.25.
Укажите комбинации car и cdr, которые извлекают 7 из следующих списков:
(1 3 (5 7) 9)
((7))
(1 (2 (3 (4 (5 (6 7)))))) */

import {
  l, head, tail, toString as listToString,
} from '@hexlet/pairs-data';

const list1 = l(1, 3, l(5, 7), 9);
const list2 = l(l(7));
const list3 = l(1, l(2, l(3, l(4, l(5, l(6, 7))))));

/* testing */
console.log(listToString(list1));
console.log(listToString(list2));
console.log(listToString(list3));

console.log(head(tail(head(tail(tail(list1))))));
console.log(head(head(list2)));
console.log(head(tail(head(tail(head(tail(head(tail(head(tail(head(tail(list3)))))))))))));
