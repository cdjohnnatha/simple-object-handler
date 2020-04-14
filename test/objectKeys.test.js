const PersonBuilder = require('./__mocks__/person-classes/personBuilder');
const { objectKeys } = require('../lib/simple-object-handler');

/**
 * @const keys from PersonBuilder
 */
const keys =  ["_firstName", "_lastName", "_address"];

describe('objectKeys function test', () => {
  test('Passing object with params it should return all keys from an object', () => {
    const person = new PersonBuilder('test', 'testing').build();
    expect(objectKeys(person)).toEqual(expect.arrayContaining(keys));
    expect(objectKeys(person).length).toBeGreaterThan(1);
  });

  test('Passing object without params it should return null', () => {
    expect(objectKeys({})).toBeNull();
  });

  test('Passing null it should return null', () => {
    expect(objectKeys(null)).toBeNull();
  });

  test('Passing undefined it should return null', () => {
    expect(objectKeys(undefined)).toBeNull();
  });

  test('Passing array it should return null', () => {
    expect(objectKeys([])).toBeNull();
  });

});