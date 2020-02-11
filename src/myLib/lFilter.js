import { 
  l, head, tail, isEmpty, cons, toString as listToString,
} from '@hexlet/pairs-data';

const lFilter = (predicate, sequence) => {
  if (isEmpty(sequence)) {
    return l();
  }
  if (predicate(head(sequence))) {
    return cons(head(sequence), lFilter(predicate, tail(sequence)));
  }
  return lFilter(predicate, tail(sequence));
};

export default lFilter;
