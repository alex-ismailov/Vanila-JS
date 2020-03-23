/* *** JS: Деревья → Map → lesson examples *** */

const dfs = (tree) => {
  const [name, children] = tree;
  const newName = name.toLowerCase();

  if (!children) {
    return [newName];
  }

  return [newName, children.map(dfs)];
};

/* testing */
const tree = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['G'], ['J']]],
]];

console.log(JSON.stringify(dfs(tree)));
// => ["a",[["b",[["e"],["f"]]],["c"],["d",[["g"],["j"]]]]]

/* *********************************** */

const map = (f, tree) => {
  const [, children] = tree;
  const [newName] = f(tree);

  if (!children) {
    return [newName];
  }

  return [newName, children.map((c) => map(f, c))];
};

const mappedTree = map(([name]) => [name.toLowerCase()], tree);
console.log(JSON.stringify(mappedTree));
// => ["a",[["b",[["e"],["f"]]],["c"],["d",[["g"],["j"]]]]]
