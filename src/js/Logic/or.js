/**
 * A function that returns `true` if any of the provided arguments is truthy.
 *
 * @memberof module:Logic
 * @param {*} argumentOne
 * @param {*} argumentTwo
 * @returns {Boolean}
 * @since 0.1.0
 * @example
 * or(true, true); // => true
 * or(true, false); // => true
 * or(false, false); // => false
 */
function or(argumentOne = undefined, argumentTwo = undefined) {
    return !!(argumentOne || argumentTwo);
}

module.exports = or;
