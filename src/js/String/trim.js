const is_string = require('../Assertion/is_string');
const throwStringTypeError = require('../Errors/stringTypeError');

/**
 * The string_trim() method returns the string stripped of whitespace from both ends.
 * string_trim() does not affect the value of the * string itself.
 *
 * @memberof module:String
 * @param {String} value String value to trim.
 * @return {String} Trimmed string.
 * @since 0.1.0
 * @example
 * trim("  Stefan Lazarevic   "); // => "Stefan Lazarevic"
 */
function trim(value) {
    if (is_string(value)) {
        return value.replace(/^\s+|\s+$/g, '');
    }

    throwStringTypeError(value);
}

module.exports = trim;
