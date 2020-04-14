const PersonBuilder = require('./__mocks__/person-classes/personBuilder');
const { isObjectEmpty } = require('../lib/simple-object-handler');

describe('isObjectEmpty function test', () => {
  test('Passing object with params it should return false', () => {
    const person = new PersonBuilder('test', 'testing').build();
    expect(isObjectEmpty(person)).toBe(false);
  });

  test('Passing object without params it should return true', () => {
    expect(isObjectEmpty({})).toBe(true);
  });

  test('Passing null it should return true', () => {
    expect(isObjectEmpty(null)).toBe(true);
  });

  test('Passing undefined it should return true', () => {
    expect(isObjectEmpty(undefined)).toBe(true);
  });

});