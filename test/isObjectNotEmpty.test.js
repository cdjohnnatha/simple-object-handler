const PersonBuilder = require('./__mocks__/person-classes/personBuilder');
const { isObjectNotEmpty } = require('../lib/simple-object-handler');

describe('isObjectNotEmpty function test', () => {
  test('Passing object with params it should return true', () => {
    const person = new PersonBuilder('test', 'testing').build();
    expect(isObjectNotEmpty(person)).toBe(true);
  });

  test('Passing object without params it should return false', () => {
    expect(isObjectNotEmpty({})).toBe(false);
  });

  test('Passing null it should return false', () => {
    expect(isObjectNotEmpty(null)).toBe(false);
  });

  test('Passing undefined it should return false', () => {
    expect(isObjectNotEmpty(undefined)).toBe(false);
  });

});