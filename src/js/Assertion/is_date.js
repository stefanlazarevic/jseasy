/**
 * A function that determines whether the passed value is an Date object.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} true if the value is Date object, otherwise false.
 * @since 0.1.0
 * @example
 * const date = new Date();
 *
 * is_date(date); // => true
 * is_date(new Date().getYear()); // => false
 */
function is_date(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}

module.exports = is_date;
