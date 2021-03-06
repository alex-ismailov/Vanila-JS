import { performance } from 'perf_hooks';

function factorialAndItsDuration(params) {
  function recurFact(n) {
    if (n < 1 ) {
      return 'Zero have not factorial';
    }
    return (n === 1) ? 1 : (n * recurFact(n - 1));
  }
  function iterFact(n) {
    if (n < 1 ) {
      return 'Zero have not factorial';
    }
    if (n === 1) {
      return n;
    }
    let res = 1;
    for (let i = 1; i <= n; i += 1) {
      res *= i;
    }
    return res;
  }
  // example taken from sicp-ru p.50
  // ************************************************************************************
  // ***** i think Tail call optimization in the three bottom examples doesn`t work *****
  function iterFact2(n) {
    function facIter(product, counter, max_count ) {
      if (counter > max_count) {
        return product;
      }
      return facIter((counter * product), (counter + 1), max_count);
    }
    return facIter(1, 1, n);
  }
  function iterFact3(n, product = 1, counter = 1) {
    if (counter > n) {
      return product;
    }
    return iterFact3(n, (product * counter), (counter + 1));
  }
  // example taken from the hexlet course
  function iterFact4(n) {
    function iter(counter, acc) {
      if (counter === 1) {
        return acc;
      }
      return iter(counter - 1, counter * acc);
    }
    return iter(n, 1);
  }
  function factTester(n, callback) {
    console.log(`------------ ${callback.name} testing ------------`);
    let start = performance.now();
    let res = callback(n);
    let end = performance.now();
    console.log(`${callback.name}(${n}) = ${res}; duration = ${(end - start).toFixed(5)} us`);
    console.log('------------------------------------------\n');
  }
  params.forEach(n => {
    console.log('******************************************\n');
    factTester(n, recurFact);
    factTester(n, iterFact);
    factTester(n, iterFact2);
    factTester(n, iterFact3);
    factTester(n, iterFact4);
  });
}

// Test drive
const params = [
  1,
  6,
  20,
  100,
  // 1000,
  // 5000,
  // 7000,
  // 8000,
  // 9000 //stack overfloved by iter2,3,4Fact
];
factorialAndItsDuration(params);