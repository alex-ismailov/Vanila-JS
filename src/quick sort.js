const swap = (items, firstIndex, secondIndex) => {
  const tmp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = tmp;
};

const partition = (items, left, right) => {
  const pivot = items[Math.floor((left + right) / 2)]; // в качестве разделителя берем элемент из середины
  let leftPointer = left;
  let rightPointer = right;
  while (leftPointer <= rightPointer) { // пока левый указатель меньше или равен правому, т.е. пока они не пересекли опорный элемент
    while (items[leftPointer] < pivot) { // если items[leftPointer] < pivot, то это значит, что элемент на месте 
      leftPointer += 1; // и мы сдвигаем левый указатель направо к опорному элементу (к pivot(у))  
    }
    while (items[rightPointer] > pivot) { // если items[rightPointer] < pivot, то это значит, что элемент на месте
      rightPointer -= 1; // сдвигаем правый указатель к центру если очередной элемент меньше pivot элемента
    }
    if (leftPointer <= rightPointer) { // если в результате сдвигов левый указатель меньше или равен правому, значит еще есть не отсортированные элементы
      swap(items, leftPointer, rightPointer); // переносим меньший элемент налево, а больший направо
      leftPointer += 1; // двигаем указатели в поисках новых не отсортированных элементов
      rightPointer -= 1; // каждый (leftPointer и rightPointer) в своем изначальном направлении
    }
  }
  return leftPointer;
};

const quickSort = (items, left = 0, right = items.length - 1) => {
  let index;
  if (items.length > 1) { // если длина массива больше 1, это значит, что вероятно есть еще не отсортированные элементы
    index = partition(items, left, right); // получаем разделитель массива 
    if (left < index - 1) {
      quickSort(items, left, index - 1); // рекурсивно запускаем quickSort для левой части
    }
    if (index < right) {
      quickSort(items, index, right); // рекурсивно запускаем quickSort для правой части
    }
  }
  return items;
};

// testing
const arr1 = [3, 5, 4, 2, 1];
console.log(quickSort(arr1));
