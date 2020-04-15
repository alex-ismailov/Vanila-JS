import {
  mkfile, mkdir, getChildren, getMeta, getName,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const tree = mkdir('/', [mkfile('hexlet.log')], { hidden: true });
console.log(getName(tree)); // '/'
console.log(getMeta(tree).hidden); // true

// const [ file ] = getChildren(tree);
// getName(file); // 'hexlet.log'
// getMeta(file).unknown; // undefined

const file = mkfile('one', { size: 35 });

// При переименовании важно сохранить метаданные
// _ – lodash
const newMeta = _.cloneDeep(getMeta(file));
const newFile = mkfile('new name',);

// console.log(file);
// console.log(newFile);