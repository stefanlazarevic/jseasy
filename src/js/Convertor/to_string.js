const is_objectLike = require('../Assertion/is_objectLike');
const is_symbol = require('../Assertion/is_symbol');
const is_regexp = require('../Assertion/is_regexp');
const not = require('../Logic/not');

/**
 * A function that converts any value in their representative string.
 *
 * @memberof module:Convertor
 * @param {*} value Value to convert.
 * @returns {String} Converted string.
 * @since 0.1.0
 * @example
 * to_string([1, 2, 3]); // => "[1,2,3]"
 * to_string({}); // => "{}"
 * to_string(123); // => "123"
 */
function to_string(value) {
    if (not(arguments.length)) {
        return '';
    }

    if (is_regexp(value)) {
        return '' + value;
    }

    if (is_objectLike(value)) {
        return JSON.stringify(value);
    }

    return is_symbol(value) ? value.toString() : '' + value;
}

module.exports = to_string;
