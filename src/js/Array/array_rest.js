const is_number = require('../Assertion/is_number');
const is_array = require('../Assertion/is_array');
const length = require('../Utility/length');

/**
 * Returns the rest of the elements in an array.
 * Pass an index to return the values of the array from that index onward.
 *
 * @memberof module:Array
 * @param {Number|Array} Number of elements to skip or Array to process.
 * @param {Array} [arr] Array to process
 * @return {Array} Returns the new array containing rest values
 * @since 0.1.0
 * @example
 * array_rest([1, 2, 3, 4]);
 * // => [2, 3, 4]
 * array_rest(2, [1, 2, 3, 4]);
 * // => [3, 4]
 * array_rest(2)([1, 2, 3, 4]);
 * // => [3, 4]
 */
function array_rest() {
    const args = arguments;
    const arg0 = args[0]; // Expecting number or array.
    const arg1 = args[1]; // Expecting array or nothing.

    const numberOfArguments = length(args);

    if (numberOfArguments === 2 && is_number(arg0) && is_array(arg1)) {
        return length(arg1) ? arg1.slice(arg0) : [];
    }

    if (numberOfArguments === 1) {
        if (is_array(arg0)) {
            return length(arg0) ? arg0.slice(1) : [];
        }

        /* istanbul ignore next */
        if (is_number(arg0)) {
            return function takeArray(_array) {
                return length(_array) ? _array.slice(arg0) : [];
            };
        }
    }

    return [];
}

module.exports = array_rest;
