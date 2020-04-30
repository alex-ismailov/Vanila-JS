// Эта функция выполняет мемоизацию факториала
const factorial = (num) => (
  num === 1
    ? 1
    : num * factorial(num - 1)
);

const factorialIter = (num) => {
  const iter = (acc, count) => (
    count > num
      ? acc
      : iter(acc * count, count + 1)
  );
  return iter(1, 1)
};

const factorialIterDesc = (num) => {
  const iter = (acc, count) => (
    count === 0
      ? acc
      : iter(acc * count, count - 1)
  );
  return iter(1, num)
};


/* ----------------------------------- */
const generateFactorialWithMemo = () => {
  let memo = {};

  const factorialCaller = (num) => {
    if (memo[num]) {
      console.log(`stored data getting, memo[${num}]: ${memo[num]}`);
      console.log(memo);
      return memo[num];
    }
    memo[num] = factorialIterDesc(num);

    return memo[num];
  };

  return factorialCaller;
};



/* testing */
console.log(factorial(6));
console.log(factorialIter(6));
console.log(factorialIterDesc(6));

console.log('****');
const factorialWithMemo = generateFactorialWithMemo();
console.log(factorialWithMemo(6));
console.log(factorialWithMemo(6));
