const is_function = require('../Assertion/is_function');

/**
 * A function that returns number of arguments a function takes.
 *
 * @param {Function}
 * @returns {Number} Number of arguments a function takes.
 * @since 0.1.0
 * @example
 * const sum = (a, b) => a + b;
 *
 * arity(sum); // => 2
 */
function arity(fn) {
    return is_function(fn) ? fn.length : 0;
}

module.exports = arity;
