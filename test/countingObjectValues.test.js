const PersonBuilder = require('./__mocks__/person-classes/personBuilder');
const { countObjectValues } = require('../lib/simple-object-handler');


describe('countObjectValues function test', () => {
  test('Passing object with params it should return all values from an object', () => {
    const person = new PersonBuilder('test', 'testing').buildEmptyAddress().build();
    expect(countObjectValues(person)).toBeGreaterThan(1);
  });

  test('Passing object without params it should return 0', () => {
    expect(countObjectValues({})).toBe(0);
  });

  test('Passing null it should return 0', () => {
    expect(countObjectValues(null)).toBe(0);
  });

  test('Passing undefined it should return 0', () => {
    expect(countObjectValues(undefined)).toBe(0);
  });

  test('Passing array it should return 0', () => {
    expect(countObjectValues([])).toBe(0);
  });

});