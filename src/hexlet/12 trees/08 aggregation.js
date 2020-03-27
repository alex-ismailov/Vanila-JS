import { mkdir, mkfile, isFile, isDirectory, reduce } from '@hexlet/immutable-fs-trees';

/* Напишем функцию, которая принимает на вход директорию и возвращает список директорий
первого уровня вложенности и количество файлов в них включая все поддиректории. */

/* подсчёт количества файлов */
const calculateFilesCount = (tree) => reduce((acc, node) => (isFile(node) ? acc + 1 : acc), tree, 0);

/* извлечь всех детей из исходного узла и к каждому из них применить подсчёт. */
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
  ]),
  mkdir('consul', [
    mkfile('config.json'),
    mkfile('file.tmp'),
    mkdir('data'),
  ]),
  mkfile('hosts'),
  mkfile('resolve'),
]);

let result = tree.children
  .filter(isDirectory);

console.log(result); // =>
// [
//   {
//     name: 'etc',
//     children: [ [Object], [Object] ],
//     meta: {},
//     type: 'directory'
//   },
//   {
//     name: 'consul',
//     children: [ [Object], [Object], [Object] ],
//     meta: {},
//     type: 'directory'
//   }
// ]

result = tree.children
  .filter(isDirectory)
  .map((n) => [n.name, calculateFilesCount(n)]);

console.log(result); // => [ [ 'etc', 1 ], [ 'consul', 2 ] ]
