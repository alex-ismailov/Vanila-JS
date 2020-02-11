import { l, toString as listToString } from '@hexlet/pairs-data';
import {
  lMap, lFilter, lReduce,
} from '../../myLib/higherOrderFunctions';

const productOfSquaresOfOddElems = (sequence) => {
  const filtered = lFilter((n) => n % 2 !== 0, sequence);
  return lReduce((curr, acc) => (curr ** 2) * acc, 1, filtered);
};

/* testing */
console.log(listToString(productOfSquaresOfOddElems(l(1, 2, 3, 4, 5))));
