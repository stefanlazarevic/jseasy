const length = require('../Utility/length');
const is_string = require('../Assertion/is_string');
const is_array = require('../Assertion/is_array');
const is_object = require('../Assertion/is_object');
const is_defined = require('../Assertion/is_defined');
const pluck = require('../Object/pluck');

/**
 * Retrieves the values of a specified property from all objects in the collection.
 *
 * @memberof module:Array
 * @param {String} key Object key or nested object key path.
 * @param {Array} array Array of objects to process.
 * @return {Array} Returns the array with plucked values from object.
 * @since 0.1.0
 * @example
 * array_pluck('id', [{id: 1}, {id:2}, {id:3}]);
 * // => [1, 2, 3]
 */
function array_pluck(key, array) {
    if (is_string(key) && is_array(array)) {
        return _computePlucking(key, array);
    }

    if (length(arguments) === 1 && is_string(key)) {
        return function takeArray(_array) {
            return is_array(_array) ? _computePlucking(key, _array) : [];
        };
    }

    return [];

    /**
     * Extract all properties from an objects inside collection.
     *
     * @param {String} key Object key or nested object key path.
     * @param {Array} array Array to process.
     * @returns {Array} Returns plucked values from objects.
     * @since 0.1.0
     * @private
     */
    function _computePlucking(key, array) {
        let pluckedArray = [];
        let index = 0;
        const numberOfItems = length(array);
        for (index; index < numberOfItems; index++) {
            /* istanbul ignore next */
            if (is_object(array[index])) {
                const value = pluck(key, array[index]);
                if (is_defined(value)) {
                    pluckedArray.push(value);
                }
            }
        }

        return pluckedArray;
    }
}

module.exports = array_pluck;
