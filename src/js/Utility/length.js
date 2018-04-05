const is_defined = require('../Assertion/is_defined');

/**
 * Get length of an object.
 *
 * @param {*} object
 * @returns {Number} Lenght of an object.
 * @since 0.1.0
 * @example
 * length([1, 2, 3]); // => 3
 */
function length(value) {
    return is_defined(value) ? value.length || 0 : 0;
}

module.exports = length;
