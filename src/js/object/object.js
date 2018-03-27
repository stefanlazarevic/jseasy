const T = require('../types/types');
const E = require('../errors/errors');
const { length } = require('../utility/utility');

/**
 * Retrieves the value of a specified property from provided object.
 *
 * @param {string} key
 * @param {object} object
 */
function object_pluck(key, object) {
    const numberOfArguments = length(arguments);


    if (!T.is_string(key)) {
        E.throwStringTypeError(key);
    }

    if (numberOfArguments === 1) {
        return function getObject(_object) {
            if (!T.is_object(_object)) {
                E.throwObjectTypeError(_object);
            }

            return _object[key];
        };
    }

    if (!T.is_object(object)) {
        E.throwObjectTypeError(object);
    }

    return object[key];
}

/**
 * The object_keys function returns an array of a given object's own enumerable properties.
 *
 * @param {Object} object
 * @return {Array}
 */
function object_keys(object) {
    if (T.is_object(object) || T.is_array(object) || T.is_string(object)) {
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

module.exports = {
    object_pluck,
    object_keys
};
