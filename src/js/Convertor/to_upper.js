const is_string = require('../Assertion/is_string');
const throwStringTypeError = require('../Errors/stringTypeError');

/**
 * Returns a string equal in length to the length of the result of converting this object to a string.
 * The result is a string value, not a String object.
 *
 * @memberof module:Convertor
 * @param {String} str String to transform.
 * @returns {String} Uppercased string.
 * @since 0.1.0
 * @example
 * to_upper('abc'); // => 'ABC'
 */
function to_upper(str) {
    if (is_string(str)) {
        return str.toUpperCase();
    }

    throwStringTypeError(str);
}

module.exports = to_upper;
