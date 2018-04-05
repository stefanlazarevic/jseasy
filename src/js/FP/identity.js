/**
 * Function that takes one argument and does nothing but return the value untouched.
 *
 * @param {*} value Value to be returned.
 * @returns {*} Returns passed value.
 * @since 0.1.0
 * @example
 * identity(10); // => 10
 * identity(undefined); // => undefined
 */
function identity(value) {
    return value;
}

module.exports = identity;
