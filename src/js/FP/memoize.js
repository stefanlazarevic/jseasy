const to_array = require('../Convertor/to_array');

/**
 * Creates a function that memoizes the result of function.
 *
 * @memberof module:FP
 * @param {Function} fn Function to memoize.
 * @returns {Function} Memoized function.
 * @since 0.1.0
 * @example
 * const fibonacci = memoize(function(n) {
 *     return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
 * });
 *
 * fibonacci(9); // => 34
 * fibonacci(9); // => From cache: 34
 */
function memoize(fn) {
    const cache = {};
    return function takeArguments() {
        const args = to_array(arguments);
        if (args in cache) {
            return cache[args];
        }

        return (cache[args] = fn.apply(this, args));
    };
}

module.exports = memoize;
