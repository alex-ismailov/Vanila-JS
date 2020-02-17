import { l, isEmpty, tail } from "@hexlet/pairs-data";

const length = (seq) => {
  const iter = (curr, acc) => (
    isEmpty(curr)
      ? acc
      : iter(tail(curr), acc + 1)
  );
  return iter(seq, 0);
};

/* testing */
const list = l(10, 20, 30, 40, 50);
console.log(length(list)); // 5
