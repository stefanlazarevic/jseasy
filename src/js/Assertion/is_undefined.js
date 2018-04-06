/**
 * A function that determines whether the passed value is undefined.
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @return {Boolean} `true` if the value is undefined, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_undefined(); // => true
 * is_undefined(void 0); // => true
 * is_undefined(null); // => false
 */
function is_undefined(value) {
    return value === undefined;
}

module.exports = is_undefined;
