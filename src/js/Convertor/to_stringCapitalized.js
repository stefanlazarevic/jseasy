const is_string = require('../Assertion/is_string');
const to_string = require('./to_string');

/**
 * Return received string with first letter in uppercase.
 *
 * @param {String} value
 * @return {String}
 * @since 0.1.0
 */
function to_stringCapitalized(value) {
    const transformed = is_string(value) ? value : arguments.length ? to_string(value) : '';
    return transformed.charAt(0).toUpperCase() + transformed.slice(1);
}

module.exports = to_stringCapitalized;
