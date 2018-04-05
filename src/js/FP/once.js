const is_function = require('../Assertion/is_function');
const throwFunctionTypeError = require('../Errors/functionTypeError');

/**
 * Creates a version of the function that can only be called one time.
 *
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
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

module.exports = once;
