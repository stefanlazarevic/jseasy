const is_string = require('../Assertion/is_string');
const is_number = require('../Assertion/is_number');
const is_array = require('../Assertion/is_array');
const is_defined = require('../Assertion/is_defined');
const not = require('../Logic/not');
const throwStringTypeError = require('../Errors/stringTypeError');

/**
 * Build a new string using provided pattern with `x` mark representing
 * each value placeholder. Accepts 3 different type of value containers:
 * Array, String and Number.
 *
 * @memberof module:String
 * @param {String} pattern A pattern that will be fullfilled.
 * @param {Array|Number|String} toReplace
 * @returns {String} New string with fullfilled pattern placeholders.
 * @since 0.1.0
 * @throws {TypeError}
 * @example
 * string_pattern('+x (x) x-x', ['381', '62', '555', '333'])
 * // => '+381 (62) 555-333'
 * @example
 * string_pattern('xxxx-xxxx-xxxx-xxxx', 4242424242424242);
 * // => '4242-4242-4242-4242'
 * @example
 * string_pattern('xxx-xxx')('123456');
 * // => '123-456'
 */
function string_format(pattern, replacement) {
    if (is_string(pattern)) {
        const patternTokens = pattern.split('');

        if (not(is_defined(replacement))) {
            return function takeReplacement(_replacement) {
                return _formatPattern(patternTokens, _replacement);
            };
        }

        return _formatPattern(patternTokens, replacement);
    }

    throwStringTypeError(pattern);

    /**
     * @param {String} pattern
     * @param {Array} array
     * @private
     */
    function _formatPattern(patternTokens, _replacement) {
        let xTokenIndex = 0;
        let replacement = Array(0);

        if (is_number(_replacement)) {
            replacement = _replacement.toString().split('');
        }

        if (is_string(_replacement)) {
            replacement = _replacement.split('');
        }

        if (is_array(_replacement)) {
            replacement = _replacement;
        }

        return patternTokens.reduce(function (patternString, token) {
            if (token === 'x') {
                const replaceValue = replacement[xTokenIndex];
                if (is_defined(replaceValue)) {
                    patternString += replaceValue;
                    xTokenIndex++;
                    return patternString;
                }

                return patternString;
            }

            return patternString += token;
        }, '');
    }
}

module.exports = string_format;
