import {
  l, isEmpty, head, tail, toString as listToString, isList,
} from '@hexlet/pairs-data';

const isOdd = (n) => n % 2 !== 0;
const square = (n) => n ** 2;

// const sumOddSquares = (tree) => {
//   if (isEmpty(tree)) {
//     return 0;
//   }
//   if (isList(head(tree))) {
//     return sumOddSquares(head(tree)) + sumOddSquares(tail(tree));
//   }
//   const res = isOdd(head(tree)) ? square(head(tree)) : 0;
//   return res + sumOddSquares(tail(tree));
// };

const sumOddSquares = (tree) => (
  isEmpty(tree)
    ? 0
    : isList(head(tree))
      ? sumOddSquares(head(tree)) + sumOddSquares(tail(tree))
      : (isOdd(head(tree)) ? square(head(tree)) : 0)
        +
        sumOddSquares(tail(tree))
);

/* testing */
const data = l(1, 2, l(3, l(4, 5)));
console.log(listToString(sumOddSquares(data)));
