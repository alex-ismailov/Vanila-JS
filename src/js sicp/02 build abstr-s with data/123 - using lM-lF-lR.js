import { 
  l, head, tail, isEmpty, isList, concat, toString as listToString, cons,
} from '@hexlet/pairs-data';
import { lMap } from '../../myLib/lMap';
import lFilter from '../../myLib/lFilter';
import lReduce from '../../myLib/lReduce';

/* Для even-fibs нужно породить последовательность целых чисел в заданном диапазоне */
const enumerateInterval = (low, high) => {
  if (low > high) {
    return l();
  }
  return cons(low, enumerateInterval(low + 1, high));
};

/* Чтобы перечислить листья дерева, можно использовать такую процедуру:
Это в точности процедура fringe из упражнения 2.28.  */
const enumerateTree = (tree) => {
  if (isEmpty(tree)) {
    return l();
  }
  if (isList(head(tree))) {
    return concat(enumerateTree(head(tree)), enumerateTree(tail(tree)));
  }
  return cons(head(tree), enumerateTree(tail(tree)));
};

/* получем число Фиббоначи по порядковому номеру */
const fib = (n) => {
  const iter = (a, b, count) => {
    if (count === 0) {
      return b;
    }
    return iter(a + b, a, count - 1);
  };
  return iter(1, 0, n);
};

/* **************************** */
const sumOddSquares = (tree) => {
  const enumedTree = enumerateTree(tree);
  const filtered = lFilter((n) => n % 2 !== 0, enumedTree);
  const mapped = lMap((n) => n ** 2, filtered);
  return lReduce((curr, acc) => curr + acc, 0, mapped);
};

const evenFibs = (n) => {
  const interval = enumerateInterval(0, n);
  const fibs = lMap(fib, interval);
  return lFilter((n) => n % 2 === 0, fibs);
};

/* testing */
const tree = l(1, 2, l(3, l(4, 5)));
console.log(listToString(sumOddSquares(tree)));

console.log(listToString(evenFibs(7)));

// console.log(listToString(enumerateInterval(2, 7)));
// const tree = l(l(2, l(3, 4)), 5, l(6, l(7)));
// console.log(listToString(enumerateTree(tree)));

// console.log(fib(15));
