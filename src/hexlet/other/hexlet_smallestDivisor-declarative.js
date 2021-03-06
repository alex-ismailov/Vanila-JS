const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    function iter(divisor) {
        if (num === 1) {
            return num;
        }
        if ((num % divisor) === 0) {
            return divisor;
        }
        return iter(divisor + 1);
    }
    return iter(2);
    // END
};


function smallestDivisor_2(num, divisor = 2) {
    if (num === 1) {
        return num;
    }
    if ((num % divisor) === 0) { // !n % 2
        return divisor;
    }
    return smallestDivisor_2(num, divisor + 1);
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


// Test drive smallestDivisor_2
console.log('****** smallestDivisor_2 ******');
[1, 2, 9, 25, 33].forEach(elem => {
    console.log(`smallestDivisor_2(${elem}) = ${smallestDivisor_2(elem)}`);
});

// with prime number
console.log(`*** smallestDivisor_2 with prime numbers ***`);
[2, 3, 5, 7, 11].forEach(elem => {
    console.log(`smallestDivisor_2(${elem}) = ${smallestDivisor_2(elem)}`);
});