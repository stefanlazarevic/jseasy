/**
 * A function that determines if a value is valid regexp.
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @return {Boolean} `true` if the value is an RegExp, otherwise `false`.
 * @since 0.1.0
 * @example
 * is_regexp(/abc/g); // => true
 * is_regexp(new RegExp('abc', 'g')); // => true
 */
function is_regexp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}

module.exports = is_regexp;
