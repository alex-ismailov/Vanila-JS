import {
  l, head, tail, isEmpty, cons, toString as listToString,
} from '@hexlet/pairs-data';

const scaleList = (items, factor) => (
  isEmpty(items)
    ? l()
    : cons(head(items) * factor, scaleList(tail(items), factor))
);

/* testing */
const data = l(1, 2, 3, 4, 5);
console.log(listToString(scaleList(data, 2)));
