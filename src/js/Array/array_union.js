const array_unique = require('./array_unique');
const array_flatten = require('./array_flatten');
const to_array = require('../Convertor/to_array');

/**
 * Computes the union of the passed-in arrays or values:
 * the list of unique items, in order, that are present in one or more of the arrays.
 *
 * @memberof module:Array
 * @param {Array} array Array to process
 * @return {Array} Returns the new array of combined values.
 * @since 0.1.0
 * @example
 * array_union([1, 2, 3], [101, 2, 1, 10], [2, 1])
 * // => [1, 2, 3, 101, 10]
 * @example
 * array_union(1, 2, [3, 2], 4, [2, 5])
 * // => [1, 2, 3, 4, 5]
 */
function array_union() {
    return array_unique(array_flatten(to_array(arguments)));
}

module.exports = array_union;
