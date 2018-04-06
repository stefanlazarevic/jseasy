/**
 * A function that determines whether the passed value is an null.
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @return {Boolean} `true` if the value is null, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_null(null); // => true
 * is_null(void 0); // => false
 */
function is_null(value) {
    return value === null;
}

module.exports = is_null;
