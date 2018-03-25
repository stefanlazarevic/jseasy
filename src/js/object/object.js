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

module.exports = {
    object_pluck,
};
