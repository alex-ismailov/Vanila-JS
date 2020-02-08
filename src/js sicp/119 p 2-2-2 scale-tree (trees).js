import { l, isEmpty, isList, cons, head, tail, concat, reverse, toString as listToString } from "@hexlet/pairs-data";

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
