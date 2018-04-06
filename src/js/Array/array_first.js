const is_array = require('../Assertion/is_array');
const is_number = require('../Assertion/is_number');
const is_boolean = require('../Assertion/is_boolean');
const length = require('../Utility/length');

/**
 * Return the first element from the list.
 * By providing number (n) as a first argument,
 * result will be an array of the first n elements from a list.
 *
 * @memberOf module:Array
 * @param {Number|Array} n Number of first values to get, or array.
 * @param {Array|Boolean} [arr] The array to process, or array convert flag.
 * @returns {mix|Array} Returns first value from array or the new array containing n values.
 * @example
 * array_first([1, 2, 3]);
 * // => 1
 * @example
 * array_first([1, 2, 3], true);
 * // => [1]
 * @example
 * array_first(2, [1, 2, 3, 4]);
 * // => [1, 2]
 * @example
 * array_first(2)([1, 2, 3, 4]);
 * // => [1, 2]
 */
function array_first() {
    const args = arguments;
    const arg0 = args[0]; // Expecting number or array.
    const arg1 = args[1]; // Expecting array or boolean or nothing.

    const numberOfArguments = length(args);

    if (numberOfArguments === 2 && is_number(arg0) && is_array(arg1)) {
        return arg1.slice(0, arg0);
    }

    if (numberOfArguments === 2 && is_array(arg0) && is_boolean(arg1)) {
        return [].concat(arg0[0]);
    }

    if (numberOfArguments === 1) {
        if (is_array(arg0)) {
            return length(arg0) ? arg0[0] : [];
        }

        /* istanbul ignore next */
        if (is_number(arg0)) {
            return function (_array) {
                if (is_array(_array)) {
                    return length(_array) ? _array.slice(0, arg0) : [];
                }

                return [];
            };
        }
    }

    return [];
}

module.exports = array_first;
