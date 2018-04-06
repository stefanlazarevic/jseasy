const is_array = require('../Assertion/is_array');
const is_number = require('../Assertion/is_number');
const and = require('../Logic/and');
const length = require('../Utility/length');

/**
 * Returns everything but the last entry of the array.
 * Especially useful on the arguments object.
 * Pass n to exclude the last n elements from the result.
 *
 * @memberOf module:Array
 * @param {Number|Array} n Number of last values to exclude, or array to process.
 * @param {Array} [array] The array to process.
 * @return {Array} Returns the new array containing initial values.
 * @example
 * array_initial([5, 4, 3, 2, 1]);
 * // => [5, 4, 3, 2]
 * @example
 * array_initial(2, [5, 4, 3, 2, 1]);
 * // => [5, 4, 3]
 * @example
 * array_initial(3)([5, 4, 3, 2, 1]);
 * // => [5, 4]
 */
function array_initial() {
    const args = arguments;
    const arg0 = args[0]; // Expecting number or array.
    const arg1 = args[1]; // Expecting array or nothing.

    const numberOfArguments = length(args);

    if (numberOfArguments === 2 && and(is_number(arg0), is_array(arg1))) {
        return arg0 > 0 ? arg1.slice(0, -arg0) : arg1.slice(0, -1);
    }

    if (numberOfArguments === 1) {
        if (is_array(arg0)) {
            return length(arg0) ? arg0.slice(0, -1) : [];
        }

        /* istanbul ignore next */
        if (is_number(arg0)) {
            return function takeArray(_array) {
                return length(_array) ? _array.slice(0, -arg0) : [];
            };
        }
    }

    return [];
}

module.exports = array_initial;
