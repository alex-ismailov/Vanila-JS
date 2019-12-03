const fibTRP = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibTRP(n - 1) + fibTRP(n - 2);
  }
};

// fibTRP testing
const MAX = 12;
for (let num = 0; num <= MAX; num += 1) {
  console.log(`fibTRP(${num}) = ${fibTRP(num)}`);
}