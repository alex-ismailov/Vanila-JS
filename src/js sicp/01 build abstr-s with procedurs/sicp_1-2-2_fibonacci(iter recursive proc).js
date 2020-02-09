const fibIRP = (n) => {
  if (n <= 1) {
    return n;
  }
  let a = 1;
  let b = 0;
  for (let count = n, aa = 0, bb = 0; count > 0; count -= 1) {
    aa = a + b;
    bb = a;
    a = aa;
    b = bb;
  }
  return b;
};

// fibIRP testing
let MAX = 10;
for (let fnum = 0; fnum < MAX; fnum += 1) {
  console.log(`fibIRP(${fnum}) = ${fibIRP(fnum)}`);
}
