const A = require('../array/array');
const { is_function } = require('../types/types');
const U = require('../utility/utility');
const { throwFunctionTypeError } = require('../errors/errors');

/**
 * A collection of FP style functions.
 * @module Function
 */

/**
 * Wraps a function call of any arity to ensure that only one argument is accepted.
 *
 * At first sign unary function seems useless, but here's the pitfall example
 * that can be prevented using unary function.
 *
 * @param {Function} fn The function to wrap.
 * @returns {Function} A new function wrapping `fn`. The new function is guaranteed to be of arity 1.
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

/**
 * Function that takes one argument and does nothing but return the value untouched.
 *
 * @param {*} value Value to be returned.
 * @returns {*} Returns passed value.
 * @example
 * identity(10); // => 10
 * identity(undefined); // => undefined
 */
function identity(value) {
    return value;
}

/**
 * Currying refers to the process of transforming a function with multiple arity
 * into the same function with less arity.
 *
 * The curried effect is achieved by binding some of the arguments to the first function invoke,
 * so that those values are fixed for the next invocation.
 *
 * @param {Function} fn The function to curry.
 * @return {Function} Curried function.
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
    if (!is_function(fn)) throwFunctionTypeError(fn);

    const arity = fn.length;

    return (function takeArguments(initialArguments) {
        return function takeCurriedArguments() {
            var allArguments = initialArguments.concat(U.to_array(arguments));
            return U.length(allArguments) >= arity ? fn.apply(this, allArguments) : takeArguments(allArguments);
        };
    })(A.array_rest(U.to_array(arguments)));
}

/**
 * The process of applying a function to some of its arguments. The partially applied function gets returned for later * use. In other words, a function that takes a function with multiple parameters and returns a function with fewer
 * parameters.
 *
 * @param {Function} fn
 * @param {Arguments} args arguments to apply.
 * @return {Function} Function that takes rest of the arguments.
 * @example
 * const multiply = (a, b) => a * b;
 * const double = partial(multiply, 2);
 *
 * double(5); // => 10
 */
function partial(fn) {
    if (!is_function(fn)) {
        throwFunctionTypeError(fn);
    }

    const firstArguments = A.array_rest(U.to_array(arguments));

    return function takeRestOfTheArguments() {
        return fn.apply(this, firstArguments.concat(U.to_array(arguments)));
    };
}

/**
 * Function composition is the process of combining two or more functions
 * to produce new function.
 *
 * Composed function take data and process it through all pipes from right to left
 * producing new data. (f o g) => f(g(o));
 *
 * @param {Functions} - List of functions to compose.
 * @return {Function} - Function that expect a value to compute.
 * @see {@link https://en.wikipedia.org/wiki/Function_composition_(computer_science)|Function composition}
 * @example
 * const greet = name => `Hello ${name}`;
 * const greetName = compose(greet, string_capitalize);
 *
 * greetName('stefan'); // => Hello Stefan
 */
function compose() {
    const functions = arguments;
    let index = functions.length;
    return function composeValue(value) {
        --index;
        return (index > -1) ? composeValue(functions[index](value)) : value;
    };
}

/**
 * Pipe perform function composition like compose.
 *
 * The only difference between pipe and compose if that pipe takes function arguments from left to right,
 * and by that provides additional readability.
 *
 * @param {Functions} - List of functions to compose.
 * @return {Function} - Function that expect a value to compute.
 * @see {@link https://en.wikipedia.org/wiki/Function_composition_(computer_science)|Function composition}
 * @example
 * const greet = name => `Hello ${name}`;
 * const greetName = compose(string_capitalize, greet);
 *
 * greetName('stefan'); // => Hello Stefan
 */
function pipe() {
    const functions = arguments;
    let index = -1;
    return function composeValue(value) {
        index++;
        return (index < functions.length) ? composeValue(functions[index](value)) : value;
    };
}

/**
 * Creates a version of the function that can only be called one time.
 *
 * @param {Function} fn
 * @return {Function}
 * @example
 * function returnMyName() {
 *      return "Stefan Lazarevic";
 * }
 *
 * const callMyNameOnce = once(returnMyName);
 * callMyNameOnce() // => "Stefan Lazarevic"
 * callMyNameOnce() // => undefined
 */
function once(fn) {
    if (is_function(fn)) {
        let done = false;
        return function () {
            return done ? void 0 : (done = true, fn.apply(this, arguments));
        };
    }

    throwFunctionTypeError(fn);
}

/**
 *
 * @param {Function} fn Function to memoize.
 * @returns {Function} Memoized function.
 */
function memoize(fn) {
    const cache = {};
    return function takeArguments() {
        const args = U.to_array(arguments);
        if (args in cache) {
            return cache[args];
        }

        return (cache[args] = fn.apply(this, args));
    };
}

module.exports = {
    unary,
    identity,
    curry,
    partial,
    compose,
    pipe,
    once,
    memoize
};
