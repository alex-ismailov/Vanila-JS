const generate = f => arg => f(f(arg));

// generate testing
const square = n => n * n;
const myPow = (n) => Math.pow(n, n);
const args = [
    [Math.sqrt, 16],
    [myPow, 2],
    [square, 3],
];

args.forEach((arg) => {
    console.log(`generate(${arg[0].name})(${arg[1]}) = ${generate(arg[0])(arg[1])}`);
});
