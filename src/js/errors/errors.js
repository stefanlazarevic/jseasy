const { type } = require('../utility/utility');

/**
 * Throw new TypeError with invalid message.
 *
 * @param {String} expected
 * @param {mix} value
 */
function throwTypeError(expectedType) {
    if (type(expectedType) !== 'string') {
        /* istanbul ignore next */
        throwTypeError('string', expectedType);
    }

    return function(value) {
        throw new TypeError(`Expected '${expectedType}' but instead received '${type(value)}'.`);
    }
}

/**
 * Composed throwTypeError function.
 *
 * @param {mix} value
 */
const throwStringTypeError = throwTypeError('string');

module.exports = {
    throwTypeError,
    throwStringTypeError,
};
