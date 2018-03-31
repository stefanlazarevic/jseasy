const A = require('../array/array');
const T = require('../types/types');
const U = require('../utility/utility');
const E = require('../errors/errors');

/**
 * A collection of FP style functions.
 * @module Function
 */

/**
 * Currying refers to the process of transforming a function with multiple arity
 * into the same function with less arity. The curried effect is achieved by binding
 * some of the arguments to the first function invoke,
 * so that those values are fixed for the next invocation.
 *
 * https://en.wikipedia.org/wiki/Currying
 *
 * @param {Function} fn
 * @return {Function|mix}
 * @throws {TypeError}
 */
function curry(fn) {
    if (T.is_function(fn)) {
        const args = A.array_rest(U.to_array(arguments));
        return function takeMissingArguments() {
            return fn.apply(this, args.concat(U.to_array(arguments)));
        };
    } else {
        E.throwFunctionTypeError(fn);
    }
}

/**
 * Function composition is the process of combining two or more functions
 * to produce new function. Composed function take data and process it
 * through all pipes from right to left producing new data. (f o g) => f(g(o));
 *
 * https://en.wikipedia.org/wiki/Function_composition_(computer_science)
 *
 * @param {Function}
 * @return {Function|mix}
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
 * Creates a version of the function that can only be called one time.
 *
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
    let done = false;
    return function () {
        return done ? void 0 : (done = true, fn.apply(this, arguments));
    };
}

module.exports = {
    curry,
    compose,
    once
};
