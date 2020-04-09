/**
 * @function isObjectEmpty
 * @description it will check if object is valid, not null and has elements/params on it.
 * @param {Object} object
 * @result {Bool}
 */
const isObjectEmpty = (element) => !(element && Object.values(element).length > 0);

/**
 * @function objectKeys
 * @description This function it will return an array with all keys names from the object.
 * @param {Object} object - Object which will be returned an array of their keys.
 */
const objectKeys = (object) => (!isObjectEmpty(object) ? Object.keys(object) : object);

/**
 * @function objectValues
 * @description It will return an array of all values from object.
 * @param {Object} object - Any object.
 */
const objectValues = (object) => (!isObjectEmpty(object) ? Object.values(object) : object);

/**
 * @function countObjectKeys
 * @description It will count the quantity of object keys.
 * @param {Object} object - Any object.
 */
const countObjectKeys = (object) => (!isObjectEmpty(object) ? objectKeys(object).length : 0);

/**
 * @function countObjectValues
 * @description It will count the quantity of object keys.
 * @param {Object} object - Any object.
 */
const countObjectValues = (object) => (!isObjectEmpty(object) ? objectValues(object).length : 0);

/**
 * @function isObject
 * @description It will verify if typeof is object.
 * @param {Object} object - Any Object
 * @returns {Boolean}
 */
const isObject = (object) => typeof object === 'object';

/**
 * @function isObjectParamEmpty
 * @description It will verify if a variable is undefined or null or empty string.
 * @param param - Any variable.
 * @returns {Boolean}
 */
const isObjectParamEmpty = (param) => param === undefined || param === null || param === '';

/**
 * @function removeEmptyFieldsFromObject
 * @description It will remove the empty params from object considering in a manner of cleaning
 * the results. Ex: object[key] === string || null || undefined it will be removed from object and if
 * the object is empty in the end, it will return null. This function it uses recursion, so it will
 * be verified in very the the object.
 * @param {Object} element
 */
const removeEmptyFieldsFromObject = (element) => {
  if (!isObjectEmpty(element) && countObjectKeys(element) >= 1) {
    objectKeys(element).forEach((key) => {
      if (isObjectParamEmpty(element[key])) delete element[key];
      else if (isObject(element[key]) && countObjectValues(element[key]) > 0) {
        element[key] = removeEmptyFieldsFromObject(element[key]);
      } else if (isObject(element[key]) && countObjectValues(element[key]) === 0) {
        delete element[key];
      }
    });
  }

  return element;
};

module.exports = {
  isObjectEmpty,
  objectKeys,
  objectValues,
  countObjectKeys,
  countObjectValues,
  isObject,
  isObjectParamEmpty,
  removeEmptyFieldsFromObject,
};
