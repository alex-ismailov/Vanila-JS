function smallestDivisor(num) {
    // BEGIN (write your solution here)
    let divisor = 2;
    if (num === 1) {
        return num;
    }
    if (num < 1) {
        return NaN;
    }
    while ((num % divisor) !== 0) {
        divisor += 1;
    }
    return divisor;
    // END
}

// Test drive smallestDivisor
console.log('****** smallestDivisor ******');
[1, 2, 9, 25, 33].forEach(elem => {
    console.log(`smallestDivisor(${elem}) = ${smallestDivisor(elem)}`);
});

// with prime number
console.log(`*** smallestDivisor with prime numbers ***`);
[2, 3, 5, 7, 11].forEach(elem => {
    console.log(`smallestDivisor(${elem}) = ${smallestDivisor(elem)}`);
});