const PersonBuilder = require('./__mocks__/person-classes/personBuilder');
const { isObject } = require('../lib/simple-object-handler');


describe('countObjectKeys function test', () => {
  test('Passing class it should return true', () => {
    const person = new PersonBuilder('test', 'testing').buildEmptyAddress().build();
    expect(isObject(person)).toBe(true);
  });

  test('Passing object should return true', () => {
    expect(isObject({})).toBe(true);
  });

  test('Passing null it should return false', () => {
    expect(isObject(null)).toBe(false);
  });

  test('Passing undefined it should return false', () => {
    expect(isObject(undefined)).toBe(false);
  });

  test('Passing array it should return false', () => {
    expect(isObject([])).toBe(false);
  });

  test('Passing string it should return false', () => {
    expect(isObject('asd')).toBe(false);
  });

  test('Passing empty string it should return false', () => {
    expect(isObject('asd')).toBe(false);
  });

  test('Passing number it should return false', () => {
    expect(isObject(123)).toBe(false);
  });

  test('Passing float it should return false', () => {
    expect(isObject(1.23)).toBe(false);
  });
});