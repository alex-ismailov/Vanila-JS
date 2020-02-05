/* Упражнение 2.23.
Процедура for-each похожа на map. В качестве аргументов она принимает процедуру и
список элементов. Однако вместо того, чтобы формировать список результатов,
for-each просто применяет процедуру по очереди ко всем элементам слева направо.
Результаты применения процедуры к аргументам не используются вообще — for-each
применяют к процедурам, которые осуществляют какое-либо действие вроде печати.
Например:
(for-each (lambda (x) (newline) (display x))
(list 57 321 88))
57
321
88
Значение, возвращаемое вызовом for-each (оно в листинге не показано) может быть каким
угодно, например истина. Напишите реализацию for-each. */

import {
  l, isEmpty, head, tail,
} from '@hexlet/pairs-data';

/* linear recursive process */
const forEach = (cb, items) => {
  if (isEmpty(items)) {
    return true;
  }
  cb(head(items));
  return forEach(cb, tail(items));
};

/* testing */
const numbers = l(10, 20, 30, 40, 50);
const callBack = (item) => console.log(item);
forEach(callBack, numbers);
