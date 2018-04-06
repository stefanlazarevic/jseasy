const is_string = require('../Assertion/is_string');
const throwStringTypeError = require('../Errors/stringTypeError');

/**
 * Returns a string equal in length to the length of the result of converting this object to a string.
 * The result is a string value, not a String object.
 *
 * @memberof module:Convertor
 * @param {String} str String to transform.
 * @returns {String} Lowercased string.
 * @since 0.1.0
 * @example
 * to_lower('ABC'); //=> 'abc'
 */
function to_lower(str) {
    if (is_string(str)) {
        return str.toLowerCase();
    }

    throwStringTypeError(str);
}

module.exports = to_lower;
