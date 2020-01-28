/* Деструктуризация массива: */
/* Bad way */
const func = (arr) => {
  console.log(arr[0]);
  console.log(arr[1]);
};

// let arr = [1, 2];
// func([1, 2]);

/* more better */
const func2 = ([first, second]) => {
  console.log(first);
  console.log(second);
};
func2([1, 2]);

const func3 = ([first = 666, second = 777]) => {
  console.log(first);
  console.log(second);
};
func3([]);

/* Деструктуризация объекта */
const func4 = ({surname}) => {
  console.log(surname);
};

const obj = { name: 'John', surname: 'Doe' };
func4(obj); // => Doe
