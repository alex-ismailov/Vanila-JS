import {
  mkdir, mkfile, getName, getChildren, isFile
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
      mkdir('data'),
    ]),
  ]),
  mkdir('logs'),
  mkfile('hosts'),
]);

const findEmptyDirPaths = (tree) => {
  const name = getName(tree);
  const children = getChildren(tree);
  if (children.length === 0) {
    return name;
  }
  const emptyDirNames = children.filter((child) => !isFile(child))
    .flatMap(findEmptyDirPaths);

  return emptyDirNames; 
};

const res = findEmptyDirPaths(tree);
console.log(res); // => [ 'apache', 'data', 'logs' ]

/* ************************************** */

const findEmptyDirPathsDepth2 = (tree) => {
  const iter = (node, depth) => {
    const name = getName(node);
    const children = getChildren(node);
    if (children.length === 0) {
      return name;
    }
    if (depth === 2) {
      return [];
    }
    const emptyDirNames = children.filter((child) => !isFile(child))
      .flatMap((child) => iter(child, depth + 1));

    return emptyDirNames; 
  };

  return iter(tree, 0);
};

const depthRes = findEmptyDirPathsDepth2(tree);
console.log(depthRes); // => [ 'apache', 'logs' ]

/* ************************************** */

const findEmptyDirPathsDepth = (tree, depth = Infinity) => {
  const iter = (node, depthInner) => {
    const name = getName(node);
    const children = getChildren(node);
    if (children.length === 0) {
      return name;
    }
    if (depthInner === depth) {
      return [];
    }
    const emptyDirNames = children.filter((child) => !isFile(child))
      .flatMap((child) => iter(child, depthInner + 1));

    return emptyDirNames; 
  };

  return iter(tree, 0);
};

const depthRes2 = findEmptyDirPathsDepth(tree);
console.log(depthRes2); // => [ 'apache', 'data', 'logs' ]
