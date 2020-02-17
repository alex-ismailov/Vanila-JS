import {
  l, isEmpty, isList, cons, head, tail, concat,
} from '@hexlet/pairs-data';

/* ******************* map ******************** */
const lMap = (fn, items) => (
  isEmpty(items)
    ? l()
    : cons(fn(head(items)), lMap(fn, tail(items)))
);

const tMap = (fn, tree) => lMap((elem) => {
  if (isList(elem)) {
    return tMap(fn, elem);
  }
  return fn(elem);
}, tree);


/* ******************* for each ******************** */
const forEach = (fn, items) => (
  isEmpty(items)
    ? true
    : (fn(head(items)), forEach(fn, tail(items)))
);

/* ******************* filter ******************** */
const lFilter = (predicate, sequence) => {
  if (isEmpty(sequence)) {
    return l();
  }
  if (predicate(head(sequence))) {
    return cons(head(sequence), lFilter(predicate, tail(sequence)));
  }
  return lFilter(predicate, tail(sequence));
};

/* ******************* reduce ******************** */
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
/* ******************* enumerate ******************** */
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

/* ******************* flat ******************** */
const tFlat = (tree) => foldRight((curr, acc) => {
  if (isList(curr)) {
    return concat(tFlat(curr), acc);
  }
  return cons(curr, acc);
}, l(), tree);

/* ******************* reverse ******************** */
const reverse = (seq) => foldLeft((curr, acc) => (
  cons(curr, acc)
), l(), seq);

const deepReverse = (tree) => {
  const reverseIt = (elem) => {
    if (isList(elem)) {
      return deepReverse(elem);
    }
    return elem;
  };
  return foldLeft((curr, acc) => cons(reverseIt(curr), acc), l(), tree);
};

/* ******************** flatMap ********************* */
const flatMap = (fn, seq) => foldRight(concat, l(), lMap(fn, seq));


/* ******************** remove ********************* */
const remove = (elem, set) => lFilter((curr) => curr !== elem, set);

export {
  lMap, tMap, forEach, lFilter, lReduce, foldLeft, foldRight, enumerateInterval, enumerateTree, tFlat,
  reverse, deepReverse, flatMap, remove,
};
