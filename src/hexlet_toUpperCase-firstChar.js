// ********************************************
// ***** helper functions from the lesson *****
const length = str => str.length;
const toUpperCase = str => str.toUpperCase();

// ******************************
// ***** my solution *****
const myFirstCharInStrToUpperCase = (str) => {
    const strLength = length(str);
    let strRes = '';
    for (let i = 0; i < strLength; i += 1) {
        if (str[i] !== toUpperCase(str[i]) && (str[i - 1] === ' ' || str[i - 1] === undefined)) {
            strRes += toUpperCase(str[i]);
            console.log('my func worked');
        } else {
            strRes += str[i];
        }
    }
    return strRes;
};

// ******************************
// ***** Teacher`s solution *****
const firstCharInStrToUpperCase = (str) => {
    let result = '';
    for (let i = 0; i < length(str); i += 1) {
        const shouldBeBig = (i === 0 || str[i - 1] === ' ');
        result += shouldBeBig ? toUpperCase(str[i]) : str[i];
        console.log('Teacher`s func worked');
    }

    return result;
};

// My solution testing
console.log('***** My solution testing *****');
['a', 'abc', 'abc d efg', 'hello world', 'Hello world'].forEach(str => {
    console.log(`--> ${str}; after myFirstCharInStrToUpperCase function --> ${myFirstCharInStrToUpperCase(str)}`);
});

// Teacher solution testing
console.log('\n\n***** Teacher solution testing *****');
['a', 'abc', 'abc d efg', 'hello world', 'Hello world'].forEach(str => {
    console.log(`--> ${str}; after firstCharInStrToUpperCase function --> ${firstCharInStrToUpperCase(str)}`);
});