import {
  l, isEmpty, isList, head, tail, cons, toString as listToString,
} from '@hexlet/pairs-data';
import { lMap } from '../../myLib/lmap';
import tMap from '../../myLib/tMap';

/* Упражнение 2.30.
Определите процедуру square-tree, подобную процедуре square-list из
упражнения 2.21. А именно, square-tree должна вести себя следующим образом:
(square-tree
  (list 1
    (list 2 (list 3 4) 5)
    (list 6 7)))

---> (1 (4 (9 16) 25) (36 49))
Определите square-tree как прямо (то есть без использования процедур высших порядков),
так и с помощью map и рекурсии. */

/* squareTree like square list from 2.21 ex */
const squareTree = (tree) => {
  if (isEmpty(tree)) {
    return l();
  }
  if (isList(head(tree))) {
    return cons(squareTree(head(tree)), squareTree(tail(tree)));
  }
  return cons(head(tree) ** 2, squareTree(tail(tree)));
};

/* using higher order class function - lMap */
const squareTreeLMap = (tree) => lMap((curr) => {
  if (isList(curr)) {
    return squareTree(curr);
  }
  return curr ** 2;
}, tree);

/* testing */
const data1 = l(1, 3, 4);
console.log(listToString(squareTree(data1)));
console.log(listToString(squareTreeLMap(data1)));
/* using my tMap */
console.log(listToString(tMap((elem) => elem ** 2, data1)));

const data2 = l(1, l(2, 3), 4);
console.log(listToString(squareTree(data2)));
console.log(listToString(squareTreeLMap(data2)));
/* using my tMap */
console.log(listToString(tMap((elem) => elem ** 2, data2)));

const data3 = l(1, l(2, l(3, l(4, 5), 6), 7), 8);
console.log(listToString(squareTree(data3)));
console.log(listToString(squareTreeLMap(data3)));
/* using my tMap */
console.log(listToString(tMap((elem) => elem ** 2, data3)));
