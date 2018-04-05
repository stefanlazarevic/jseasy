const length = require('../Utility/length');
const is_string = require('../Assertion/is_string');
const is_object = require('../Assertion/is_object');
const is_array = require('../Assertion/is_array');
const is_defined = require('../Assertion/is_defined');
const is_function = require('../Assertion/is_function');

/**
 * A collection of object manipulating functions.
 * @module Object
 */

/**
 * Retrieves the value of a specified property from provided object.
 *
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
 * object_pluck('address.area.name', person);
 * // => 'Cukarica'
 *
 * object_pluck('address.name.area', person);
 * // => undefined
 */
function object_pluck(key, object) {
    const numberOfArguments = length(arguments);

    if (!is_string(key)) {
        // E.throwStringTypeError(key);
    }

    if (numberOfArguments === 1) {
        return function getObject(_object) {
            if (!is_object(_object)) {
                // E.throwObjectTypeError(_object);
            }

            return _deepAccessPluck(_object, key);
        };
    }

    if (!is_object(object)) {
        // E.throwObjectTypeError(object);
    }

    return _deepAccessPluck(object, key);

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
    function _deepAccessPluck(object, key) {
        return key.split('.').reduce(function checkExistence(deepObject, key) {
            if (deepObject && key in deepObject) {
                return deepObject[key];
            }
        }, object);
    }
}

/**
 * The object_keys function returns an array of a given object's own enumerable properties.
 *
 * @param {Object} object The object to query.
 * @return {Array} Returns the array of property names.
 * @example
 * const person = {
 *     fname: 'Stefan',
 *     lname: 'Lazarevic',
 * };
 *
 * object_keys(person);
 * // => ['fname', 'lname']
 */
function object_keys(object) {
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

/**
 * Creates an array of the own enumerable property values of object.
 *
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
function object_values(object) {
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

    // E.throwObjectTypeError(object);
}

/**
 * Creates an object composed of the inverted keys and values of object.
 * If object contains duplicate values, and subsequent values overwrite property assignments of previous values.
 *
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
function object_invert(object) {
    if (is_object(object)) {
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

    // E.throwObjectTypeError(object);
}

module.exports = {
    object_pluck,
    object_keys,
    object_values,
    object_invert
};
