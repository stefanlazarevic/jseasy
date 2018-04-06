const array_rest = require('./array_rest');
const in_array = require('../Assertion/in_array');
const is_array = require('../Assertion/is_array');
const not = require('../Logic/not');
const to_array = require('../Convertor/to_array');

/**
 * Returns a copy of the array with all instances of the values removed.
 *
 * TODO: Performance optimization.
 *
 * @memberof module:Array
 * @param {Array} array Array to process.
 * @param {...arguments}
 * @return {Array} Returns new array without v
 * @since 0.1.0
 * @example
 * array_without([1, 2, 3, 4, 5], 2, 4)
 * // => [1, 3, 5]
 */
function array_without(array) {
    const rest = array_rest(to_array(arguments));

    return is_array(array) ? array.filter(function (value) {
        return not(in_array(rest, value));
    }) : [];
}

module.exports = array_without;
