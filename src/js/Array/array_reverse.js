const is_array = require('../Assertion/is_array');

/**
 * Reverses an array in place. The first array element becomes the last,
 * and the last array element becomes the first.
 *
 * @memberof module:Array
 * @param {Array} array Array to process.
 * @returns {Array} Returns reversed array.
 * @since 0.1.0
 * @example
 * array_reverse([1, 2, 3, 4]);
 * // => [4, 3, 2, 1]
 */
function array_reverse(array) {
    if (is_array(array)) {
        return array.reverse();
    }

    return [];
}

module.exports = array_reverse;
