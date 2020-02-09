import { isList } from '@hexlet/pairs-data';
import { lMap } from './lmap';

const tMap = (fn, tree) => lMap((elem) => {
  if (isList(elem)) {
    return tMap(fn, elem);
  }
  return fn(elem);
}, tree);

export default tMap;
