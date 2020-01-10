const insertionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i += 1) { // Проходим по каждому элементу массива
    let currElem = arr[i]; // значение текущего элемента
    let prevIndex = i - 1; // индекс предыдущего элемента
    while (prevIndex >= 0 && arr[prevIndex] > currElem) { // Пока индекс предущего элемента >= 0 и его значение больше текущ. элемента 
      arr[prevIndex + 1] = arr[prevIndex]; // значение следущ. за текущим элемента массива становится значение предыдущего элемента
      prevIndex -= 1;
    }
    arr[prevIndex + 1] = currElem;
  }
  return arr;
};

const arr1 = [3, 5, 4, 2, 1];
console.log(insertionSort(arr1));
