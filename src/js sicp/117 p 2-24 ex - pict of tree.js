/* Упражнение 2.24.
Предположим, мы вычисляем выражение (list 1 (list 2 (list 3 4))). Укажите, какой
результат напечатает интерпретатор, изобразите его в виде стрелочной диаграммы, а
также его интерпретацию в виде дерева (как на рисунке 2.6). */

import {
  l, toString as listToString,
} from '@hexlet/pairs-data';

console.log(listToString(l(1, l(2, l(3, 4))))); // (1, (2, (3, 4)))
/*
(1, (2, (3, 4)))
        /\
       /  \
      1    \
           /\
          /  \
         2    \
              /\
             /  \
            3    4
*/
