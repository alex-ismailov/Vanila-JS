/* упр. 4.2 Напишите рекурсивную функцию для подсчета элементов в списке.  */

const elAmountInArr = (arr, index = 0) => {
  if (index === arr.length) {
    return 0;
  }
  return 1 + elAmountInArr(arr, index + 1);
}

/* testing */
const arr = [1, 2, 3];
console.log(elAmountInArr(arr));
