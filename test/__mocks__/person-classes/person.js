const { name, ...faker } = require('faker');

class Person {
  constructor(builder) {
    this._firstName = builder._firstName;
    this._lastName = builder._lastName;
    this._address = builder._address;
  }

  get name() {
    return `${this._firstName} ${this._lastName}`;
  }
  
  get address() {
    return this._address;
  }
}

module.exports = Person;
