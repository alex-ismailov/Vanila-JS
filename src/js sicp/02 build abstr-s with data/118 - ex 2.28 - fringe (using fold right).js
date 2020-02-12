import {
  l, isEmpty, isList, head, tail, cons, concat, toString as listToString,
} from '@hexlet/pairs-data';
import { foldLeft, foldRight } from '../../myLib/higherOrderFunctions';


/* flat tree */
const flat = (tree) => foldRight((curr, acc) => {
  if (isList(curr)) {
    return concat(flat(curr), acc);
  }
  return cons(curr, acc);
}, l(), tree);

/* testing */
const tree = l(l(1, 2, 3), l(4, l(5, l(6))), 7);
console.log(listToString(flat(tree)));
