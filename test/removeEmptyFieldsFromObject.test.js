const { removeEmptyFieldsFromObject } = require('../index');
const PersonBuilder = require('./__mocks__/person-classes/personBuilder');

let person = null;

let complexObject = {
  _firstName: 'great',
  _lastName: null,
  parents: [
    {
      ...new PersonBuilder('firstPerson').build(),
    },
    {
      ...new PersonBuilder('firstPerson').build(),
    },
  ],
  house: {
    _elementTest: {
      _elementDeep: {
        _secondDeeper: null,
      },
    },
  },
  test: {
    _elementTest: {
      _elementDeep: {
        _secondDeeper: null,
      },
      shouldKeep: 'keep',
    },
  },
};

describe('removeEmptyFieldsFromObject', () => {
  beforeEach(() => {
    person = new PersonBuilder('test').buildEmptyAddress().build();
  });
  test('remove address field from person object', () => {
    person = removeEmptyFieldsFromObject(person);
    expect(person).toHaveProperty('address', undefined);
    expect(person).toHaveProperty('_lastName', undefined);
    expect(person).toHaveProperty('_firstName');
  });

  test('Using nested complexObject', () => {
    const complextResult = removeEmptyFieldsFromObject(complexObject);
    expect(complextResult).toHaveProperty('test', { _elementTest: { shouldKeep: 'keep' } });
    expect(complextResult).toHaveProperty('parents', [
      { _firstName: 'firstPerson' },
      { _firstName: 'firstPerson' },
    ]);
    expect(complextResult).toHaveProperty('_firstName', 'great');
    expect(complextResult).not.toHaveProperty('house');
  });
});
