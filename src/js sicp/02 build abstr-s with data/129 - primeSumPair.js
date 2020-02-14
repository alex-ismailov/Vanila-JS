import {
  l, head, tail, concat, toString as listToString,
} from '@hexlet/pairs-data';
import {
  foldRight, lMap, enumerateInterval, lFilter,
} from '../../myLib/seqlib';

/* Рассмотрим
следующую задачу: пусть дано положительное целое число n;
найти все такие упорядоченные пары различных целых чисел i и j, где 1 ≤ j < i ≤ n, что i+j является простым.
Например, если n равно 6, то искомые пары следующие:

    i 2 3 4 4 5 6 6
    j 1 2 1 3 2 1 5
i + j 3 5 5 7 7 7 11
*/

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

const flatMap = (fn, seq) => foldRight(concat, l(), lMap(fn, seq));
const isPrimeSum = (pair) => isPrime(head(pair) + head(tail(pair)));
const makePairSum = (pair) => l(head(pair), head(tail(pair)), head(pair) + head(tail(pair)));

const primeSumPair = (n) => {
  const orderedPairs = flatMap((i) => lMap((j) => l(i, j), enumerateInterval(1, i - 1)), enumerateInterval(1, n));
  const filtered = lFilter(isPrimeSum, orderedPairs);
  return lMap(makePairSum, filtered);
};

/* testing */
console.log(listToString(primeSumPair(6)));
