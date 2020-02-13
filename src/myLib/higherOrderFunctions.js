import {
  l, isEmpty, isList, cons, head, tail, concat,
} from '@hexlet/pairs-data';

const lMap = (cb, list) => {
  if (isEmpty(list)) {
    return l();
  }
  return cons(
    cb(head(list)),
    lMap(cb, tail(list)),
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

/* *************************************** */
const lReduce = (cb, acc, sequence) => {
  if (isEmpty(sequence)) {
    return acc;
  }
  return lReduce(cb, cb(head(sequence), acc), tail(sequence));
};

/* foldLeft is the same as lReduce */
const foldLeft = (cb, acc, sequence) => {
  if (isEmpty(sequence)) {
    return acc;
  }
  return foldLeft(cb, cb(head(sequence), acc), tail(sequence));
};

const foldRight = (cb, acc, sequence) => {
  if (isEmpty(sequence)) {
    return acc;
  }
  return cb(head(sequence), foldRight(cb, acc, tail(sequence)));
};
/* *************************************** */

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

const tFlat = (tree) => foldRight((curr, acc) => {
  if (isList(curr)) {
    return concat(tFlat(curr), acc);
  }
  return cons(curr, acc);
}, l(), tree);

export {
  lMap, lFilter, lReduce, foldLeft, foldRight, enumerateInterval, enumerateTree, tFlat,
};
