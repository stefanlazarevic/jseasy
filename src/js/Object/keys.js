const is_string = require('../Assertion/is_string');
const is_object = require('../Assertion/is_object');
const is_array = require('../Assertion/is_array');

/**
 * The object_keys function returns an array of a given object's own enumerable properties.
 *
 * @memberof module:Object
 * @param {Object} object The object to query.
 * @return {Array} Returns the array of property names.
 * @example
 * const person = {
 *     fname: 'Stefan',
 *     lname: 'Lazarevic',
 * };
 *
 * keys(person);
 * // => ['fname', 'lname']
 */
function keys(object) {
    if (is_object(object) || is_array(object) || is_string(object)) {
        const keys = [];
        let key;
        for (key in object) {
            /* istanbul ignore next */
            if (object.hasOwnProperty(key)) {
                keys.push(key);
            }
        }

        return keys;
    }

    return [];
}

module.exports = keys;
