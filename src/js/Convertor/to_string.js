const is_objectLike = require('../Assertion/is_objectLike');
const is_symbol = require('../Assertion/is_symbol');
const not = require('../Logic/not');

/**
 * A function that converts any value in their representative string.
 *
 * @param {*} value Value to convert.
 * @returns {String} Converted string.
 * @since 0.1.0
 * @example
 *
 */
function to_string(value) {
    if (not(arguments.length)) {
        return '';
    }

    if (is_objectLike(value)) {
        return JSON.stringify(value);
    }

    return is_symbol(value) ? value.toString() : '' + value;
}

module.exports = to_string;