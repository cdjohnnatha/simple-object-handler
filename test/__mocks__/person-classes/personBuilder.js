const { address } = require('faker');
const Person = require('./person');

class personBuilder {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  buildEmptyAddress() {
    this._address = {};
    return this;
  }

  buildRandomCityAndStreetAddress() {
    this._address = {
      city: address.city(),
      streetName: address.streetAddress(),
    };
    return this;
  }

  setCity(city) {
    this._address.city = city;
    return this;
  }
 
  setStreetName(streetName) {
    this._address.streetName = streetName;
    return this;
  }

  build() {
    return new Person(this);
  }
}

module.exports = personBuilder;