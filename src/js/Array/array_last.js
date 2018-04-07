const is_number = require('../Assertion/is_number');
const is_array = require('../Assertion/is_array');
const is_boolean = require('../Assertion/is_boolean');
const length = require('../Utility/length');

/**
 * Returns the last element of an array.
 * Passing n will return the last n elements of the array.
 *
 * @memberof module:Array
 * @param {Number|Array} n Number of first elements to exclude or Array to process.
 * @param {Array|Boolean} a Array to process or array convert flag.
 * @return {mix|Array} Returns last value or the new array containing last value(s)
 * @example
 * array_last([5, 4, 3, 2, 1]);
 * // => 1
 * @example
 * array_last([5, 4, 3, 2, 1], true);
 * // => [1]
 * @example
 * array_last(2, [5, 4, 3, 2, 1]);
 * // => [2, 1]
 * @example
 * array_last(2)([5, 4, 3, 2, 1]);
 * // => [2, 1]
 */
function array_last() {
    const args = arguments;
    const arg0 = args[0]; // Expecting number or array.
    const arg1 = args[1]; // Expecting array or nothing.

    const numberOfArguments = length(args);

    /* istanbul ignore next */
    if (numberOfArguments === 2 && is_number(arg0) && is_array(arg1)) {
        return length(arg1) ? arg1.slice(-arg0) : [];
    }

    /* istanbul ignore next */
    if (numberOfArguments === 2 && is_array(arg0) && is_boolean(arg1)) {
        return [].concat(arg0[length(arg0) - 1]);
    }

    if (numberOfArguments === 1) {
        /* istanbul ignore next */
        if (is_array(arg0)) {
            return length(arg0) ? arg0[length(arg0) - 1] : [];
        }

        /* istanbul ignore next */
        if (is_number(arg0)) {
            return function takeArray(_array) {
                return length(_array) ? _array.slice(-arg0) : [];
            };
        }
    }

    return [];
}

module.exports = array_last;
