/*
* Implement and export the default addDigits function, which works as follows:
* Given a non-negative integer num. Add all the numbers included in it until there is only one digit left.
* For number 38, the process will look like this:
* 3 + 8 = 11
* 1 + 1 = 2
* Result: 2
*/

function length(str) {
    return str.length;
}

function myAddDigits(num) {
    let numStr = String(num);
    let numStrLength = length(numStr);
    let res = 0;
    if (numStrLength === 1) {
        return num;
    }
    while (numStrLength > 1) {
        for (let i = 0; i < numStrLength; i += 1) {
            res += Number(numStr[i]);
        }
        if (length(String(res)) === 1) {
            numStrLength = 1;
        } else {
            numStr = String(res);
            numStrLength = length(String(res));
            res = 0;
        }
    }
    return res;
}

// ************************************
// ******** Teacher`s solution ********
function sum(str) {
    let result = 0;
    for (let i = 0; i < length(str); i += 1) {
        result += Number(str[i]);
    }
    return result
}

function addDigits(num) {
    let result = num;
    while (result >= 10) {
        result = sum(String(result));
    }
    return result;
}

// myAddDigits function testing
[0, 1, 9, 10, 19, 38, 1259].forEach(number => {
    console.log(`myAddDigits(${number}) = ${myAddDigits(number)}`);
    console.log('------------------');
});

// addDigits function testing, teachers`s solution
console.log('teachers`s solution\n------------------');
[0, 1, 9, 10, 19, 38, 1259].forEach(number => {
    console.log(`addDigits(${number}) = ${addDigits(number)}`);
    console.log('------------------');
});