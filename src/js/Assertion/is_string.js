/**
 * A function that determines whether the passed value is an strict string.
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @return {Boolean} `true` if the value is an string, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_string("Hello World!"); // => true
 */
function is_string(value) {
    return typeof value === 'string';
}

module.exports = is_string;
