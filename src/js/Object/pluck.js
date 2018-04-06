const length = require('../Utility/length');
const is_string = require('../Assertion/is_string');
const is_object = require('../Assertion/is_object');
const throwObjectTypeError = require('../Errors/objectTypeError');
const throwStringTypeError = require('../Errors/stringTypeError');
const not = require('../Logic/not');

/**
 * Retrieves the value of a specified property from provided object.
 *
 * @memberof module:Object
 * @param {String} key
 * @param {Object} object
 * @throws {TypeError}
 * @example
 * const person = {
 *     name: 'Stefan',
 *     address: {
 *         city: 'Belgrade',
 *         area: {
 *             name: 'Cukarica',
 *         }
 *     }
 * };
 *
 * pluck('address.area.name', person);
 * // => 'Cukarica'
 *
 * pluck('address.name.area', person);
 * // => undefined
 */
function pluck(key, object) {
    const numberOfArguments = length(arguments);

    if (not(is_string(key))) {
        throwStringTypeError(key);
    }

    if (numberOfArguments === 1) {
        return function getObject(_object) {
            if (not(is_object(_object))) {
                throwObjectTypeError(_object);
            }

            return object_pluck(_object, key);
        };
    }

    if (not(is_object(object))) {
        throwObjectTypeError(object);
    }

    return object_pluck(object, key);

    /**
     * Extract value from an deep nested object.
     *
     * @private
     * @param {Object} object
     * @param {String} key Key or nested key path in the object.
     * @example
     * const person = {
     *     name: 'Stefan',
     *     address: {
     *         city: 'Belgrade',
     *         area: {
     *             name: 'Cukarica',
     *         }
     *     }
     * };
     * _deepAccessPluck(person, 'address.area.name')
     * // => 'Cukarica'
     * _deepAccessPluck(person, 'address.city.area.name')
     * // => undefined
     */
    function object_pluck(object, key) {
        return key.split('.').reduce(function checkExistence(deepObject, key) {
            if (deepObject && key in deepObject) {
                return deepObject[key];
            }
        }, object);
    }
}

module.exports = pluck;
