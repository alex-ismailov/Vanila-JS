const dfs = (tree) => {
  const { name, children } = tree;

  console.log(name);

  if (!children) {
    return;
  }
  children.map(dfs);
};

const tree = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        { name: 'E', children: [] },
        { name: 'F', children: [] }
      ]
    },
    { name: 'C', children: [] },
    {
      name: 'D',
      children: [
          { name: 'G', children: [] },
          { name: 'H', children: [] }
      ],
    },
  ],
};

dfs(tree);
