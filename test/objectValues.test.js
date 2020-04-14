const PersonBuilder = require('./__mocks__/person-classes/personBuilder');
const { objectValues } = require('../lib/simple-object-handler');

/**
 * @const values from PersonBuilder
 */
const values =  ["test", "testing", {}];

describe('objectValues function test', () => {
  test('Passing object with params it should return all values from an object', () => {
    const person = new PersonBuilder('test', 'testing').buildEmptyAddress().build();
    expect(objectValues(person)).toEqual(expect.arrayContaining(values));
    expect(objectValues(person).length).toBeGreaterThan(1);
  });

  test('Passing object without params it should return null', () => {
    expect(objectValues({})).toBeNull();
  });

  test('Passing null it should return null', () => {
    expect(objectValues(null)).toBeNull();
  });

  test('Passing undefined it should return null', () => {
    expect(objectValues(undefined)).toBeNull();
  });

  test('Passing array it should return null', () => {
    expect(objectValues([])).toBeNull();
  });

});