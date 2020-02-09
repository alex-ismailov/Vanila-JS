import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from '@hexlet/pairs-data';

/* linear recursive process */
const length = (list) => {
  if (isEmpty(list)) {
    return 0;
  }
  return 1 + length(tail(list));
};

/* linear iterative process */
const length_2 = (list) => {
  const iter = (list, acc) => {
    if (isEmpty(list)) {
      return acc;
    }
    return iter(tail(list), acc + 1);
  };
  return iter(list, 0)
};

/* cicle way */
const length_3 = (list) => {
  let length = 0;
  while(!isEmpty(list)) {
    list = tail(list);
    length += 1;
  }
  return length;
};

/* testing */
// const list = l(10, 20, 30, 40, 50);
// console.log(length(list)); // 5
// console.log(length_2(list)); // 5
// console.log(length_3(list)); // 5

export { length };
