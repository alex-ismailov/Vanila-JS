const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
  };
};

const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');

/* testing */
let l = cons(1, cons(3, 4));
console.log(car(l));
console.log(car(cdr(l)));

