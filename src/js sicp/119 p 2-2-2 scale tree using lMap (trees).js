import {
  l, isEmpty, isList, cons, head, tail, toString as listToString,
} from '@hexlet/pairs-data';
import { lMap } from '../myLib/lmap';

/* Другой способ реализации scale-tree состоит в том, чтобы рассматривать дерево
как последовательность поддеревьев и использовать map.
Мы отображаем последовательность, масштабируя по очереди каждое поддерево, и
возвращаем список результатов. В базовом случае, когда дерево является листом,
мы просто умножаем: */

const scaleTree = (tree, factor) => lMap((elem) => {
  if (isList(elem)) {
    return scaleTree(elem, factor);
  }
  return elem * factor;
}, tree);

/* testing */
const tree = l(1, l(2, l(3, 4), 5), l(6, 7));
console.log(listToString(tree));
// console.log(listToString(scaleTree(tree, 10)));
console.log(listToString(tMap((elem) => elem * 10, tree)));
console.log(listToString(tMap((elem) => elem ** 2, tree)));
console.log('------------------');
