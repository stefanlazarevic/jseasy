const not = require('../Logic/not');
const and = require('../Logic/and');
const is_function = require('../Assertion/is_function');
const is_defined = require('../Assertion/is_defined');

const inSafeRange = (value) => and(value >= 0, value <= Number.MAX_SAFE_INTEGER);

/**
 * A function that determines whether the passed value is an array-like.
 *
 * For a object to be array-like it must meet following conditions.
 *
 * - Must not be a `function`.
 * - Must not be `null`.
 * - Must contain `length` property.
 * - Lenght must be in range between `0` and `Number.MAX_SAFE_INTEGER`
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is array-like, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_arrayLike([1, 2, 3]); // => true
 *
 */
function is_arrayLike(value) {
    return is_defined(value) && not(is_function(value)) && inSafeRange(value.length);
}

module.exports = is_arrayLike;
