/**
 * A function that determines whether the passed value is an boolean.
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is an boolean, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_boolean(false) // => true
 * is_boolean(0); // => false
 */
function is_boolean(value) {
    return typeof value === 'boolean';
}

module.exports = is_boolean;
