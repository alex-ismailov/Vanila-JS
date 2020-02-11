import { toString as listToString } from '@hexlet/pairs-data';
import {
  lMap, enumerateInterval,
} from '../../myLib/higherOrderFunctions';

const fib = (n) => {
  const iter = (a, b, count) => {
    if (count === 0) {
      return b;
    }
    return iter(a + b, a, count - 1);
  };
  return iter(1, 0, n);
};

const listFibSquares = (num) => {
  const interval = enumerateInterval(0, num);
  const fibs = lMap(fib, interval);
  return lMap((n) => n ** 2, fibs);
};

/* testing */
console.log(listToString(listFibSquares(10)));
