// import assert from 'assert';
// // import assert from 'power-assert';

// // Весь код остаётся тем же самым
// const user = {
//   name: 'Madonna',
//   friends: ['Kate', 'Michel'],
//   email: 'madonna@example.com',
// };

// // Интерфейс библиотеки power-assert на 100% совместим со встроенным модулем assert.
// assert(user.name === 'Michel');


// // console.log(user.name);

import assert from 'power-assert';
import _ from 'lodash';

const array = [1, 2, 3, 4, 2, 1];
const zero = 0;
const two = 2;

// assert(_.indexOf(array, 2, 3) === 4);
assert(_.indexOf([1, 2, 3, 2, 4], 2, 1) === 1);
