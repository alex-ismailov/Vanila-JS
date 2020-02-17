import {
  l, head, tail,
} from '@hexlet/pairs-data';

const plusCurried = (x) => (y) => x + y;

const brooks = (fn, items) => fn(head(items))(head(tail(items)));

/* testing */
console.log(brooks(plusCurried, l(3, 4)));
console.log(brooks(plusCurried, l(5, 5)));
