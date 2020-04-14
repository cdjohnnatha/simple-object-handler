const Person = require('./person');

const personFactory = (firstName, lastName, withAddress = false, address) => {
  let person = null;
  if (withAddress) {
    person = new Person(firstName, lastName, address);
  } else {
    person = new Person(firstName, lastName, {});
  }

  return person;
}

module.exports = personFactory;