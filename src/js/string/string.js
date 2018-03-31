const T = require('../types/types');
const E = require('../errors/errors');

/**
 * A collection of string manipulating functions.
 * @module String
 */

/**
 * The string_trim() method returns the string stripped of whitespace from both ends.
 * string_trim() does not affect the value of the * string itself.
 *
 * Example usage:
 *
 * string_trim("  Stefan Lazarevic   ") => "Stefan Lazarevic"
 *
 * @param {String} value
 * @return {String}
 */
function string_trim(value) {
    if (T.is_string(value)) {
        return value.replace(/^\s+|\s+$/g, '');
    }

    E.throwStringTypeError(value);
}

/**
 * Return received string with first letter in uppercase.
 *
 * @param {String} value
 * @return {String}
 */
function string_capitalize(value) {
    if (T.is_string(value)) {
        return value.replace(/^\w/, function (character) {
            return character.toUpperCase();
        });
    }

    /* istanbul ignore next */
    E.throwStringTypeError(value);
}

/**
 * Build a new string using provided pattern with 'x' mark representing
 * each value placeholder. Accepts 3 different type of value containers:
 * Array, String and Number.
 *
 * @param {String} pattern A pattern that will be fullfilled.
 * @param {Array|Number|String} toReplace
 * @returns {String} New string with fullfilled pattern placeholders.
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
function string_pattern(pattern, replacement) {
    if (T.is_string(pattern)) {
        const patternTokens = pattern.split('');

        if (!T.is_defined(replacement)) {
            return function takeReplacement(_replacement) {
                return _formatPattern(patternTokens, _replacement);
            };
        }

        return _formatPattern(patternTokens, replacement);
    }

    E.throwStringTypeError(pattern);

    /**
     *
     * @param {String} pattern
     * @param {Array} array
     * @private
     */
    function _formatPattern(patternTokens, _replacement) {
        let xTokenIndex = 0;
        let replacement = Array(0);

        if (T.is_number(_replacement)) {
            replacement = _replacement.toString().split('');
        }

        if (T.is_string(_replacement)) {
            replacement = _replacement.split('');
        }

        if (T.is_array(_replacement)) {
            replacement = _replacement;
        }

        return patternTokens.reduce(function (patternString, token) {
            if (token === 'x') {
                const replaceValue = replacement[xTokenIndex];
                if (T.is_defined(replaceValue)) {
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

module.exports = {
    string_trim,
    string_capitalize,
    string_pattern,
};
