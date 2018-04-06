/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @memberof module:Logic
 * @param {*} arg Value to coerce.
 * @returns {Boolean} Boolean representation of negated value.
 * @since 0.1.0
 * @example
 * not(true); // => false
 * not(0); // => true
 */
function not(arg) {
    return !arg;
}

module.exports = not;
