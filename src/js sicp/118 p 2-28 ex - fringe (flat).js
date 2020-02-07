import { l, isEmpty, isList, cons, head, tail, concat, reverse, toString as listToString } from "@hexlet/pairs-data";

/* Упражнение 2.28.
Напишите процедуру fringe, которая берет в качестве аргумента
дерево (представленное в виде списка) и возвращает список,
элементы которого — все листья дерева, упорядоченные слева направо.
Например:
(define x (list (list 1 2) (list 3 4)))

(fringe x)
(1 2 3 4)

(fringe (list x x))
(1 2 3 4 1 2 3 4)
*/

// const fringe = (list) => {
//   const iter = (source, acc) => {
//     console.log(listToString(head(source)));
//     if (isEmpty(source)) {
//       return acc;
//     }
//     if (isList(head(source))) {
//       return iter();
//     }
//     return iter(tail(list), cons(head(source), acc));
//   };
//   return iter(list, l())
// };

// const fringe = (list) => {
//   const iter = (source, acc) => {
//     if (isEmpty(source)) {
//       return acc;
//     }
//     if (isList(source)) {
//       return iter;
//     }
//     return iter(tail(source), cons(head(source), acc));
//   };
//   return iter(list, l())
// };

// const fringe = (list) => {
//   if (isEmpty(list)) {
//     return l();
//   }
//   return cons(head(list), fringe(tail(list)));
// };

// const fringe = (list) => {
//   if (isEmpty(list)) {
//     return l();
//   }
//   if (isList(head(list))) {
//     return fringe(head(list));
//   }
//   return cons(head(list), fringe(tail(list)));
// };

// const fringe = (tree) => {
//   if (isEmpty(tree)) {
//     return l();
//   }
//   if (isList(head(tree))) {
//     return concat(fringe(head(tree)), fringe(head(tail(tree))));
//   }
//   return tree;
// };

const fringe = (tree) => {
  const iter = (source, acc) => {
    if (isEmpty(source)) {
      return reverse(acc);
    }
    if (isList(head(source))) {
      return concat(iter(head(source), acc), iter(tail(source), l()));
    }
    return iter(tail(source), cons(head(source), acc))
  };
  return iter(tree, l());
};

/* testing */
const list = l(l(1, 2), l(3, 4));
console.log(listToString(fringe(list)));

const list2 = l(l(1, 2), l(3, 4, l(5, 6)));
console.log(listToString(fringe(list2)));

const list3 = l(l(1, 2), l(3, 4, l(5, l(6, l(7, 8, l(9))))));
console.log(listToString(fringe(list3)));
