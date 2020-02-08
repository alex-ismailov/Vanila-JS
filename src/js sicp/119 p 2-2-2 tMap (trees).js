import {
  l, isEmpty, isList, cons, head, tail, toString as listToString,
} from '@hexlet/pairs-data';
import { lMap } from '../myLib/lmap';

const tMap = (fn, tree) => lMap((elem) => {
  if (isList(elem)) {
    return tMap(fn, elem);
  }
  return fn(elem);
}, tree);

/* testing */
const tree = l(1, l(2, l(3, 4), 5), l(6, 7));
console.log(listToString(tree));
console.log(listToString(tMap((elem) => elem * 10, tree)));
console.log(listToString(tMap((elem) => elem ** 2, tree)));
console.log('------------------');
