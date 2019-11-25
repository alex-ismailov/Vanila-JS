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

[
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [3, 2, 1],
    [3, 1, 2],
    [199, 200, 53],
    [53, 54, 104],
    [25, 25, 27],
].forEach((el) => {
    console.log(`minOfThreeNums(${el[0]} - ${el[1]} - ${el[2]}) is ${minOfThreeNums(el[0], el[1], el[2])}`);
});