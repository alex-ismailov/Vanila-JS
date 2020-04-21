/* Ниже код обычной абстракции на JavaScript: */
function Company(name, email) {
  this.name = name;
  this.email = email;
}

Company.prototype.getName = function getName() {
  return this.name;
}

Company.prototype.getEmail = function getEmail() {
  return this.email;
}

Company.prototype.setEmail = function setEmail(email) {
  this.email = email;
}

const company1 = new Company('Hexlet', 'hexlet@mail.com');
console.log(company1.getName()); // => "Hexlet"
console.log(company1);
console.log('*****');

/* Этот код можно представить классом: */
class Company2 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  
  getEmail() {
    return this.email;
  }
  
  setEmail(email) {
    this.email = email;
  }
}

const company2 = new Company2('Hexlet 2', '2@2.com');
console.log(company2.getName()); // => "Hexlet 2"
console.log(company2.getEmail()); // => "2@2.com"
console.log(company2);
console.log('*****');

class Company3 {
  name = 'default name';
  email = 'default email';

  // constructor(name, email) {
  //   this.name = name;
  //   this.email = email;
  // }

  getName() {
    return this.name;
  }
  
  getEmail() {
    return this.email;
  }
  
  setEmail(email) {
    this.email = email;
  }
}

const company3 = new Company3('Hexlet 3', '33@33.com');
console.log(company3.getName()); // => "Hexlet 3"
console.log(company3.getEmail()); // => "33@33.com"
console.log(company3);
console.log('*****');
const company4 = new Company3();
console.log(company4.getName()); // => ""
console.log(company4.getEmail()); // => ""
console.log(company4);
console.log('*****');
