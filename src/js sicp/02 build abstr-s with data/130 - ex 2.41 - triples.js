import {
  l, toString as listToString, isEmpty,
} from '@hexlet/pairs-data';
import {
  flatMap, lMap, enumerateInterval, lFilter, foldRight,
} from '../../myLib/seqlib';

const uniqueTriples = (n) => (
  flatMap((i) => flatMap(
    (j) => lMap((k) => l(i, j, k),
      enumerateInterval(1, j - 1)),
    enumerateInterval(1, i - 1),
  ),
  enumerateInterval(1, n))
);

const triplesSum = (s) => (
  lFilter((triple) => (s === foldRight((curr, acc) => acc + curr, 0, triple)),
    uniqueTriples(6))
);

/* testing */
for (let i = 0; i < 10000; i += 1) {
  const res = triplesSum(i);
  if (!isEmpty(res)) {
    console.log(`i = ${i}, triples: ${listToString(res)}`);
  }
}

// const testing = (curr, end) => {
//   if (curr >= end) {
//     return ;
//   }
//   const res = triplesSum(curr);
//   if (!isEmpty(res)) {
//     console.log(`i = ${curr}, triples: ${listToString(res)}`);
//   }
//   return testing(curr + 1, end);
// };

// testing(1, 8000);
