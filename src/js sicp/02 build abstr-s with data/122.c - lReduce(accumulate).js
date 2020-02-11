import { 
  l, head, tail, isEmpty, toString as listToString, cons,
} from '@hexlet/pairs-data';

// const accumulate = (operator, acc, sequence) => {
//   if (isEmpty(sequence)) {
//     return acc;
//   }
//   return head(sequence) operator accumulate(tail(sequence));
// };

/* Адаптировал метод accumulate под JS и переименовал его в lReduce */

const lReduce = (cb, acc, sequence) => {
  if (isEmpty(sequence)) {
    return acc;
  }
  return lReduce(cb, cb(head(sequence), acc), tail(sequence));
};

/* testing */
const list = l(1, 2, 3, 4, 5);
console.log(lReduce((curr, acc) => acc + curr, 0, list));
console.log(lReduce((curr, acc) => acc + curr ** 2, 0, list));

console.log(lReduce((curr, acc) => acc * curr, 1, list));
console.log(listToString(lReduce((curr, acc) => cons(curr, acc), l(), list)));

