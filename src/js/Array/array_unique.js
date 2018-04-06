const is_array = require('../Assertion/is_array');

/**
 * Produces a duplicate-free version of the array.
 *
 * TODO: Remove duplicate objects and inner arrays.
 *
 * TODO: Performance optimization.
 *
 * @memberof module:Array
 * @param {Array} array Array to process.
 * @return {Array} Returns array with duplicate free values.
 * @example
 * array_unique([1, 2, 2, 3, 4, 3, 1, 5, 5, 7, 6, 6])
 * // => [1, 2, 3, 4, 5, 7, 6]
 */
function array_unique(array) {
    return is_array(array) ? array.filter(function checkPosition(value, index) {
        return array.indexOf(value) === index;
    }) : [];
}

module.exports = array_unique;
