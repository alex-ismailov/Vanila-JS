import { l, isEmpty, tail } from '@hexlet/pairs-data';

const length = (items) => (
  isEmpty(items)
    ? 0
    : 1 + length(tail(items))
);

/* linear recursive process */
const length1 = (list) => {
  if (isEmpty(list)) {
    return 0;
  }
  return 1 + length(tail(list));
};

/* linear iterative process */
const length2 = (list) => {
  const iter = (curr, acc) => {
    if (isEmpty(curr)) {
      return acc;
    }
    return iter(tail(curr), acc + 1);
  };
  return iter(list, 0);
};

/* cicle way */
const length3 = (list) => {
  let len = 0;
  let curr = list;
  while (!isEmpty(curr)) {
    curr = tail(curr);
    len += 1;
  }
  return len;
};

/* testing */
const list = l(10, 20, 30, 40, 50);
console.log(length(list)); // 5

console.log(length1(list)); // 5
console.log(length2(list)); // 5
console.log(length3(list)); // 5
