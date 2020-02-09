/*
* What is sqrt(x)?
* sqrt(x) = y; y >= 0 && y = x**2
* sqrt(x) = ((y + (x / y))) / 2
*/
const minDiff = 0.001;
const isGoodEnough = (guess, n) => (Math.abs((guess ** 2) - n) < minDiff);
const average = (x, y) => (x + y) / 2;
const improve = (guess, n) => average(guess, (n / guess));
const sqrtNyuton = (n) => {
  let guess = 1;
  while (!isGoodEnough(guess, n)) {
    guess = improve(guess, n);
  }
  return guess;
};

// testing
const ul = document.querySelector('#root ul');
[0, 1, 2, 4, 9, 25, 50].forEach((element) => {
  const li = document.createElement('li');
  li.innerText = `sqrtNyuton(${element}) = ${sqrtNyuton(element).toFixed(1)}`;
  ul.appendChild(li);
});

// Inner function testing
try {
  console.log(average(2, 2));
} catch (e) {
  console.log(`Error message from inner function testing: ${e}`);
}
