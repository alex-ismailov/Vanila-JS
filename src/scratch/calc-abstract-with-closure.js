function Calc (config = {}) {
  this.sum = (a, b) => a + b;
  this.sub = (a, b) => a - b;
  this.mult = (a, b) => a * b;
  this.div = (a, b) => a / b;
}

const MakeCalc = (config = {}) => {
  const sum = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => a / b;

  return {
    sum,
    sub,
    mult,
    div
  };
};

const MakeCalcOnMsg = (config = {}) => {
  const operation = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b,
  };

  return (a, b, msg) => operation[msg](a, b);
};

const calc1 = new Calc();
console.log(calc1.sum(10, 10));

const calc2 = MakeCalc();
console.log(calc2.sum(10, 10));

const calcOnMsg = MakeCalcOnMsg();
console.log(calcOnMsg(10, 10, 'sum'));

const calcOnMsg2 = (() => {
  const operation = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b,
  };

  return (a, b, msg) => operation[msg](a, b);
})();
console.log(calcOnMsg2(10, 10, 'sum'));