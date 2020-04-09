/**
 * @function isObjectEmpty
 * @description it will check if object is valid, not null and has elements/params on it.
 * @param {Object} object 
 * @result {Bool}
 */
const isObjectEmpty = (element) => !(element && Object.values(element).length > 0);

const getObjectKeys = (object) => object && !isObjectEmpty(object) ? Object.keys(object) : object;

const getObjectValues = (object) => object && !isObjectEmpty(object) ? Object.values(object) : object;

const getObjectKeysSize = (object) => !isObjectEmpty(object) ? getObjectKeys(object).length : 0;

/**
 * @function removeEmptyFieldsFromObject
 * @description It will remove the empty string/null/undefined fields from object.
 * @param {Object} element
 */
const removeEmptyFieldsFromObject = (element) => {
  if (element && Object.keys(element).length >= 1) {
    Object.keys(element).forEach((key) => {
      if (element[key] === undefined) delete element[key];
      else if (element[key] === null) delete element[key];
      else if (element[key] === '') delete element[key];
      // else if (typeof element[key] === 'object' && Object.values(element[key]).length > 0) {
      //   element[key] = removeEmptyFieldsFromObject(element[key]);
      // } 
      else if (typeof element[key] === 'object' && Object.values(element[key]).length === 0) {
        delete element[key];
      }
    });
  }

  return element;
};