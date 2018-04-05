/**
 * A function that determines whether the passed value is not a number. (NaN)
 *
 * @param {*} value The value to check.
 * @return {Boolean} `true` if the value is `NaN`, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_nan(1 / 'a'); // => true
 * is_nan('a'); // => false
 */
function is_nan(value) {
    return value !== value;
}

module.exports = is_nan;
