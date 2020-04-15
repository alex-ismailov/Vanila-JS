import _ from 'lodash';
import trees from '@hexlet/immutable-fs-trees';
const { mkfile, mkdir, isFile, getChildren } = trees;

/* Рассмотрим агрегацию на примере подсчета общего количества узлов в дереве. */

const getNodesCount = (tree) => {
  const iter = (node, acc) => {
    if (isFile(node)) {
      return acc + 1;
    }

    const children = getChildren(node);
    const descendantsCount = children.map((child) => iter(child, 0));
    
    return 1 + _.sum(descendantsCount);
  };

  return iter(tree, 0);
};

/* data */
const tree = mkdir('/', [
  mkdir('etc', [
    mkfile('bashrc'),
    mkfile('consul.cfg'),
  ]),
  mkfile('hexletrc'),
  mkdir('bin', [
    mkfile('ls'),
    mkfile('cat'),
  ]),
]);

/* testing */
console.log(getNodesCount(tree));

// console.log(getChildren(mkdir('testDir'))); // []
// console.log(_.sum([]));
