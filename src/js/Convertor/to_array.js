const is_defined = require('../Assertion/is_defined');

/**
 * Creates a real Array from the list (anything that can be iterated over).
 * Useful for transmuting the arguments object.
 *
 * @memberof module:Convertor
 * @param {*} [ObjectWithLength] An object that has length property.
 * @returns {Array} Array containing all values from an ObjectWithLength.
 * @since 0.1.0
 * @example
 * function convertArguments() {
 *      return to_array(arguments);
 * }
 *
 * to_array({0: 10, 1: 20, length: 2}) // => [10, 20]
 * to_array("word") // => ["w", "o", "r", "d"]
 * to_array(takeArguments(1, 2, 3)); // => [1, 2, 3]
 */
function to_array(value) {
    return is_defined(value) ? Array.prototype.slice.call(value) : [];
}

module.exports = to_array;
