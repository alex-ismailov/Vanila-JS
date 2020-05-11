function A() {}
function B() {}

//wrong way
// B.prototype = A.prototype;
// right way
B.prototype = Object.create(A.prototype);

B.prototype.color = 'green';
A.prototype.color; // undefined

const obj = new B();
// console.log(Object.getPrototypeOf(obj) === A.prototype); // false

const proto1 = Object.getPrototypeOf(obj);
console.log(proto1); // A { color: 'green' }
const proto2 = Object.getPrototypeOf(proto1);
console.log(proto2); // A {}

/* ************************** */
/* Объект на основе прототипа */
Object.create = function create(protoObj) {
  function F() {};
  F.prototype = protoObj;
  return new F();
}

function A1() {}
function B1() {}

B.prototype = Object.create(A.prototype);
// wrong way
// B.prototype = new A(); так не делают

/* ******** */
/* Линковка */

function F() {}

const obj1 = new F();
const obj2 = new F();

const proto11 = Object.getPrototypeOf(obj1);
const proto22 = Object.getPrototypeOf(obj2);

console.log(proto11 === proto22); // true




console.log('-----------------');
function Foo() {
  return 'hey!';
}

const myObj = new Foo();


console.log(Object.getPrototypeOf(myObj) === Foo); // false
console.log(Object.getPrototypeOf(Object.getPrototypeOf(myObj)) === Foo.prototype); //false
console.log(Object.getPrototypeOf(Object.getPrototypeOf(myObj)) === Object.prototype); // true
console.log(Object.getPrototypeOf(myObj) === Foo.prototype); // true

// console.log(Foo.prototype); // Foo {}
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(myObj)));
// console.log(Object.getPrototypeOf(Object));

console.log(Object.getPrototypeOf(Object.prototype));