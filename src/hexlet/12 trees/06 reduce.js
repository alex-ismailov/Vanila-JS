const reduce = (fn, tree, acc) => {
  const [, children] = tree;
  const newAcc = fn(acc);

  if (!children) {
    return newAcc;
  }

  return children.reduce((iAcc, n) => reduce(fn, n, iAcc), newAcc);
};

/* testing */
const tree = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['G'], ['J']]],
]];

const res = reduce((acc) => acc + 1, tree, 0);
console.log(res); // 8
