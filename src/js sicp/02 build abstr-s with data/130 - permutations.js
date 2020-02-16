import {
  l, cons, isEmpty, toString as listToString,
} from '@hexlet/pairs-data';
import {
  lMap, lFilter, flatMap,
} from '../../myLib/seqlib';

/* Вложенные отображения полезны не только для таких последовательностей, которые
перечисляют интервалы (как в 128 - makeSeqOfOrderedPairs). Допустим, нам нужно
перечислить все перестановки множества S, то есть все способы упорядочить это множество.
Например, перестановки множества {1, 2, 3} — это :
{1, 2, 3}, {1, 3, 2}, {2, 1, 3}, {2, 3, 1}, {3, 1, 2} и {3, 2, 1}.
*/

const remove = (elem, set) => lFilter((curr) => !(curr === elem), set);

const permutations = (s) => (isEmpty(s)
  ? l(null)
  : flatMap((x) => lMap((p) => cons(x, p),
    permutations(remove(x, s))),
  s));

/* testing */
const set = l(1, 2, 3);
console.log(listToString(permutations(set)));
