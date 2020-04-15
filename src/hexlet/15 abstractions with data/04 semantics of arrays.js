/* Такой код проще понимать, потому что вместо странных point[0] или point[1] появляются совершенно
понятные с первого взгляда конструкции: point.x.
Даже при выводе на экран сразу понятно, о чём идёт речь.
 */
const point = { x: 2, y: 3 };
const symmetricalPoint = { x: -point.x, y: point.y };
const symmetricalPoint2 = { ...point, x: -(point.x)  };

console.log(point);
console.log(symmetricalPoint);
console.log(symmetricalPoint2);
