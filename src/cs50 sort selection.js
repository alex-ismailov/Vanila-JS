// сложность O(n^2)

const selectionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i += 1) { // Выполняем проверку для каждого элемента массива, кроме последнего
    let minIndex = i; // В качестве текущего мин. значения берем текущий элемент с индексом i
    for (let j = i + 1; j < len; j += 1) { // а для всех последних элементов выполняется проверка
      if (arr[j] < arr[minIndex]) { // если следующий элемент меньше текущий мин. элемента,
        minIndex = j; // то запоминаем его индекс в качестве нового минимума  
      }
    }
    if (i !== minIndex) { // Меняем элементы местами только в том случае, если был найден новый мин. элемент, что бы не выполнять лишние действия. 
      let tmp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = tmp;
    }
  }
  return arr;
};

const arr1 = [3, 5, 4, 2, 1];
const arr2 = [3, 2, 1];
const arr3 = [1, 7, 5, 8, 3, 2, 4, 6];
console.log(selectionSort(arr1));
console.log(selectionSort(arr2));
console.log(selectionSort(arr3));
