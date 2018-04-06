/**
 * A function that determines whether the passed value is an object-like.
 *
 * @memberof module:Assertion
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is an object-like, otherwise `false`.
 * @since 0.1.0
 * @example
 * function Coordinate(x = 0, y = 0) {
 *     this.x = x;
 *     this.y = y;
 * }
 *
 * is_object(new Coordinate(10, 15)); // => true
 * is_object({ 'x': 0, 'y': 0 }); // => true
 * is_object([1, 2, 3]); // => true
 */
function is_objectLike(value) {
    return value === Object(value);
}

module.exports = is_objectLike;
