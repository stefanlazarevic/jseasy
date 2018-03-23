const T = require('../types/types');
const U = require('../utility/utility');
const E = require('../errors/errors');
const { array_rest } = require('../array/array');

/**
 * The string_trim() method returns the string stripped of whitespace from both ends.
 * string_trim() does not affect the value of the * string itself.
 *
 * Example usage:
 *
 * string_trim("  Stefan Lazarevic   ") => "Stefan Lazarevic"
 *
 * @param {String} value
 * @return {String}
 */
function string_trim(value) {
    if (T.is_string(value)) {
        return value.replace(/^\s+|\s+$/g, '');
    }

    E.throwStringTypeError(value);
}

/**
 * Return received string with first letter in uppercase.
 *
 * @param {String} value
 * @return {String}
 */
function string_capitalize(value) {
    if (T.is_string(value)) {
        return value.replace(/^\w/, function (character) {
            return character.toUpperCase();
        });
    }

    /* istanbul ignore next */
    E.throwStringTypeError(value);
}

module.exports = {
    string_trim,
    string_capitalize,
};
