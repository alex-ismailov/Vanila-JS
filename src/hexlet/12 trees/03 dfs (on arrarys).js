/* дерево на массивах */
const dfs = (tree) => {
  const [name, children] = tree;

  console.log(name);

  if (!children) {
    return;
  }

  children.map(dfs);
};

const tree = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['G'], ['J']]],
]];


dfs(tree);
