const pascalTriangle = (m, k) => {
  if (m < k) {
    console.log('Incorrect values of arguments!');
    return 0;
  }
  if (k === 0 || k === m) {
    // console.log('return 1');
    return 1;
  }
  return pascalTriangle(m - 1, k - 1) + pascalTriangle(m - 1, k);
};

// testing
const M_MAX = 10;
for (let m = 0; m <= M_MAX; m += 1) {
  for (let k = 0; k <= m; k += 1) {
    console.log(pascalTriangle(m, k));
  }
  console.log('------');
}
