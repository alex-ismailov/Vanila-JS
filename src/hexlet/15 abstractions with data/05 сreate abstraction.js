/* А вот один из способов реализовать абстракцию для работы с точкой: */
const makeDecartPoint = (x, y) => ({ x, y });

const getX = (point) => point.x;
const getY = (point) => point.y;


const point = makeDecartPoint(3, 5);
console.log(point);
