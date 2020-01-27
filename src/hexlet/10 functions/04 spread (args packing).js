const sum = (...params) => {
  let res = 0;
  for (const num of params) {
    res += num;
  }
  return res;
};

const foo = (...args) => {
  console.log(args);
};

/* tetsing */
console.log(sum(1, 2, 3, 4, 5)); // 15
foo([[], 3, 10]); // [ [ [], 3, 10 ] ]
