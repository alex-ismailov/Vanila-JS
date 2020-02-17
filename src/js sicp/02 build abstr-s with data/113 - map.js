/* Map берет в качестве аргументов процедуру от одного аргумента и список,
а возвращает список результатов, полученных применением процедуры к
каждому элементу списка. */
import {
  l, isEmpty, head, tail, cons, reverse, toString as listToString,
} from '@hexlet/pairs-data';

const map = (fn, items) => (
  isEmpty(items)
    ? l()
    : cons(fn(head(items)), map(fn, tail(items)))
);

/* version 1 */
/* linear recursive process */
const lMap = (fn, list) => {
  if (isEmpty(list)) {
    return l();
  }
  return cons(
    fn(head(list)),
    lMap(fn, tail(list)),
  );
};

/* version 2 */
/* linear iterative process */
const lMap2 = (fn, list) => {
  const iter = (currList, acc) => {
    if (isEmpty(currList)) {
      return reverse(acc);
    }
    return iter(tail(currList), cons(fn(head(currList)), acc));
  };
  return iter(list, l());
};

/* version 3 */
/* using while cicle */
const lMap3 = (fn, list) => {
  let acc = l();
  let pointer = list;
  while (!isEmpty(pointer)) {
    acc = cons(fn(head(pointer)), acc);
    pointer = tail(pointer);
  }
  return reverse(acc);
};

/* testing */
const list = l(1, 2, 3, 4, 5);
const square = (num) => num ** 2;
const cube = (num) => num ** 3;

console.log(listToString(lMap(square, list)));
console.log(listToString(lMap(cube, list)));
console.log(listToString(lMap((n) => n ** 4, list)));

console.log(listToString(lMap2(square, list)));
console.log(listToString(lMap2(cube, list)));
console.log(listToString(lMap2((n) => n ** 4, list)));

console.log(listToString(lMap3(square, list)));
console.log(listToString(lMap3(cube, list)));
console.log(listToString(lMap3((n) => n ** 4, list)));

const mappedItems = map((curr) => curr * 10, list);
console.log(listToString(mappedItems));
