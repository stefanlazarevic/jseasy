const is_number = require('./is_number');

/**
 * A function that determines whether the passed value is integer.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is an integer, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_integer(4); // => true
 * is_integer(4.0); // => true
 * is_integer(4.0001); // => false
 */
function is_integer(value) {
    return is_number(value) ? (value << 0) === value : false;
}

module.exports = is_integer;
