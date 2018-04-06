const is_function = require('../Assertion/is_function');
const throwFunctionTypeError = require('../Errors/functionTypeError');

/**
 * Wraps a function call of any arity to ensure that only one argument is accepted.
 *
 * At first sign unary function seems useless, but here's the pitfall example
 * that can be prevented using unary function.
 *
 * @memberof module:FP
 * @param {Function} fn The function to wrap.
 * @returns {Function} A new function wrapping `fn`. The new function is guaranteed to be of arity 1.
 * @since 0.1.0
 * @throws {TypeError}
 * @example
 * // Failing example without using unary function.
 * const strNumbers = ["1", "2", "3"];
 * const numbers = strNumbers.map(parseInt);
 *
 * console.log(numbers); // => [1, NaN, NaN]
 * @example
 * // Passing example using unary function.
 * const strNumbers = ["1", "2", "3"];
 * const numbers = strNumbers.map(unary(parseInt));
 *
 * console.log(numbers); // => [1, 2, 3]
 */
function unary(fn) {
    if (is_function(fn)) {
        return function takeArgument(arg) {
            return fn.call(this, arg);
        };
    }

    throwFunctionTypeError(fn);
}

module.exports = unary;
