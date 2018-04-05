const typeOf = require('../Utility/typeOf');

/**
 * Throw new TypeError with invalid message.
 *
 * @param {String} expected
 * @param {*} actual
 * @since 0.1.0
 * @throws {TypeError}
 */
function throwTypeError(expectedType) {
    /* istanbul ignore next */
    if (typeOf(expectedType) !== 'string') {
        throwTypeError('string', expectedType);
    }

    return function(value) {
        throw new TypeError(`Expected '${expectedType}' but instead received '${typeOf(value)}'.`);
    };
}

module.exports = throwTypeError;
