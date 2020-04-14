const PersonBuilder = require('./__mocks__/person-classes/personBuilder');
const { isParamEmpty } = require('../lib/simple-object-handler');


describe('countObjectKeys function test', () => {
  test('Using valid param value it should return false', () => {
    const person = new PersonBuilder('test', 'testing').buildEmptyAddress().build();
    expect(isParamEmpty(person._firstName)).toBe(false);
  });

  test('Using invalid param value it should return true', () => {
    const person = new PersonBuilder('test', 'testing').buildEmptyAddress().build();
    expect(isParamEmpty(person.house)).toBe(true);
  });

  test('Undefined value it should return true', () => {
    expect(isParamEmpty(undefined)).toBe(true);
  });

  test('Using null value it should return true', () => {
    expect(isParamEmpty(null)).toBe(true);
  });


  test('Passing array it should return false', () => {
    expect(isParamEmpty([])).toBe(false);
  });

  test('Passing string it should return false', () => {
    expect(isParamEmpty('asd')).toBe(false);
  });

  test('Passing empty string it should return false', () => {
    expect(isParamEmpty('asd')).toBe(false);
  });

  test('Passing number it should return false', () => {
    expect(isParamEmpty(123)).toBe(false);
  });

  test('Passing float it should return false', () => {
    expect(isParamEmpty(1.23)).toBe(false);
  });


  test('Using valid object as param value it should return false', () => {
    const person = new PersonBuilder('test', 'testing').buildEmptyAddress().build();
    expect(isParamEmpty(person.address)).toBe(false);
  });

  test('Using valid object as param value it should return false', () => {
    expect(isParamEmpty({})).toBe(false);
  });
});