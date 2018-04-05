const throwTypeError = require('./typeError');

/**
 * Composed throwTypeError function.
 * Throw error with string type message.
 *
 * @param {*} value
 * @throws {TypeError}
 * @since 0.1.0
 */
module.exports = throwTypeError('string');
