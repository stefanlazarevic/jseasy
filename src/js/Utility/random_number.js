const is_number = require('../Assertion/is_number');
const is_defined = require('../Assertion/is_defined');

/**
 * Returns a random integer between min and max. (inclusive)
 * If you only pass one argument, it will return a number between 0 and that number.
 * By default random number range is between 0 and 100.
 *
 * @memberof module:Utility
 * @param {Number} [min = 0] A minimum posible number generated.
 * @param {Number} [max = 100] A maximum posible number generated.
 * @returns {Number} Returns the random number.
 * @since 0.1.0
 * @example
 * random_number()
 * // => returns an integer between 0 and 100
 * @example
 * random_number(50)
 * // => returns an integer between 0 and 50
 * @example
 * random_number(50, 200)
 * // => returns an integer between 50 and 200
 */
function random_number(min, max) {
    let _min = 0, _max = 100;

    if (is_number(min) && !is_defined(max)) {
        _min = 0;
        _max = min;
    }

    if (is_number(min) && is_number(max)) {
        _min = min;
        _max = max;
    }

    return Math.floor((Math.random() * (_max - _min + 1)) + _min);
}

module.exports = random_number;
