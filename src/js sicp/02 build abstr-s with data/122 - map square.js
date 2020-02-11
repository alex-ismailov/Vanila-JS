import { 
  l, toString as listToString,
} from '@hexlet/pairs-data';
import { lMap } from "../../myLib/lmap";

const list = l(1, 2, 3, 4, 5)
const res = lMap((n) => n ** 2, list);

/* testing */
console.log(listToString(res));
