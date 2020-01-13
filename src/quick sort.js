const swap = (items, firstIndex, secondIndex) => {
  const tmp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = tmp;
};

const partition = (items, left, right) => {
  const middle = items[Math.floor((left + right) / 2)]; // в качестве разделителя берем элемент из середины
  let leftPointer = left;
  let rightPointer = right;
  while (leftPointer <= rightPointer) { // пока левый указатель меньше или равен правому
    while (items[leftPointer] < middle) {
      leftPointer += 1; // сдвигаем левый указатель к центру если очередной элемент меньше среднего элемента
    }
    while (items[rightPointer] > middle) {
      rightPointer -= 1; // сдвигаем правый указатель к центру если очередной элемент меньше среднего элемента
    }
    if (leftPointer <= rightPointer) { // если в результате сдвигов левый указатель больше или равен правому
      swap(items, leftPointer, rightPointer);
      leftPointer += 1;
      rightPointer -= 1;
    }
  }
  return leftPointer;
};

const quickSort = (items, left = 0, right = items.length - 1) => {
  let index;
  if (items.length > 1) { // если длина массива больше 1
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1); // запускаем quickSort для левой части
    }
    if (index < right) {
      quickSort(items, index, right); // запускаем quickSort для правой части
    }
  }
  return items;
};

// testing
const arr1 = [3, 5, 4, 2, 1];
console.log(quickSort(arr1));
