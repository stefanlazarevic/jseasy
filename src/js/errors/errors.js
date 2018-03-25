const { type } = require('../utility/utility');

/**
 * Throw new TypeError with invalid message.
 *
 * @param {String} expected
 * @param {mix} value
 */
function throwTypeError(expectedType) {
    /* istanbul ignore next */
    if (type(expectedType) !== 'string') {
        throwTypeError('string', expectedType);
    }

    return function(value) {
        throw new TypeError(`Expected '${expectedType}' but instead received '${type(value)}'.`);
    };
}

/**
 * Composed throwTypeError function.
 * Throw error with string type message.
 *
 * @param {mix} value
 */
const throwStringTypeError = throwTypeError('string');

/**
 * Composed throwTypeError function.
 * Throw error with function type message.
 *
 * @param {mix} value
 */
const throwFunctionTypeError = throwTypeError('function');

/**
 * Composed throwTypeError function.
 * Throw error with object type message.
 *
 * @param {mix} value
 */
const throwObjectTypeError = throwTypeError('object');

module.exports = {
    throwTypeError,
    throwStringTypeError,
    throwFunctionTypeError,
    throwObjectTypeError
};
