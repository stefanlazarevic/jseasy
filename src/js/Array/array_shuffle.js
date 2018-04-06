const is_array = require('../Assertion/is_array');
const not = require('../Logic/not');
const length = require('../Utility/length');
const random_number = require('../Utility/random_number');

/**
 * Returns a shuffled copy of the list, using a Fisher-Yates shuffle algorithm.
 *
 * Built using Fisher–Yates shuffle algorithm.
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 *
 * @memberof module:Array
 * @param {Array} array Array to process.
 * @return {Array} Returns the new shuffled array.
 * @since 0.1.0
 * @example
 * array_shuffle([1, 2, 3, 4, 5 ,6]);
 * // => [2, 3, 1, 4, 6, 5]
 */
function array_shuffle(array) {
    if (not(is_array(array))) {
        return [];
    }

    let index, temp, randomIndex;
    const arrayClone = [].concat(array);
    const arrayLength = length(arrayClone) - 1;

    for (index = arrayLength; index > 0; index--) {
        randomIndex = random_number(arrayLength);
        temp = arrayClone[index];
        arrayClone[index] = arrayClone[randomIndex];
        arrayClone[randomIndex] = temp;
    }

    return arrayClone;
}

module.exports = array_shuffle;
