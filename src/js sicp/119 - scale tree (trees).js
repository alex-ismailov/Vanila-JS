import {
  l, isEmpty, isList, cons, head, tail, toString as listToString,
} from '@hexlet/pairs-data';

// Подобно тому, как map может служить мощной абстракцией для работы с
// последовательностями, map, совмещенная с рекурсией, служит мощной абстракцией
// для работы с деревьями. Например, процедура scale-tree, аналогичная процедуре
// scale-list из раздела 2.2.1, принимает в качестве аргумента числовой множитель и
// дерево, листьями которого являются числа. Она возвращает дерево той же формы, где
// каждое число умножено на множитель.

/* linear recursive process */
const scaleTree = (tree, factor) => {
  if (isEmpty(tree)) {
    return l();
  }
  if (isList(head(tree))) {
    return cons(scaleTree(head(tree), factor), scaleTree(tail(tree), factor));
  }
  return cons(head(tree) * factor, scaleTree(tail(tree), factor));
};

/* testing */
const tree = l(1, l(2, l(3, 4), 5), l(6, 7));
console.log(listToString(tree));
console.log(listToString(scaleTree(tree, 10)));
console.log('------------------');
const tree2 = l(1, 2, l(3, 4), 5);
console.log(listToString(tree2));
console.log(listToString(scaleTree(tree2, 10)));
console.log('------------------');
const tree3 = l(1, 2, l(3, 4), 5);
console.log(`tree: ${listToString(tree3)}`);
console.log(listToString(scaleTree(tree, 10)));
/* Ниже приведена визуализация с'cons'ивания древовидной последовательности tree3
функцией scaleTree */
const treeOnCons = cons(1, cons(2, cons(cons(3, cons(4, null)), cons(5, null))));
console.log(`tree3_OnCons: ${listToString(treeOnCons)}`);
