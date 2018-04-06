/**
 * Determines if a value is valid ES6 Symbol.
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @return {Boolean} `true` if the value is an symbol, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_symbol(Symbol('x')); // => true
 */
function is_symbol(value) {
    return typeof value === 'symbol';
}

module.exports = is_symbol;
