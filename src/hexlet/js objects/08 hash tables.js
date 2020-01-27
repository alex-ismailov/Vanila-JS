// В JavaScript нет встроенной поддержки алгоритма хеширования crc32 (удобен для наглядности)
// Поэтому используется сторонняя библиотека

import crc32 from 'crc-32';

const data550 = 'Hello, world!';
const hash = crc32.str(data550);

// Хеш всегда одинаковый для одних и тех же данных!
console.log(hash); // на выходе мы получем хэш

const index = Math.abs(hash) % 1000;
console.log(index);

/* Рассмотрим процесс добавления нового значения в ассоциативный массив */
const data = {};
data['key'] = 'value';
console.log(data.key);