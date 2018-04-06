const is_nan = require('../Assertion/is_nan');
const is_array = require('../Assertion/is_array');
const is_null = require('../Assertion/is_null');
const is_regexp = require('../Assertion/is_regexp');

/**
 * Return type of provided value.
 * Prevent pitfall types such as NaN, null, []
 *
 * @memberof module:Utility
 * @param {mix} [value = 'undefined'] Checked value.
 * @returns {String} A type of value.
 * @since 0.1.0
 * @example
 * type(null)
 * // => 'null'
 * @example
 * type([1, 2, 3])
 * // => 'array'
 * @example
 * type(NaN)
 * // => 'NaN
 */
function typeOf(value) {
    if (is_nan(value)) {
        return 'nan';
    }

    if (is_array(value)) {
        return 'array';
    }

    if (is_null(value)) {
        return 'null';
    }

    if (is_regexp(value)) {
        return 'regexp';
    }

    return typeof value;
}

module.exports = typeOf;
