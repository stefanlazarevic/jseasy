const is_array = require('../Assertion/is_array');

/**
 * Returns a copy of the array with all falsy values removed.
 * In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
 *
 * @memberof module:Array
 * @param {Array} array Array to process.
 * @return {Array} Returns array containing thruthy values.
 * @since 0.1.0
 * @example
 * array_compact([0, 1, "Hello", {}, null, [1, 2, 3], void 0])
 * // => [1, "Hello", {}, [1, 2, 3]]
 */
function array_compact(array) {
    return is_array(array) ? array.filter(function checkIfFalsy(element) {
        return !!(element);
    }) : [];
}

module.exports = array_compact;
