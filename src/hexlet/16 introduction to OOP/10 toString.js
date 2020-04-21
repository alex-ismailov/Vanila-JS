const company = { name: 'Hexlet' };
console.log(company);
console.log(company.toString());
console.log(`Hello, ${company}`);
console.log('****************');

const company2 = {
  name: 'Smile',
  toString() {
    return this.name;
  },
};

console.log(company2);
console.log(company2.toString());
console.log(`Hello, ${company2}`);
console.log('****************');

function Company3(name) {
  this.name = name;
}
Company3.prototype.toString = function toString() {
  return this.name;
}
const company3 = new Company3('Hexlet3');
console.log(company3);
console.log(company3.toString());
console.log(`Hello, ${company3}`);
console.log('****************');

console.log(JSON.stringify(company3));
