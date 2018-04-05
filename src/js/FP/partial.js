const is_function = require('../Assertion/is_function');
const array_rest = require('../Array/array_rest');
const to_array = require('../Convertor/to_array');
const not = require('../Logic/not');
const throwFunctionTypeError = require('../Errors/functionTypeError');

/**
 * The process of applying a function to some of its arguments. The partially applied function gets returned for later * use. In other words, a function that takes a function with multiple parameters and returns a function with fewer
 * parameters.
 *
 * @param {Function} fn
 * @param {Arguments} args arguments to apply.
 * @return {Function} Function that takes rest of the arguments.
 * @since 0.1.0
 * @example
 * const multiply = (a, b) => a * b;
 * const double = partial(multiply, 2);
 *
 * double(5); // => 10
 */
function partial(fn) {
    if (not(is_function(fn))) {
        throwFunctionTypeError(fn);
    }

    const firstArguments = array_rest(to_array(arguments));

    return function takeRestOfTheArguments() {
        return fn.apply(this, firstArguments.concat(to_array(arguments)));
    };
}

module.exports = partial;
