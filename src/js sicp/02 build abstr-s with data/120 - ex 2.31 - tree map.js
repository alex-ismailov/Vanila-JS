import {
  l, isEmpty, isList, head, tail, cons, toString as listToString,
} from '@hexlet/pairs-data';

/* Упражнение 2.31.
Абстрагируйте свой ответ на упражнение 2.30, получая процедуру tree-map, так,
чтобы squaretree можно было определить следующим образом:

(define (square-tree tree) (tree-map square tree)) */

const lMap = (fn, list) => {
  if (isEmpty(list)) {
    return l();
  }
  return cons(
    fn(head(list)),
    lMap(fn, tail(list)),
  );
};

const tMap = (fn, tree) => lMap((elem) => {
  if (isList(elem)) {
    return tMap(fn, elem);
  }
  return fn(elem);
}, tree);

/* solution */
const squareTree = (tree) => tMap((elem) => elem ** 2, tree);

/* testing */
const data1 = l(1, 3, 4);
console.log(listToString(squareTree(data1)));

const data2 = l(1, l(2, 3), 4);
console.log(listToString(squareTree(data2)));

const data3 = l(1, l(2, l(3, l(4, 5), 6), 7), 8);
console.log(listToString(squareTree(data3)));
