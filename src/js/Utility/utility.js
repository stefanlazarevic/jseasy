const is_number = require('../Assertion/is_number');
const is_array = require('../Assertion/is_array');
const is_defined = require('../Assertion/is_defined');
const is_function = require('../Assertion/is_function');
const is_object = require('../Assertion/is_object');
const is_string = require('../Assertion/is_string');

/**
 * Collection of Utility functions.
 * <script src="scripts/jseasy.min.js"></script>
 * @module Utility
 */

/**
 * Returns a random integer between min and max. (inclusive)
 * If you only pass one argument, it will return a number between 0 and that number.
 * By default random number range is between 0 and 100.
 *
 * @param {Number} [min = 0] A minimum posible number generated.
 * @param {Number} [max = 100] A maximum posible number generated.
 * @returns {Number} Returns the random number.
 * @example
 * random_number()
 * // => returns an integer between 0 and 100
 * @example
 * random_number(50)
 * // => returns an integer between 0 and 50
 * @example
 * random_number(50, 200)
 * // => returns an integer between 50 and 200
 */
function random_number(min, max) {
    let _min = 0, _max = 100;

    if (is_number(min) && !is_defined(max)) {
        _min = 0;
        _max = min;
    }

    if (is_number(min) && is_number(max)) {
        _min = min;
        _max = max;
    }

    return Math.floor((Math.random() * (_max - _min + 1)) + _min);
}

/**
 * Creates a real Array from the list (anything that can be iterated over).
 * Useful for transmuting the arguments object.
 *
 * @param {IteratableObject} iteratableObject An object that has length property.
 * @returns {Array} Array containing all values from an IteratableObject.
 * @example
 * to_array({0: 10, 1: 20, length: 2})
 * // => [10, 20]
 * @example
 * to_array("word")
 * // => ["w", "o", "r", "d"]
 */
function to_array(iteratableObject) {
    return Array.prototype.slice.call(iteratableObject);
}

/**
 * Determines if collection contain value.
 *
 * @param {Array} array Collection in which the value is searched.
 * @param {*} value Searched value.
 * @returns {Boolean} Truthfulness of the contents.
 * @example
 * in_array([1, 2, 3, 4], 3)
 * // => true
 * @example
 * in_array([2, 4, 5, 2, 1], 6)
 * // => false
 */
function in_array(array, value) {
    return is_array(array) ? Boolean(~array.indexOf(value)) : false;
}



/**
 * Get length of list, number of properties in object or number of characters in string.
 * Default return value will be 0.
 *
 * @param {IteratableObject} iteratableObject An object that has length property.
 * @returns {Number} Size of an iteratableObject
 * @example
 * length([1, 2, 3, 4])
 * // => 4
 * @example
 * length({a: 10, b: 15})
 * // => 2
 * @example
 * length("abcdefg")
 * // => 7
 */
function length(iteratableObject) {

    if (!is_defined(iteratableObject)) {
        return 0;
    }

    if (is_object(iteratableObject)) {
        return Object.keys(iteratableObject).length;
    }

    if (is_string(iteratableObject) || is_array(iteratableObject) || is_function(iteratableObject)) {
        return iteratableObject.length;
    }

    return 0;
}

/**
 * Generate random string n characters long. If string length is not provided default string length will be 20.
 *
 * @param {Number} [length = 20] String length.
 * @returns {String} Generated string of n characters.
 */
function random_string(length = 20) {
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^*()-+_';
    let generatedString = '';
    const possibleCharactersCount = possibleCharacters.length - 1;
    let index = 0;

    for (index; index < length; index++) {
        generatedString += possibleCharacters.charAt(random_number(possibleCharactersCount));
    }

    return generatedString;
}

module.exports = {
    random_number,
    to_array,
    in_array,
    length,
    random_string,
};
