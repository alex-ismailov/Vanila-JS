import { flatMap, lMap, enumerateInterval, lFilter, foldRight } from '../../myLib/seqlib';
import { l, head, tail, concat, toString as listToString, cons } from '@hexlet/pairs-data';

const uniquePairs = (n) => flatMap((i) => lMap((j) => l(i, j), enumerateInterval(1, i - 1)), enumerateInterval(1, n));

// const makeOrderedPairs = (n) => foldRight(
//   concat, l(), lMap((i) => lMap((j) => l(i, j), enumerateInterval(1, i - 1)), enumerateInterval(1, n))
// );

// const uniqueTriples = (n) => flatMap((i) => flatMap((j) => lMap((k) => l(i, j, k), enumerateInterval(1, j - 1)), enumerateInterval(1, i - 1)), enumerateInterval(1, n));

const uniqueTriples = (n) => (
  flatMap(
    (i) => flatMap(
      (j) => lMap(
        (k) => l(i, j, k), enumerateInterval(1, j - 1)
      ),
      enumerateInterval(1, i - 1)
    ),
    enumerateInterval(1, n))
);

const triplesSum = (s, n) => {
  return lFilter((triple) => (s === foldRight((curr, acc) => acc + curr, 0, triple)), uniqueTriples(6));
};

/* testing */
console.log(listToString(uniqueTriples(4)));
console.log(listToString(triplesSum(7)));