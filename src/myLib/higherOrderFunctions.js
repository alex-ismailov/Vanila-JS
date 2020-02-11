import {
  l, isEmpty, isList, cons, head, tail, concat,
} from '@hexlet/pairs-data';

const lMap = (fn, list) => {
  if (isEmpty(list)) {
    return l();
  }
  return cons(
    fn(head(list)),
    lMap(fn, tail(list)),
  );
};

const lFilter = (predicate, sequence) => {
  if (isEmpty(sequence)) {
    return l();
  }
  if (predicate(head(sequence))) {
    return cons(head(sequence), lFilter(predicate, tail(sequence)));
  }
  return lFilter(predicate, tail(sequence));
};

const lReduce = (cb, acc, sequence) => {
  if (isEmpty(sequence)) {
    return acc;
  }
  return lReduce(cb, cb(head(sequence), acc), tail(sequence));
};

const enumerateInterval = (low, high) => {
  if (low > high) {
    return l();
  }
  return cons(low, enumerateInterval(low + 1, high));
};

const enumerateTree = (tree) => {
  if (isEmpty(tree)) {
    return l();
  }
  if (isList(head(tree))) {
    return concat(enumerateTree(head(tree)), enumerateTree(tail(tree)));
  }
  return cons(head(tree), enumerateTree(tail(tree)));
};

export {
  lMap, lFilter, lReduce, enumerateInterval, enumerateTree,
};
