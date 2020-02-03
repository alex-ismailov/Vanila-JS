const countDown = (num) => {
  console.log(num);
  if (num <= 0) {
    return;
  }
  return countDown(num - 1);
};

/* testing */
countDown(5);
