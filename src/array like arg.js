const array = [1, 2, 3, 4, 5];

const arrChanger = (a) => {
  for (let i = 0; i < a.length; i += 1) {
    a[i] *= 10; 
  }
  // there is nothing returned
};

console.log(`array before arrChanger ${array}`); // 1, 2, 3, 4, 5
arrChanger(array);
console.log(`array after arrChanger ${array}`); // 10, 20, 30, 40, 50