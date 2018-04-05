/**
 * A function that converts truthy value into boolean `true` and falsy into boolean `false`.
 *
 * @param {*} value Value to convert.
 * @returns {Boolean} Boolean representation of a provided value.
 * @since 0.1.0
 * @example
 * to_boolean({}); // => true
 * to_boolean([]); // => true
 * to_boolean("Hello"); // => true
 * to_boolean(""); // => false
 * to_boolean(null); // => false
 * to_boolean(0); // => false
 * to_boolean(1); // => true
 */
function to_boolean(value) {
    return !!value;
}

module.exports = to_boolean;
