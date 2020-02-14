import {
  l, concat, toString as listToString,
} from '@hexlet/pairs-data';
import { foldRight, lMap, enumerateInterval } from '../../myLib/seqlib';

const flatMap = (fn, seq) => foldRight(concat, l(), lMap(fn, seq));

const orderedPairs = flatMap(
  (i) => lMap((j) => l(i, j), enumerateInterval(1, i - 1)),
  enumerateInterval(1, 4),
);

/* testing */
console.log(listToString(orderedPairs));
