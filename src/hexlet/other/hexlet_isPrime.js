function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let divisor = 2, numSqrt = Math.sqrt(num); divisor <= numSqrt; divisor += 1) {
        console.log(`num = ${num}; divisor = ${divisor}`);
        console.log(`num % divisor = ${num % divisor};`);
        if ((num % divisor) === 0) {
            return false;
        }
    }
    return true;
}

// test with non prime numbers
console.log('*** test with non prime numbers ***');
[1, 4, 6, 8, 9, 12, 14].forEach(element => {
    console.log(`isPrime(${element}) = ${isPrime(element)}`);
    console.log('----------------------------');
});

// test with prime numbers
console.log('*** test with prime numbers ***');
[2, 3, 5, 7, 11, 13].forEach(element => {
    console.log(`isPrime(${element}) = ${isPrime(element)}`);
    console.log('----------------------------');
});