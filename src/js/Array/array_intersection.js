const to_array = require('../Convertor/to_array');
const in_array = require('../Assertion/in_array');
const is_array = require('../Assertion/is_array');
const not = require('../Logic/not');
const or = require('../Logic/or');
const array_first = require('./array_first');
const array_rest = require('./array_rest');
const array_unique = require('./array_unique');
const length = require('../Utility/length');

/**
 * Computes the list of values that are the intersection of all the arrays.
 * Each value in the result is present in each of the arrays.
 *
 * TODO: Performance optimization.
 *
 * @memberof module:Array
 * @param {Array} array Array to process.
 * @return {Array} Returns the new array of shared values.
 * @since 0.1.0
 * @example
 * array_intersection([1, 2, 3], [101, 2, 1, 10], [2, 1])
 * // => [1, 2]
 */
function array_intersection() {
    const arrays = to_array(arguments);
    const mainArray = array_first(arrays, true);
    const rest = array_rest(arrays);
    const intersection = [];

    if (length(arrays) === 0) {
        return [];
    }

    if (or(not(is_array(mainArray)), length(mainArray) === 0)) {
        return [];
    }

    /* istanbul ignore next */
    first:
    for (let i = 0; i < length(mainArray); i++) {
        const value = mainArray[i];
        for (let j = 0; j < length(rest); j++) {
            const array = rest[j];
            if (is_array(array)) {
                if (not(in_array(rest[j], mainArray[i]))) {
                    continue first;
                }
            } else {
                intersection.length = 0;
                break first;
            }
        }

        intersection.push(value);
    }

    return array_unique(intersection);
}

module.exports = array_intersection;
