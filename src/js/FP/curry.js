const length = require('../Utility/length');
const array_rest = require('../Array/array_rest');
const to_array = require('../Convertor/to_array');
const is_function = require('../Assertion/is_function');
const arity = require('./arity');
const throwFunctionTypeError = require('../Errors/functionTypeError');

/**
 * Currying refers to the process of transforming a function with multiple arity
 * into the same function with less arity.
 *
 * The curried effect is achieved by binding some of the arguments to the first function invoke,
 * so that those values are fixed for the next invocation.
 *
 * @memberof module:FP
 * @param {Function} fn The function to curry.
 * @return {Function} Curried function.
 * @since 0.1.0
 * @throws {TypeError}
 * @see {@link https://en.wikipedia.org/wiki/Currying|Currying}
 * @example
 * const sum = (a, b, c) => a + b + c;
 * const sumBy5 = curry(sum, 5);
 * const sumBy8 = curry(sum)(2)(6);
 *
 * sumBy5(3, 5); // => 13
 * sumBy8(6); // => 14
 */
function curry(fn) {
    if (!is_function(fn)) {
        throwFunctionTypeError(fn);
    }

    const numOfArgs = arity(fn);

    return (function takeArguments(initialArguments) {
        return function takeCurriedArguments() {
            var allArguments = initialArguments.concat(to_array(arguments));
            return length(allArguments) >= numOfArgs ? fn.apply(this, allArguments) : takeArguments(allArguments);
        };
    })(array_rest(to_array(arguments)));
}

module.exports = curry;
