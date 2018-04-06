const is_array = require('../Assertion/is_array');

/**
 * Determines if collection contain value.
 *
 * @memberof module:Assertion
 * @param {Array} array Collection in which the value is searched.
 * @param {*} value Searched value.
 * @returns {Boolean} Truthfulness of the contents.
 * @example
 * in_array([1, 2, 3, 4], 3)
 * // => true
 * @example
 * in_array([2, 4, 5, 2, 1], 6)
 * // => false
 */
function in_array(array, value) {
    return is_array(array) ? !!(~array.indexOf(value)) : false;
}

module.exports = in_array;
