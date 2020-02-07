import { l, isEmpty, head, tail, cons, concat, filter, isList, toString as listToString } from '@hexlet/pairs-data';
import { length } from './110 p - 2-2-1 - length';

const countLeaves = (sequnce) => {
  if (isEmpty(sequnce)) {
    return 0;
  }
  if (isList(head(sequnce))) {
    return countLeaves(head(sequnce)) + countLeaves(tail(sequnce));
  }
  return 1 + countLeaves(tail(sequnce));
};


/* testing */
const tree = l(l(1, 2), 3, 4, l(5, 6, 7));
console.log(listToString(tree));
console.log(length(tree));
console.log(countLeaves(tree));
