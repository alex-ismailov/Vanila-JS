import {
  l, isEmpty, head, tail, cons, reverse, toString as listToString,
} from '@hexlet/pairs-data';

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

export { lMap, lMap2, lMap3 };
