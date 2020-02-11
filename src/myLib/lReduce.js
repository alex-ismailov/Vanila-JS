import {
  head, tail, isEmpty,
} from '@hexlet/pairs-data';

const lReduce = (cb, acc, sequence) => {
  if (isEmpty(sequence)) {
    return acc;
  }
  return lReduce(cb, cb(head(sequence), acc), tail(sequence));
};

export default lReduce;
