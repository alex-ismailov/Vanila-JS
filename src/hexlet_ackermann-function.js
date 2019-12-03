/*
* Реализуйте функцию Аккермана A. Она принимает два параметра, x и y, и вычисляется следующим образом:
* если y = 0, тогда она возвращает 0;
* если x = 0, тогда она возвращает 2*y;
* если y = 1, тогда она возвращает 2;
* иначе, она вызывает саму себя (фукнцию A) с параметрами x = x-1 и y = A ( x, (y - 1) ).
*/

const ackermanFunc = (x, y) => {
  if (y === 0) {
    return 0;
  } else if (x === 0) {
    return 2 * y;
  } else if (y === 1) {
    return 2;
  } else {
    return ackermanFunc((x - 1), ackermanFunc(x ,(y - 1)));
  }
};

// ackermanFunc testing
const testParams = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 4]
];

testParams.forEach((p) => {
  console.log(`ackermanFunc(${p[0]}, ${p[1]}) = ${ackermanFunc(p[0], p[1])}`);
});
