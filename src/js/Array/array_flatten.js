const is_array = require('../Assertion/is_array');

/**
 * Flattens a nested array (the nesting can be to any depth).
 * If you pass shallow, the array will only be flattened a single level.
 *
 * @memberof module:Array
 * @param {Array} arr Array to process.
 * @param {Boolean} [shallow] Flat only one level in depth.
 * @return {Array} Returns flatten array.
 * @since 0.1.0
 * @example
 * array_flatten([1, [2], [3, [[4]]]])
 * // => [1, 2, 3, 4]
 * @example
 * array_flatten([1, [2], [3, [[4]]]], true);
 * // => [1, 2, 3, [[4]]]
 */
function array_flatten() {
    const arg0 = arguments[0]; // Expecting array.
    const arg1 = arguments[1]; // Expecting boolean flag.

    if (is_array(arg0)) {
        if (arg1) { // If shallow, perform one level flattening.
            return arg0.reduce(function (acc, value) {
                return acc.concat(value);
            }, []);
        }

        return arg0.reduce(function (acc, value) {
            return acc.concat(is_array(value) ? array_flatten(value) : value);
        }, []);
    }

    return [];
}

module.exports = array_flatten;
