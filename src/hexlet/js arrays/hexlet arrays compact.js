const myCompact = (arr) => {
  const res = [];
  for (const item of arr) {
    if (item !== null) {
      res.push(item);
    }
  }
  return res;
};

// testing
console.log(myCompact([0, 1, false, null, true, 'wow', null]));