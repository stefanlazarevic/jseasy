const T = require('../types/types');

/**
 * Returns a random integer between min and max. (inclusive)
 * If you only pass one argument, it will return a number between 0 and that number.
 * By default random number range is between 0 and 100.
 *
 * Built using Fisher–Yates shuffle algorithm.
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number} random
 */
function random_number(min, max) {
    var _min = 0, _max = 100;

    if (T.is_number(min) && !T.is_defined(max)) {
        _min = 0;
        _max = min;
    }

    if (T.is_number(min) && T.is_number(max)) {
        _min = min;
        _max = max;
    }

    return Math.floor((Math.random() * (_max - _min + 1)) + _min);
}

/**
 * Creates a real Array from the list (anything that can be iterated over).
 * Useful for transmuting the arguments object.
 *
 * Example usage:
 *
 * to_array({0: 10, 1: 20, length: 2}) => [10, 20]
 *
 * to_array("word") => ["w", "o", "r", "d"]
 *
 * @param {Iteratable}
 * @return {Array}
 */
function to_array(object) {
    return Array.prototype.slice.call(object);
}

/**
 * Determines if array contain value.
 *
 * Example usage:
 *
 * in_array([1, 2, 3, 4], 3) => true
 *
 * in_array([2, 4, 5, 2, 1], 6) => false
 *
 * TODO: check for objects and inner arrays inside array.
 * Cover following cases in update:
 *
 * in_array([[1, 2], 3, 4, 5], [1, 2]) => true
 *
 * in_array([{name: 'Stefan'}, {name: 'Milica'}], {name: Stefan}) => true
 *
 * @param {Array} array
 * @return {Boolean}
 */
function in_array(array, value) {
    return T.is_array(array) ? Boolean(~array.indexOf(value)) : false;
}

/**
 * Return type of provided value.
 * Prevent pitfall types such as NaN, null, []
 *
 * @param {mix} value
 * @return {String}
 */
function type(value) {
    if (T.is_NaN(value)) {
        return 'NaN';
    }

    if (T.is_array(value)) {
        return 'array';
    }

    if (T.is_null(value)) {
        return 'null';
    }

    return typeof value;
}

/**
 * Get length of list, number of properties in object or number of characters in string.
 * Default return value will be 0.
 *
 * Example usage:
 *
 * length([1, 2, 3, 4]) => 4
 *
 * length({a: 10, b: 15}) => 2
 *
 * length("abcdefg") => 7
 *
 * @param {mix} value
 * @return {Number} length
 * @alias count
 */
function length(value) {

    if (!T.is_defined(value)) {
        return 0;
    }

    if (T.is_object(value)) {
        return Object.keys(value).length;
    }

    if (T.is_string(value) || T.is_array(value)) {
        return value.length;
    }

    return 0;
}

/**
 * Get length of list, number of properties in object or number of characters in string.
 * Default return value will be 0.
 *
 * Example usage:
 *
 * length([1, 2, 3, 4]) => 4
 *
 * length({a: 10, b: 15}) => 2
 *
 * length("abcdefg") => 7
 *
 * @param {mix} value
 * @return {Number} length
 * @alias length
 */
const count = length;

module.exports = {
    random_number,
    to_array,
    in_array,
    type,
    length,
    count
};
