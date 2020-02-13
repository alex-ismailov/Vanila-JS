import {
  l, isEmpty, isList, head, tail, cons, concat, toString as listToString,
} from '@hexlet/pairs-data';
import { enumerateInterval, foldRight, lMap } from '../../myLib/seqlib';


/* where 1 <= j < i <= n */
const makeSeqOfOrderedPairs = (n) => foldRight(concat, l(), lMap((i) => {
  return lMap((j) => l(i, j), enumerateInterval(1, i - 1));
}, enumerateInterval(1, n)))


/* testing */
console.log(listToString(makeSeqOfOrderedPairs(3)));

/* *************************************** */
/* Разложим makeSeqOfOrderedPairs на состовляющие */
const f = (n) => lMap((i) => {
  return lMap((j) => l(i, j), enumerateInterval(1, i - 1));
}, enumerateInterval(1, n));

/* 2й lMap строит подмножества на основе 1го множества
кол-во подмножеств полученных из 2го lMap зависит от величины значения
текущего элемента первого множества полученного из 1го lMap.
 __________________
|  i  |  2  | 3  3 |
|_____|_____|______| 
|  j  |  1  | 1  2 |
|_____|_____|______|
|i + j|(2,1)|(3, 1)|
|     |     |(3, 2)|
|_____|_____|______|

l(1, 2, 3)
| 
1 -> l()
2 -> ((2, 1))
3 -> ((3, 1), (3, 2))
=> ((), ((2, 1)), ((3, 1), (3, 2)))
Затем при помощи foldRight делаем список более плоским */

const res = foldRight(concat, l(), f(3));

console.log(listToString(f(3)));
console.log(listToString(res));

console.log('*****');
/* Вот таким образом foldRight будет concat(ить) подмножества
полученного множества подмножеств */
const concated = concat(l(), concat(l(l(2, 1)), concat(l(l(3, 1), l(3, 2)), l('test'))));
console.log(listToString(concated));
