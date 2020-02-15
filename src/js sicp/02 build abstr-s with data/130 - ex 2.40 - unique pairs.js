import { flatMap, lMap, enumerateInterval, lFilter } from '../../myLib/seqlib';
import { l, head, tail, toString as listToString, cons } from '@hexlet/pairs-data';

const isPrime = (n) => {
  const iter = (testDiv) => {
    if (testDiv > Math.floor(Math.sqrt(n))) {
      return true;
    }
    if (n % testDiv === 0) {
      return false;
    }
    return iter(testDiv + 1);
  };
  return iter(2);
};

const isSumPrime = (pair) => {
  return isPrime(head(pair) + head(tail(pair)));
};

const uniquePairs = (n) => {
  const fm = flatMap((i) => lMap((j) => l(i, j), enumerateInterval(1, i - 1)), enumerateInterval(1, n));
  return fm;
};

const showPrimePairs = (pair) => {
  return l(head(pair), head(tail(pair)), head(pair) + head(tail(pair)));
};

// const primeSumPairs = (n) => {
//   const pairs = uniquePairs(n);
//   const filtered = lFilter(isSumPrime, pairs);
//   return lMap(showPrimePairs, filtered);
// };

const primeSumPairs = (n) => (
  lMap(showPrimePairs, 
    lFilter(isSumPrime, 
      uniquePairs(n)))
);
  

/* testing */
console.log(listToString(primeSumPairs(6)));
