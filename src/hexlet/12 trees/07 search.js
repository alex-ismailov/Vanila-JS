import { mkdir, mkfile, isFile, isDirectory } from '@hexlet/immutable-fs-trees';

const reduce = (fn, tree, acc) => {
  const newAcc = fn(acc, tree);
  if (isFile(tree)) {
    return newAcc;
  }
  return tree.children.reduce((iAcc, n) => reduce(fn, n, iAcc), newAcc);
};

/* data */
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
  mkfile('hosts'),
  mkfile('resolve'),
]);

/* Все пустые директории */
const dirs = reduce((acc, n) => {
  if (isDirectory(n) && n.children.length === 0) {
    return [...acc, n.name];
  }
  return acc;
}, tree, []);

console.log(dirs); // [ 'apache', 'data' ]

/* ****************************** */

/* Все пустые директории, но с максимальной глубиной поиска 2 уровня */
const findEmptyDirsDepths = (root, depth = 1) => {
  const iter = (n, currentDepth, acc) => {
    if (isFile(n) || currentDepth > depth) {
      return acc;
    }

    if (n.children.length === 0) {
      return [...acc, n.name];
    }
    return n.children.reduce((cAcc, nn) => iter(nn, currentDepth + 1, cAcc), acc);
  };

  return iter(root, 0, []);
};

const emptyDirs = findEmptyDirsDepths(tree, 2);
console.log(emptyDirs); // [ 'apache' ]
