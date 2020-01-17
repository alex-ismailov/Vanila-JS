const minOfThreeNums = (a, b, c) => {
    let minNum = a;
    if(b < minNum) {
        minNum = b;
    }
    if (c < minNum) {
        minNum = c;
    }
    return minNum;
};

const minOfThreeNums2 = (a, b, c) => {
    if (a <= b && a <= c) {
        return a;
    }
    if (b <= a && b <= c) {
        return b;
    }
    if (c <= a && c <= b) {
        return c;
    }
};

const array = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [3, 2, 1],
    [3, 1, 2],
    [199, 200, 53],
    [53, 54, 104],
    [25, 25, 27],
    [3, 3, 4],
];
console.log('*** minOfThreeNums testintg ***');
array.forEach((el) => {
    console.log(`minOfThreeNums(${el[0]} - ${el[1]} - ${el[2]}) is ${minOfThreeNums(el[0], el[1], el[2])}`);
});

console.log('*** minOfThreeNums2 testintg ***');
array.forEach((el) => {
    console.log(`minOfThreeNums2(${el[0]} - ${el[1]} - ${el[2]}) is ${minOfThreeNums2(el[0], el[1], el[2])}`);
});