const is_object = require('../Assertion/is_object');
const is_array = require('../Assertion/is_array');
const is_defined = require('../Assertion/is_defined');
const is_function = require('../Assertion/is_function');
const throwObjectTypeError = require('../Errors/objectTypeError');

/**
 * Creates an object composed of the inverted keys and values of object.
 * If object contains duplicate values, and subsequent values overwrite property assignments of previous values.
 *
 * @memberof module:Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @throws {TypeError}
 * @example
 * const person = {
 *     fname: 'Stefan',
 *     lname: 'Lazarevic',
 * };
 *
 * object_invert(person);
 * // => {
 * //        Stefan: 'fname',
 * //        Lazarevic: 'lname',
 * //    }
 */
function invert(object) {
    if (is_object(object) || is_array(object)) {
        const invertedObject = {};
        let key;
        for (key in object) {
            /* istanbul ignore next */
            if (object.hasOwnProperty(key)) {
                const value = object[key];
                if (is_defined(value) && !is_function(value)) {
                    invertedObject[value] = key;
                }
            }
        }

        return invertedObject;
    }

    throwObjectTypeError(object);
}

module.exports = invert;
