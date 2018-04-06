const is_object = require('../Assertion/is_object');

/**
 * Creates an array of the own enumerable property values of object.
 *
 * @memberof module:Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @throws {TypeError}
 * @example
 * const person = {
 *     fname: 'Stefan',
 *     lname: 'Lazarevic',
 * };
 *
 * object_values(person);
 * // => ['Stefan', 'Lazarevic']
 */
function values(object) {
    if (is_object(object)) {
        const values = [];
        let key;

        for (key in object) {
            /* istanbul ignore next */
            if (object.hasOwnProperty(key)) {
                values.push(object[key]);
            }
        }

        return values;
    }

    return [];
}

module.exports = values;
