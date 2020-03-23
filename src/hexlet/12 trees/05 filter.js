const filter = (fn, tree) => {
  if (!fn(tree)) {
    return null;
  }

  const [name, children] = tree;
  console.log(name);

  if (!children) {
    return tree;
  }

  const newChildren = children
    .map((child) => filter(fn, child))
    .filter((v) => v);

  return [name, newChildren];
};

/* testing */
const tree = ['a', [
  ['B', [['e'], ['F']]],
  ['C'],
  ['d', [['G'], ['j']]],
]];

const result = filter(([name]) => name === name.toLowerCase(), tree);
// => a
// => d
// => j

console.log(JSON.stringify(result));
// '["a", [["d", [["j"]]]]]'
