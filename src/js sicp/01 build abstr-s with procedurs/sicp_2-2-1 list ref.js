import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from '@hexlet/pairs-data';

const list = l(10, 20, 30, 40, 50);

/* functional way */
const listRef = (list, n) => {
  if (isEmpty(list)) {
    return false;
  }
  if (n === 0) {
    return head(list);
  }
  return listRef(tail(list), n - 1);
};

/* cicle way */
const listRef_2 = (list, n) => {
  for (let i = 0; i < n; i += 1) {
    if (isEmpty(list)) {
      return false;
    }
    list = tail(list);
  }
  return head(list);
};


/* testing */
// console.log(listToString(list));
console.log(listRef(list, 0)); // 10
console.log(listRef(list, 4)); // 50
console.log(listRef(list, 10)); // false


console.log(listRef_2(list, 0)); // 10
console.log(listRef_2(list, 4)); // 50
console.log(listRef(list, 10)); // false
