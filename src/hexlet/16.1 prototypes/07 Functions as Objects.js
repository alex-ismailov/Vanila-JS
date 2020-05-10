const func = (name) => `hello, ${name}`;
console.log(typeof func);
console.log(func instanceof Object);
console.log(func.name);
console.log(func.length);
console.log(func.toString());
console.log(func.wrongProperty);

class Node {
  constructor(name) {
    this.name = name;
  }
}

function Node2(name) {
  this.name = name;
}

const node = new Node('Alex');
const node2 = new Node2('Node 2');
console.log(node.name);
console.log(node2.name);

console.log(`Node.name: ${Node.name}`);
console.log();

// TypeError: (intermediate value) is not a constructor
// console.log(new ((name) => this.name = name));

const node3 = new (function (name) {this.name = name})('Node 3'); // Node 3
console.log(node3.name);

console.log('*************');

/* Представление работы опреатора new */
function Node3(name) {
  this.name = name;
}

function New(Constructor, args) {
  const obj = {};
  Constructor.apply(obj, args);
  return obj;
}

const node4 = New(Node3, ['Node 4']);
console.log(node4.name); // Node 4


/* apply vs call */
const sum = (a, b) => a + b;

console.log(sum.apply(null, [5, 9]));
console.log(sum.call(null, 5, 9));

const min = Math.min.apply(null, [5, 9, 100, 3]);
console.log(min);

/* Но теперь есть оператор ...spread, вместо приема с импольз. apply() */
const args = [5, 9, 100, 3];
const min2 = Math.min(...args);
console.log(min2); // 3
