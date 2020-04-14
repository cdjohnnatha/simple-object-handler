const PersonBuilder = require('./__mocks__/person-classes/personBuilder');
const { countObjectKeys } = require('../lib/simple-object-handler');


describe('countObjectKeys function test', () => {
  test('Passing object with params it should return all values from an object', () => {
    const person = new PersonBuilder('test', 'testing').buildEmptyAddress().build();
    expect(countObjectKeys(person)).toBeGreaterThan(1);
  });

  test('Passing object without params it should return 0', () => {
    expect(countObjectKeys({})).toBe(0);
  });

  test('Passing null it should return 0', () => {
    expect(countObjectKeys(null)).toBe(0);
  });

  test('Passing undefined it should return 0', () => {
    expect(countObjectKeys(undefined)).toBe(0);
  });

  test('Passing array it should return 0', () => {
    expect(countObjectKeys([])).toBe(0);
  });

});