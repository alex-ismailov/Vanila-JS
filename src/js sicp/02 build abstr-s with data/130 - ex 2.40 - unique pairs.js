import {
  l, head, tail, toString as listToString,
} from '@hexlet/pairs-data';
import {
  flatMap, lMap, enumerateInterval, lFilter,
} from '../../myLib/seqlib';

const isPrime = (n) => {
  const iter = (testDiv) => {
    if (testDiv > Math.floor(Math.sqrt(n))) {
      return true;
    }
    return n % testDiv === 0
      ? false
      : iter(testDiv + 1);
  };
  return iter(2);
};

const isSumPrime = (pair) => isPrime(head(pair) + head(tail(pair)));

const uniquePairs = (n) => (
  flatMap((i) => lMap((j) => l(i, j),
    enumerateInterval(1, i - 1)),
  enumerateInterval(1, n))
);

const showPrimePairs = (pair) => (
  l(head(pair), head(tail(pair)), head(pair) + head(tail(pair)))
);

const primeSumPairs = (n) => (
  lMap(showPrimePairs,
    lFilter(isSumPrime,
      uniquePairs(n)))
);

/* testing */
console.log(listToString(primeSumPairs(6)));
