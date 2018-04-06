const throwTypeError = require('./typeError');

/**
 * Composed throwTypeError function.
 * Throw error with string type message.
 *
 * @memberof module:Errors
 * @param {*} value
 * @throws {TypeError}
 * @since 0.1.0
 */
const throwObjectTypeError = throwTypeError('object');

module.exports = throwObjectTypeError;
