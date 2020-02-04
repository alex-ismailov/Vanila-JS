import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from '@hexlet/pairs-data';

/* linear recursive process */
const append = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }
  return cons(head(list1), append(tail(list1), list2));
};

/* linear iterative process */
// ??? How to do it ???
// const append_2 = (list1, list2) => {
//   const iter = (currList, acc) => {
//     if (isEmpty(currList)) {
//       return cons(acc, list2);
//     }
//     return iter(tail(currList), cons(acc, l()));
//   };
//   return iter(list1, cons(head(list1), ));
// };

const append_3 = (list1, list2) => {
  let args = [];
  while (!isEmpty(list1)) {
    args.push(head(list1));
    list1 = tail(list1);
  }
  while (!isEmpty(list2)) {
    args.push(head(list2));
    list2 = tail(list2);
  }
  return l(...args);
};


/* testing */
const list1 = l(10, 20, 30);
const list2 = l(40, 50, 60);
let newList = append(list1, list2);
// console.log(listToString(newList));
// newList = append_2(list1, list2);
// console.log(listToString(newList));

console.log(listToString(append_3(list1, list2)));
console.log(listToString(l(list1, list2)));
