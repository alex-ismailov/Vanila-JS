/* Задача:
Равномерно разделить прямоугольный участок на одинаковые квадратные участки.
Участки должны быть настолько большими, насколько это возможно. */

const largestSquare = (width, height) => {
  const maxSize = Math.max(width, height);
  const minSize = Math.min(width, height);
  if (maxSize % minSize === 0) {
    return minSize;
  }
  return largestSquare(maxSize % minSize, minSize);
};

/* testing */
console.log(largestSquare(1680, 640));
console.log(largestSquare(2210, 500));
console.log(largestSquare(2500, 350));
