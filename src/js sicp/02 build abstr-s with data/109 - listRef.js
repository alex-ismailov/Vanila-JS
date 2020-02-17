import { l, head, tail, toString as listToString } from "@hexlet/pairs-data";

const listRef = (items, n) => (
  0 === n
    ? head(items)
    : listRef(tail(items), n - 1)
);

/* testing */
const list = l(1, 2, 3, 4, 5);
console.log(listToString(listRef(list, 4)));
console.log(listToString(listRef(list, 2)));
console.log(listToString(listRef(list, 0)));
