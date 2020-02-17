import {
  l, head, tail, isEmpty, cons, toString as listToString,
} from '@hexlet/pairs-data';
import { lMap } from '../../myLib/seqlib';

const scaleList = (items, factor) => (
  isEmpty(items)
    ? l()
    : cons(head(items) * factor, scaleList(tail(items), factor))
);

/* new defifnition of scaleList in terms of lMap */
const scaleListMap = (items, factor) => lMap((curr) => curr * factor, items);

/* testing */
const data = l(1, 2, 3, 4, 5);
console.log(listToString(scaleList(data, 2)));
console.log(listToString(scaleListMap(data, 2)));
