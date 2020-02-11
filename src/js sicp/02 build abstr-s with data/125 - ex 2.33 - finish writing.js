import {
  l, cons, reverse, toString as listToString,
} from '@hexlet/pairs-data';
import { lReduce } from '../../myLib/higherOrderFunctions';

/* Упражнение 2.33.
Заполните пропущенные выражения, так, чтобы получились определения
некоторых базовых операций по работе со списками в виде накопления:
(define (map p sequence)
  (accumulate (lambda (x y) <??>) nil sequence))

(define (append seq1 seq2)
  (accumulate cons <??> <??>))

(define (length sequence)
  (accumulate <??> 0 sequence))
*/

const map = (p, sequence) => reverse(lReduce((x, y) => cons(p(x), y), l(), sequence));

const append = (seq1, seq2) => lReduce(cons, seq2, reverse(seq1));

const length = (sequence) => lReduce((curr, acc) => acc + 1, 0, sequence);

/* testing map */
const data = l(1, 2, 3, 4, 5);
console.log(listToString(map((n) => n ** 2, data)));

/* testing append */
const data2 = l(6, 7, 8, 9);
const concatedList = append(data, data2);
console.log(listToString(concatedList));

/* testing length */
console.log(length(concatedList));
