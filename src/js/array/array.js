require('../jsdocs/jsdocs');
const T = require('../types/types');
const U = require('../utility/utility');
const { object_pluck } = require('../object/object');

/**
 * A collection of array manipulating functions.
 * @module Array
 */

/**
 * Return the first element from the list.
 * By providing number (n) as a first argument,
 * result will be an array of the first n elements from a list.
 *
 * @memberOf module:Array
 * @param {Number|Array} n Number of first values to get, or array.
 * @param {Array|Boolean} [arr] The array to process, or array convert flag.
 * @returns {mix|Array} Returns first value from array or the new array containing n values.
 * @example
 * array_first([1, 2, 3]);
 * // => 1
 * @example
 * array_first([1, 2, 3], true);
 * // => [1]
 * @example
 * array_first(2, [1, 2, 3, 4]);
 * // => [1, 2]
 * @example
 * array_first(2)([1, 2, 3, 4]);
 * // => [1, 2]
 */
function array_first() {
    const args = arguments;
    const arg0 = args[0]; // Expecting number or array.
    const arg1 = args[1]; // Expecting array or boolean or nothing.

    const numberOfArguments = U.length(args);

    if (numberOfArguments === 2 && T.is_number(arg0) && T.is_array(arg1)) {
        return arg1.slice(0, arg0);
    }

    if (numberOfArguments === 2 && T.is_array(arg0) && T.is_boolean(arg1)) {
        return [].concat(arg0[0]);
    }

    if (numberOfArguments === 1) {
        if (T.is_array(arg0)) {
            return U.length(arg0) ? arg0[0] : [];
        }

        /* istanbul ignore next */
        if (T.is_number(arg0)) {
            return function (_array) {
                if (T.is_array(_array)) {
                    return U.length(_array) ? _array.slice(0, arg0) : [];
                }

                return [];
            };
        }
    }

    return [];
}

/**
 * Returns everything but the last entry of the array.
 * Especially useful on the arguments object.
 * Pass n to exclude the last n elements from the result.
 *
 * @memberOf module:Array
 * @param {Number|Array} n Number of last values to exclude, or array to process.
 * @param {Array} [array] The array to process.
 * @return {Array} Returns the new array containing initial values.
 * @example
 * array_initial([5, 4, 3, 2, 1]);
 * // => [5, 4, 3, 2]
 * @example
 * array_initial(2, [5, 4, 3, 2, 1]);
 * // => [5, 4, 3]
 * @example
 * array_initial(3)([5, 4, 3, 2, 1]);
 * // => [5, 4]
 */
function array_initial() {
    const args = arguments;
    const arg0 = args[0]; // Expecting number or array.
    const arg1 = args[1]; // Expecting array or nothing.

    const numberOfArguments = U.length(args);

    if (numberOfArguments === 2 && T.is_number(arg0) && T.is_array(arg1)) {
        return arg0 > 0 ? arg1.slice(0, -arg0) : arg1.slice(0, -1);
    }

    if (numberOfArguments === 1) {
        if (T.is_array(arg0)) {
            return U.length(arg0) ? arg0.slice(0, -1) : [];
        }

        /* istanbul ignore next */
        if (T.is_number(arg0)) {
            return function takeArray(_array) {
                return U.length(_array) ? _array.slice(0, -arg0) : [];
            };
        }
    }

    return [];
}

/**
 * Returns the last element of an array.
 * Passing n will return the last n elements of the array.
 *
 * @memberOf module:Array
 * @param {Number|Array} n Number of first elements to exclude or Array to process.
 * @param {Array|Boolean} a Array to process or array convert flag.
 * @return {mix|Array} Returns last value or the new array containing last value(s)
 * @example
 * array_last([5, 4, 3, 2, 1]);
 * // => 1
 * @example
 * array_last([5, 4, 3, 2, 1], true);
 * // => [1]
 * @example
 * array_last(2, [5, 4, 3, 2, 1]);
 * // => [2, 1]
 * @example
 * array_last(2)([5, 4, 3, 2, 1]);
 * // => [2, 1]
 */
function array_last() {
    const args = arguments;
    const arg0 = args[0]; // Expecting number or array.
    const arg1 = args[1]; // Expecting array or nothing.

    const numberOfArguments = U.length(args);

    /* istanbul ignore next */
    if (numberOfArguments === 2 && T.is_number(arg0) && T.is_array(arg1)) {
        return U.length(arg1) ? arg1.slice(-arg0) : [];
    }

    /* istanbul ignore next */
    if (numberOfArguments === 2 && T.is_array(arg0) && T.is_boolean(arg1)) {
        return [].concat(arg0[U.length(arg0) - 1]);
    }

    if (numberOfArguments === 1) {
        /* istanbul ignore next */
        if (T.is_array(arg0)) {
            return U.length(arg0) ? arg0[U.length(arg0) - 1] : [];
        }

        /* istanbul ignore next */
        if (T.is_number(arg0)) {
            return function takeArray(_array) {
                return U.length(_array) ? _array.slice(-arg0) : [];
            };
        }
    }

    return [];
}

/**
 * Returns the rest of the elements in an array.
 * Pass an index to return the values of the array from that index onward.
 *
 * @memberOf module:Array
 * @param {Number|Array} Number of elements to skip or Array to process.
 * @param {Array} [arr] Array to process
 * @return {Array} Returns the new array containing rest values
 * @example
 * array_rest([1, 2, 3, 4]);
 * // => [2, 3, 4]
 * array_rest(2, [1, 2, 3, 4]);
 * // => [3, 4]
 * array_rest(2)([1, 2, 3, 4]);
 * // => [3, 4]
 */
function array_rest() {
    const args = arguments;
    const arg0 = args[0]; // Expecting number or array.
    const arg1 = args[1]; // Expecting array or nothing.

    const numberOfArguments = U.length(args);

    if (numberOfArguments === 2 && T.is_number(arg0) && T.is_array(arg1)) {
        return U.length(arg1) ? arg1.slice(arg0) : [];
    }

    if (numberOfArguments === 1) {
        if (T.is_array(arg0)) {
            return U.length(arg0) ? arg0.slice(1) : [];
        }

        /* istanbul ignore next */
        if (T.is_number(arg0)) {
            return function takeArray(_array) {
                return U.length(_array) ? _array.slice(arg0) : [];
            };
        }
    }

    return [];
}

/**
 * Returns a copy of the array with all falsy values removed.
 * In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
 *
 * @memberOf module:Array
 * @param {Array} array Array to process.
 * @return {Array} Returns array containing thruthy values.
 * @example
 * array_compact([0, 1, "Hello", {}, null, [1, 2, 3], void 0])
 * // => [1, "Hello", {}, [1, 2, 3]]
 */
function array_compact(array) {
    return T.is_array(array) ? array.filter(function checkIfFalsy(element) {
        return Boolean(element);
    }) : [];
}

/**
 * Flattens a nested array (the nesting can be to any depth).
 * If you pass shallow, the array will only be flattened a single level.
 *
 * @param {Array} arr Array to process.
 * @param {Boolean} [shallow] Flat only one level in depth.
 * @return {Array} Returns flatten array.
 * @example
 * array_flatten([1, [2], [3, [[4]]]])
 * // => [1, 2, 3, 4]
 * @example
 * array_flatten([1, [2], [3, [[4]]]], true);
 * // => [1, 2, 3, [[4]]]
 */
function array_flatten() {
    const arg0 = arguments[0]; // Expecting array.
    const arg1 = arguments[1]; // Expecting boolean flag.

    if (T.is_array(arg0)) {
        if (arg1) { // If shallow, perform one level flattening.
            return arg0.reduce(function (acc, value) {
                return acc.concat(value);
            }, []);
        }

        return arg0.reduce(function (acc, value) {
            return acc.concat(T.is_array(value) ? array_flatten(value) : value);
        }, []);
    }

    return [];
}

/**
 * Returns a copy of the array with all instances of the values removed.
 *
 * TODO: Performance optimization.
 *
 * @param {Array} array Array to process.
 * @param {...arguments}
 * @return {Array} Returns new array without v
 * @example
 * array_without([1, 2, 3, 4, 5], 2, 4)
 * // => [1, 3, 5]
 */
function array_without(array) {
    const rest = array_rest(U.to_array(arguments));

    return T.is_array(array) ? array.filter(function (value) {
        return !U.in_array(rest, value);
    }) : [];
}

/**
 * Produces a duplicate-free version of the array.
 *
 * TODO: Remove duplicate objects and inner arrays.
 *
 * TODO: Performance optimization.
 *
 * @param {Array} array Array to process.
 * @return {Array} Returns array with duplicate free values.
 * @example
 * array_unique([1, 2, 2, 3, 4, 3, 1, 5, 5, 7, 6, 6])
 * // => [1, 2, 3, 4, 5, 7, 6]
 */
function array_unique(array) {
    return T.is_array(array) ? array.filter(function checkPosition(value, index) {
        return array.indexOf(value) === index;
    }) : [];
}

/**
 * Computes the union of the passed-in arrays or values:
 * the list of unique items, in order, that are present in one or more of the arrays.
 *
 * @param {Array} array Array to process
 * @return {Array} Returns the new array of combined values.
 * @example
 * array_union([1, 2, 3], [101, 2, 1, 10], [2, 1])
 * // => [1, 2, 3, 101, 10]
 * @example
 * array_union(1, 2, [3, 2], 4, [2, 5])
 * // => [1, 2, 3, 4, 5]
 */
function array_union() {
    return array_unique(array_flatten(U.to_array(arguments)));
}

/**
 * Computes the list of values that are the intersection of all the arrays.
 * Each value in the result is present in each of the arrays.
 *
 * TODO: Performance optimization.
 *
 * @param {Array} array Array to process.
 * @return {Array} Returns the new array of shared values.
 * @example
 * array_intersection([1, 2, 3], [101, 2, 1, 10], [2, 1])
 * // => [1, 2]
 */
function array_intersection() {
    const arrays = U.to_array(arguments);
    const mainArray = array_first(arrays, true);
    const rest = array_rest(arrays);
    const intersection = [];

    if (U.length(arrays) === 0) {
        return [];
    }

    if (!T.is_array(mainArray) || U.length(mainArray) === 0) {
        return [];
    }

    /* istanbul ignore next */
    first:
    for (let i = 0; i < U.length(mainArray); i++) {
        const value = mainArray[i];
        for (let j = 0; j < U.length(rest); j++) {
            const array = rest[j];
            if (T.is_array(array)) {
                if (!U.in_array(rest[j], mainArray[i])) {
                    continue first;
                }
            } else {
                intersection.length = 0;
                break first;
            }
        }
        intersection.push(value);
    }

    return array_unique(intersection);
}

/**
 * Returns a shuffled copy of the list, using a Fisher-Yates shuffle algorithm.
 *
 * Built using Fisher–Yates shuffle algorithm.
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 *
 * @param {Array} array Array to process.
 * @return {Array} Returns the new shuffled array.
 * @example
 * array_shuffle([1, 2, 3, 4, 5 ,6]);
 * // => [2, 3, 1, 4, 6, 5]
 */
function array_shuffle(array) {
    if (!T.is_array(array)) {
        return [];
    }

    let index, temp, randomIndex;
    const arrayClone = [].concat(array);
    const arrayLength = U.length(arrayClone);

    for (index = arrayLength - 1; index > 0; index--) {
        randomIndex = U.random_number(arrayLength);
        temp = arrayClone[index];
        arrayClone[index] = arrayClone[randomIndex];
        arrayClone[randomIndex] = temp;
    }

    return arrayClone;
}

/**
 * Retrieves the values of a specified property from all objects in the collection.
 *
 * @param {String} key Object key or nested object key path.
 * @param {Array} array Array of objects to process.
 * @return {Array} Returns the array with plucked values from object.
 * @example
 * array_pluck('id', [{id: 1}, {id:2}, {id:3}]);
 * // => [1, 2, 3]
 */
function array_pluck(key, array) {
    if (T.is_string(key) && T.is_array(array)) {
        return _computePlucking(key, array);
    }

    if (U.length(arguments) === 1 && T.is_string(key)) {
        return function takeArray(_array) {
            return T.is_array(_array) ? _computePlucking(key, _array) : [];
        };
    }

    return [];

    /**
     * Extract all properties from an objects inside collection.
     *
     * @param {String} key Object key or nested object key path.
     * @param {Array} array Array to process.
     * @returns {Array} Returns plucked values from objects.
     * @private
     */
    function _computePlucking(key, array) {
        let pluckedArray = [];
        let index = 0;
        const numberOfItems = U.length(array);
        for (index; index < numberOfItems; index++) {
            /* istanbul ignore next */
            if (T.is_object(array[index])) {
                const value = object_pluck(key, array[index]);
                if (T.is_defined(value)) {
                    pluckedArray.push(value);
                }
            }
        }

        return pluckedArray;
    }
}

/**
 * Add one or more elements to the end of an array and
 * return new array with all values included.
 *
 * @param {Array} array Original array.
 * @param {mix} [...args] Values to add to array.
 * @return {Array} Returns new array with values appended to original.
 * @example
 * array_push([], 1, 2, 3, 4);
 * // => [1, 2, 3, 4]
 * @example
 * array_push([1, 2, 3], [4, 5, 6]);
 * // => [1, 2, 3, [4, 5, 6]]
 */
function array_push(array) {
    return T.is_array(array) ? array.concat(array_rest(U.to_array(arguments))) : [];
}

/**
 * Return last element from a collection.
 * Unlike array_last where function always return empty collection ([])
 * if nothing is found or input is invalid, array_pop returns undefined as a result.
 *
 * NOTE: array_last does not mutate original array like native js array.pop()
 *
 * @param {Array} array Array to process.
 * @return {*} Last value from an array.
 * @example
 * array_pop([1, 2, 3, 4]);
 * // => 4
 * @example
 * array_pop("hello")
 * // => undefined
 */
function array_pop(array) {
    return T.is_array(array) ? array[U.length(array) - 1] : void 0;
}

/**
 * Add one or more elements to the beginning of an array and
 * return new array with all values included.
 *
 * @param {Array} array Array to process.
 * @param {...*} elements Elements to add at the begining of array.
 * @return {Array} Returns array with new values values at the begining.
 * @example
 * array_unshift([1, 2, 3], 4, 5);
 * // => [4, 5, 1, 2, 3]
 */
function array_unshift(array) {
    return T.is_array(array) ? array_rest(U.to_array(arguments)).concat(array) : [];
}

/**
 * Return first element from a collection.
 * Unlike array_first where function always return empty collection ([])
 * if nothing is found or input is invalid, array_shift returns undefined as a result.
 *
 * NOTE: array_shift does not mutate original array like native js array.shift()
 *
 * @param {Array} array Array to process.
 * @return {*} Returns first element from an array.
 * @example
 * array_shift([1, 2, 3, 4]);
 * // => 1
 * @example
 * array_shift({name: 'Stefan'});
 * // => undefined
 */
function array_shift(array) {
    return T.is_array(array) ? array[0] : void 0;
}

/**
 * Reverses an array in place. The first array element becomes the last,
 * and the last array element becomes the first.
 *
 * @param {Array} array Array to process.
 * @returns {Array} Returns reversed array.
 * @example
 * array_reverse([1, 2, 3, 4]);
 * // => [4, 3, 2, 1]
 */
function array_reverse(array) {
    if (T.is_array(array)) {
        let numberOfElements = U.length(array);
        return array.map(function mapElementReversed(value, index) {
            return array[numberOfElements - (index + 1)];
        });
    }

    return [];
}

module.exports = {
    array_first,
    array_initial,
    array_last,
    array_rest,
    array_compact,
    array_flatten,
    array_without,
    array_unique,
    array_union,
    array_intersection,
    array_shuffle,
    array_pluck,
    array_push,
    array_pop,
    array_unshift,
    array_shift,
    array_reverse
};
