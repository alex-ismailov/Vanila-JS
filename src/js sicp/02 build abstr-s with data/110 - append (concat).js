import {
  l, isEmpty, head, tail, cons, toString as listToString,
} from '@hexlet/pairs-data';

/* linear recursive process */
const append = (list1, list2) => (
  isEmpty(list1)
    ? list2
    : cons(head(list1), append(tail(list1), list2))
);

const append2 = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }
  return cons(head(list1), append(tail(list1), list2));
};

// const append3 = (list1, list2) => {
//   const args = [];
//   while (!isEmpty(list1)) {
//     args.push(head(list1));
//     list1 = tail(list1);
//   }
//   while (!isEmpty(list2)) {
//     args.push(head(list2));
//     list2 = tail(list2);
//   }
//   return l(...args);
// };


/* testing */
const list1 = l(10, 20, 30);
const list2 = l(40, 50, 60);

console.log(listToString(append(list1, list2)));
console.log(listToString(append2(list1, list2)));
// console.log(listToString(append3(list1, list2)));
