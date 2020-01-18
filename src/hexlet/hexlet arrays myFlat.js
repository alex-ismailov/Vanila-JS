
const myFlatOneLevel = (coll) => {
  const result = [];
  for (const item of coll) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
};

// this method is better
const concat = (arr1, arr2) => {
  for (const item of arr2) {
    arr1.push(item);
  }
};

const flatten = (coll) => {
  const result = [];
  for (const item of coll) {
    if (Array.isArray(item)) {
      concat(result, item);
    } else {
      result.push(item);
    }
  }
  return result;
};

// testing
console.log(myFlatOneLevel([3, 2, [], [3, 4, 2], 3, [123, 3]]));
console.log(flatten([3, 2, [], [3, 4, 2], 3, [123, 3]]));