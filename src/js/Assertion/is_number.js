const is_nan = require('./is_nan');
const not = require('../Logic/not');

/**
 * A function that determines whether the passed value is a number.
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is a number, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_number('10'); // => false
 * is_number(42.44); // => true
 * is_number(NaN); // => false
 */
function is_number(value) {
    return typeof value === 'number' && not(is_nan(value));
}

module.exports = is_number;
