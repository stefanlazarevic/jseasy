/**
 * A function that returns `true` if any of provided arguments is truthy. Otherwise `false`.
 *
 * @memberof module:Logic
 * @param {*} argumentOne
 * @param {*} argumentTwo
 * @returns {Boolean} Result of logical and between two arguments.
 * @since 0.1.0
 * @example
 * and(true, true); // => true
 * and(true, false); // => false
 * and(); // => false
 */
function and(argumentOne, argumentTwo) {
    return !!(argumentOne && argumentTwo);
}

module.exports = and;
