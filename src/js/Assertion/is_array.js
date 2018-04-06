/**
 * A function that determines whether the passed value is an array.
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is an array, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_array([1, 2, 3]); // => true
 * (function() { return is_array(arguments); })(); // => false
 */
function is_array(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

module.exports = is_array;
