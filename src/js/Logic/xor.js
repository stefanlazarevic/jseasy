/**
 * A function that returns `true` if only one of arguments is true. Otherwise `false`.
 *
 * @memberof module:Logic
 * @param {*} argumentOne
 * @param {*} argumentTwo
 * @returns {Boolean}
 * @since 0.1.0
 * @example
 * xor(true, true); // => false
 * xor(true, false); // => true
 * xor(false, false); // => false
 */
function xor(argumentOne, argumentTwo) {
    return !!(argumentOne !== argumentTwo);
}

module.exports = xor;
