// сложность O(n^2)

const bubblesort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) { // Выполняется для каждого элемента кроме последнего
    for (let k = 0; k < len - i; k++) { // Далее пробегаемся по оставшимся элементам идущими после arr[i]
      if (arr[k] > arr[k + 1]) { // если левый элемент меньше правого, то меняем их местами.
        let tmp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = tmp
      }
    }
  }
  return arr;
};

const arr1 = [3, 5, 4, 2, 1];
// console.log(arr1);
console.log(bubblesort(arr1));