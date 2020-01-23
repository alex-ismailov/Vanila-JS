const gameField = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

gameField[1][2] = 'x';

const check = (field, symbol) => {
  for (const row of field) {
    if (row.includes(symbol)) {
      return true;
    }
  }
  return false;
};

console.log(check(gameField, 'x'));
console.log(check(gameField, '0'));
