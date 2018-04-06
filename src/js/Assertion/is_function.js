/**
 * A function that determines whether the passed value is an function.
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is an function, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_function(is_boolean) // => true
 */
function is_function(value) {
    return typeof value === 'function';
}

module.exports = is_function;
