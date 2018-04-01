/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * JavaScript type validations.
 * @module Types
 */

/**
 * Determines whether the passed value is an array.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is an array, otherwise false.
 * @example
 * is_array([1, 2, 3])
 * // => true
 * @example
 * (function() { return is_array(arguments); })();
 * // => false
 */
function is_array(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

/**
 * Determines whether the passed value is an object.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is an object, otherwise false.
 * @example
 * function Coordinate(x = 0, y = 0) {
 *     this.x = x;
 *     this.y = y;
 * }
 *
 * is_object(new Coordinate(10, 15));
 * // => true
 * @example
 * is_object({ 'x': 0, 'y': 0 });
 * // => true
 * @example
 * is_object([1, 2, 3])
 * // => false
 */
function is_object(value) {
    return value === Object(value) && !is_array(value);
}

/**
 * Determines whether the passed value is an strict string.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is an string, otherwise false.
 * @example
 * is_string("Hello World!");
 * // => true
 */
function is_string(value) {
    return typeof value === 'string';
}

/**
 * Determines whether the passed value is a number.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is an number, otherwise false.
 * @example
 * is_number(10)
 * // => true
 * @example
 * is_number(NaN)
 * // => false
 */
function is_number(value) {
    return typeof value === 'number' && !is_NaN(value);
}

/**
 * Determines whether the passed value is an boolean.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} true if the value is an boolean, otherwise false.
 * @example
 * is_boolean(false)
 * // => true
 */
function is_boolean(value) {
    return typeof value === 'boolean';
}

/**
 * Determines whether the passed value is an function.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} true if the value is an function, otherwise false.
 * @example
 * is_function(is_boolean)
 * // => true
 */
function is_function(value) {
    return typeof value === 'function';
}

/**
 * Determines whether the passed value is an null.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is null, otherwise false.
 * @example
 * is_null(null)
 * // => true
 * @example
 * is_null(void 0)
 * // => false
 */
function is_null(value) {
    return value === null;
}

/**
 * Determines whether the passed value is undefined.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is undefined, otherwise false.
 * @example
 * is_undefined(void 0)
 * // => true
 * @example
 * is_undefined(null)
 * // => false
 */
function is_undefined(value) {
    return value === void 0;
}

/**
 * Determines whether the passed value is not null or undefined.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is defined, otherwise false.
 * @example
 * const Person = {
 *     a: 10
 * };
 *
 * is_defined(Person.a);
 * // => true
 * is_defined(Person.b);
 * // => false
 */
function is_defined(value) {
    return !is_null(value) && !is_undefined(value) && !is_NaN(value);
}

/**
 * Determines whether the passed value is not a number. (NaN)
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is an NaN, otherwise false.
 * @example
 * is_NaN(1 / 'a');
 * // => true
 * is_NaN('a');
 * // => false
 */
function is_NaN(value) {
    return value !== value;
}

/**
 * Determines whether the passed value is an Date object.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} true if the value is Date object, otherwise false.
 * @example
 * const date = new Date();
 *
 * is_date(date);
 * // => true
 *
 * is_date(new Date().getYear());
 * // => false
 */
function is_date(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * Determines if a value is valid JSON string.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is a valid JSON string, otherwise false.
 * @example
 * const ajaxData = {
 *     url: www.linkedin.com/in/stefan-lazarevic
 * };
 *
 * is_json(JSON.stringify(ajaxData))
 * // => true
 * is_json("Hello World")
 * // => false
 * is_json(ajaxData)
 * // => false
 */
function is_json(value) {
    if (is_string(value)) {
        try {
            JSON.parse(value);
            return true;
        } catch (err) {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * Determines if a value is valid Symbol.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is an symbol, otherwise false.
 * @example
 * is_symbol(Symbol('x')
 * // => true
 */
function is_symbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol';
}

module.exports = {
    is_array: is_array,
    is_object: is_object,
    is_string: is_string,
    is_number: is_number,
    is_boolean: is_boolean,
    is_function: is_function,
    is_null: is_null,
    is_undefined: is_undefined,
    is_defined: is_defined,
    is_NaN: is_NaN,
    is_date: is_date,
    is_json: is_json,
    is_symbol: is_symbol
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(4);
var T = __webpack_require__(0);

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
    var _min = 0,
        _max = 100;

    if (T.is_number(min) && !T.is_defined(max)) {
        _min = 0;
        _max = min;
    }

    if (T.is_number(min) && T.is_number(max)) {
        _min = min;
        _max = max;
    }

    return Math.floor(Math.random() * (_max - _min + 1) + _min);
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
    return T.is_array(array) ? Boolean(~array.indexOf(value)) : false;
}

/**
 * Return type of provided value.
 * Prevent pitfall types such as NaN, null, []
 *
 * @param {mix} [value = 'undefined'] Checked value.
 * @returns {String} A type of value.
 * @example
 * type(null)
 * // => 'null'
 * @example
 * type([1, 2, 3])
 * // => 'array'
 * @example
 * type(NaN)
 * // => 'NaN
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

    return typeof value === 'undefined' ? 'undefined' : _typeof(value);
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

    if (!T.is_defined(iteratableObject)) {
        return 0;
    }

    if (T.is_object(iteratableObject)) {
        return Object.keys(iteratableObject).length;
    }

    if (T.is_string(iteratableObject) || T.is_array(iteratableObject)) {
        return iteratableObject.length;
    }

    return 0;
}

module.exports = {
    random_number: random_number,
    to_array: to_array,
    in_array: in_array,
    type: type,
    length: length
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(1),
    type = _require.type;

/**
 * A collection of error throwing functions.
 * @module Error
 */

/**
 * Throw new TypeError with invalid message.
 *
 * @param {String} expected
 * @param {*} actual
 * @throws {TypeError}
 */


function throwTypeError(expectedType) {
  /* istanbul ignore next */
  if (type(expectedType) !== 'string') {
    throwTypeError('string', expectedType);
  }

  return function (value) {
    throw new TypeError('Expected \'' + expectedType + '\' but instead received \'' + type(value) + '\'.');
  };
}

/**
 * Composed throwTypeError function.
 * Throw error with string type message.
 *
 * @param {*} value
 * @throws {TypeError}
 */
var throwStringTypeError = throwTypeError('string');

/**
 * Composed throwTypeError function.
 * Throw error with function type message.
 *
 * @param {*} value
 * @throws {TypeError}
 */
var throwFunctionTypeError = throwTypeError('function');

/**
 * Composed throwTypeError function.
 * Throw error with object type message.
 *
 * @param {*} value
 * @throws {TypeError}
 */
var throwObjectTypeError = throwTypeError('object');

module.exports = {
  throwTypeError: throwTypeError,
  throwStringTypeError: throwStringTypeError,
  throwFunctionTypeError: throwFunctionTypeError,
  throwObjectTypeError: throwObjectTypeError
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);
var T = __webpack_require__(0);
var U = __webpack_require__(1);

var _require = __webpack_require__(5),
    object_pluck = _require.object_pluck;

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
    var args = arguments;
    var arg0 = args[0]; // Expecting number or array.
    var arg1 = args[1]; // Expecting array or boolean or nothing.

    var numberOfArguments = U.length(args);

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
    var args = arguments;
    var arg0 = args[0]; // Expecting number or array.
    var arg1 = args[1]; // Expecting array or nothing.

    var numberOfArguments = U.length(args);

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
    var args = arguments;
    var arg0 = args[0]; // Expecting number or array.
    var arg1 = args[1]; // Expecting array or nothing.

    var numberOfArguments = U.length(args);

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
    var args = arguments;
    var arg0 = args[0]; // Expecting number or array.
    var arg1 = args[1]; // Expecting array or nothing.

    var numberOfArguments = U.length(args);

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
    var arg0 = arguments[0]; // Expecting array.
    var arg1 = arguments[1]; // Expecting boolean flag.

    if (T.is_array(arg0)) {
        if (arg1) {
            // If shallow, perform one level flattening.
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
    var rest = array_rest(U.to_array(arguments));

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
    var arrays = U.to_array(arguments);
    var mainArray = array_first(arrays, true);
    var rest = array_rest(arrays);
    var intersection = [];

    if (U.length(arrays) === 0) {
        return [];
    }

    if (!T.is_array(mainArray) || U.length(mainArray) === 0) {
        return [];
    }

    /* istanbul ignore next */
    first: for (var i = 0; i < U.length(mainArray); i++) {
        var value = mainArray[i];
        for (var j = 0; j < U.length(rest); j++) {
            var array = rest[j];
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

    var index = void 0,
        temp = void 0,
        randomIndex = void 0;
    var arrayClone = [].concat(array);
    var arrayLength = U.length(arrayClone);

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
        var pluckedArray = [];
        var index = 0;
        var numberOfItems = U.length(array);
        for (index; index < numberOfItems; index++) {
            /* istanbul ignore next */
            if (T.is_object(array[index])) {
                var value = object_pluck(key, array[index]);
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
        var numberOfElements = U.length(array);
        return array.map(function mapElementReversed(value, index) {
            return array[numberOfElements - (index + 1)];
        });
    }

    return [];
}

module.exports = {
    array_first: array_first,
    array_initial: array_initial,
    array_last: array_last,
    array_rest: array_rest,
    array_compact: array_compact,
    array_flatten: array_flatten,
    array_without: array_without,
    array_unique: array_unique,
    array_union: array_union,
    array_intersection: array_intersection,
    array_shuffle: array_shuffle,
    array_pluck: array_pluck,
    array_push: array_push,
    array_pop: array_pop,
    array_unshift: array_unshift,
    array_shift: array_shift,
    array_reverse: array_reverse
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * An Object containing length parameter.
 * @typedef {(array|string)} IteratableObject
 */


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var T = __webpack_require__(0);
var E = __webpack_require__(2);

var _require = __webpack_require__(1),
    length = _require.length;

/**
 * A collection of object manipulating functions.
 * @module Object
 */

/**
 * Retrieves the value of a specified property from provided object.
 *
 * @param {string} key
 * @param {object} object
 * @throws {TypeError}
 * @example
 * const person = {
 *     name: 'Stefan',
 *     address: {
 *         city: 'Belgrade',
 *         area: {
 *             name: 'Cukarica',
 *         }
 *     }
 * };
 *
 * object_pluck('address.area.name', person);
 * // => 'Cukarica'
 *
 * object_pluck('address.name.area', person);
 * // => undefined
 */


function object_pluck(key, object) {
    var numberOfArguments = length(arguments);

    if (!T.is_string(key)) {
        E.throwStringTypeError(key);
    }

    if (numberOfArguments === 1) {
        return function getObject(_object) {
            if (!T.is_object(_object)) {
                E.throwObjectTypeError(_object);
            }

            return _deepAccessPluck(_object, key);
        };
    }

    if (!T.is_object(object)) {
        E.throwObjectTypeError(object);
    }

    return _deepAccessPluck(object, key);

    /**
     * Extract value from an deep nested object.
     *
     * @private
     * @param {Object} object
     * @param {String} key Key or nested key path in the object.
     * @example
     * const person = {
     *     name: 'Stefan',
     *     address: {
     *         city: 'Belgrade',
     *         area: {
     *             name: 'Cukarica',
     *         }
     *     }
     * };
     * _deepAccessPluck(person, 'address.area.name')
     * // => 'Cukarica'
     * _deepAccessPluck(person, 'address.city.area.name')
     * // => undefined
     */
    function _deepAccessPluck(object, key) {
        return key.split('.').reduce(function checkExistence(deepObject, key) {
            if (deepObject && key in deepObject) {
                return deepObject[key];
            }
        }, object);
    }
}

/**
 * The object_keys function returns an array of a given object's own enumerable properties.
 *
 * @param {Object} object The object to query.
 * @return {Array} Returns the array of property names.
 * @example
 * const person = {
 *     fname: 'Stefan',
 *     lname: 'Lazarevic',
 * };
 *
 * object_keys(person);
 * // => ['fname', 'lname']
 */
function object_keys(object) {
    if (T.is_object(object) || T.is_array(object) || T.is_string(object)) {
        var keys = [];
        var key = void 0;
        for (key in object) {
            /* istanbul ignore next */
            if (object.hasOwnProperty(key)) {
                keys.push(key);
            }
        }

        return keys;
    }

    return [];
}

/**
 * Creates an array of the own enumerable property values of object.
 *
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @throws {TypeError}
 * @example
 * const person = {
 *     fname: 'Stefan',
 *     lname: 'Lazarevic',
 * };
 *
 * object_values(person);
 * // => ['Stefan', 'Lazarevic']
 */
function object_values(object) {
    if (T.is_object(object)) {
        var values = [];
        var key = void 0;

        for (key in object) {
            /* istanbul ignore next */
            if (object.hasOwnProperty(key)) {
                values.push(object[key]);
            }
        }

        return values;
    }

    E.throwObjectTypeError(object);
}

/**
 * Creates an object composed of the inverted keys and values of object.
 * If object contains duplicate values, and subsequent values overwrite property assignments of previous values.
 *
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @throws {TypeError}
 * @example
 * const person = {
 *     fname: 'Stefan',
 *     lname: 'Lazarevic',
 * };
 *
 * object_invert(person);
 * // => {
 * //        Stefan: 'fname',
 * //        Lazarevic: 'lname',
 * //    }
 */
function object_invert(object) {
    if (T.is_object(object)) {
        var invertedObject = {};
        var key = void 0;
        for (key in object) {
            /* istanbul ignore next */
            if (object.hasOwnProperty(key)) {
                var value = object[key];
                if (T.is_defined(value) && !T.is_function(value)) {
                    invertedObject[value] = key;
                }
            }
        }

        return invertedObject;
    }

    E.throwObjectTypeError(object);
}

module.exports = {
    object_pluck: object_pluck,
    object_keys: object_keys,
    object_values: object_values,
    object_invert: object_invert
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var A = __webpack_require__(3);
var D = __webpack_require__(7);
var E = __webpack_require__(2);
var F = __webpack_require__(8);
var O = __webpack_require__(5);
var S = __webpack_require__(9);
var T = __webpack_require__(0);
var U = __webpack_require__(1);

window.A = A;
window.D = D;
window.E = E;
window.F = F;
window.O = O;
window.S = S;
window.E = E;
window.T = T;
window.U = U;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var A = __webpack_require__(3);
var T = __webpack_require__(0);
var U = __webpack_require__(1);
var E = __webpack_require__(2);

/**
 * A collection of FP style functions.
 * @module Function
 */

/**
 * Currying refers to the process of transforming a function with multiple arity
 * into the same function with less arity. The curried effect is achieved by binding
 * some of the arguments to the first function invoke,
 * so that those values are fixed for the next invocation.
 *
 * https://en.wikipedia.org/wiki/Currying
 *
 * @param {Function} fn
 * @return {Function|mix}
 * @throws {TypeError}
 */
function curry(fn) {
    if (T.is_function(fn)) {
        var args = A.array_rest(U.to_array(arguments));
        return function takeMissingArguments() {
            return fn.apply(this, args.concat(U.to_array(arguments)));
        };
    } else {
        E.throwFunctionTypeError(fn);
    }
}

/**
 * Function composition is the process of combining two or more functions
 * to produce new function. Composed function take data and process it
 * through all pipes from right to left producing new data. (f o g) => f(g(o));
 *
 * https://en.wikipedia.org/wiki/Function_composition_(computer_science)
 *
 * @param {Function}
 * @return {Function|mix}
 */
function compose() {
    var functions = arguments;
    var index = functions.length;
    return function composeValue(value) {
        --index;
        return index > -1 ? composeValue(functions[index](value)) : value;
    };
}

/**
 * Creates a version of the function that can only be called one time.
 *
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
    var done = false;
    return function () {
        return done ? void 0 : (done = true, fn.apply(this, arguments));
    };
}

module.exports = {
    curry: curry,
    compose: compose,
    once: once
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var T = __webpack_require__(0);
var E = __webpack_require__(2);

/**
 * A collection of string manipulating functions.
 * @module String
 */

/**
 * The string_trim() method returns the string stripped of whitespace from both ends.
 * string_trim() does not affect the value of the * string itself.
 *
 * Example usage:
 *
 * string_trim("  Stefan Lazarevic   ") => "Stefan Lazarevic"
 *
 * @param {String} value
 * @return {String}
 */
function string_trim(value) {
    if (T.is_string(value)) {
        return value.replace(/^\s+|\s+$/g, '');
    }

    E.throwStringTypeError(value);
}

/**
 * Return received string with first letter in uppercase.
 *
 * @param {String} value
 * @return {String}
 */
function string_capitalize(value) {
    if (T.is_string(value)) {
        return value.replace(/^\w/, function (character) {
            return character.toUpperCase();
        });
    }

    /* istanbul ignore next */
    E.throwStringTypeError(value);
}

/**
 * Build a new string using provided pattern with 'x' mark representing
 * each value placeholder. Accepts 3 different type of value containers:
 * Array, String and Number.
 *
 * @param {String} pattern A pattern that will be fullfilled.
 * @param {Array|Number|String} toReplace
 * @returns {String} New string with fullfilled pattern placeholders.
 * @throws {TypeError}
 * @example
 * string_pattern('+x (x) x-x', ['381', '62', '555', '333'])
 * // => '+381 (62) 555-333'
 * @example
 * string_pattern('xxxx-xxxx-xxxx-xxxx', 4242424242424242);
 * // => '4242-4242-4242-4242'
 * @example
 * string_pattern('xxx-xxx')('123456');
 * // => '123-456'
 */
function string_pattern(pattern, replacement) {
    if (T.is_string(pattern)) {
        var patternTokens = pattern.split('');

        if (!T.is_defined(replacement)) {
            return function takeReplacement(_replacement) {
                return _formatPattern(patternTokens, _replacement);
            };
        }

        return _formatPattern(patternTokens, replacement);
    }

    E.throwStringTypeError(pattern);

    /**
     *
     * @param {String} pattern
     * @param {Array} array
     * @private
     */
    function _formatPattern(patternTokens, _replacement) {
        var xTokenIndex = 0;
        var replacement = Array(0);

        if (T.is_number(_replacement)) {
            replacement = _replacement.toString().split('');
        }

        if (T.is_string(_replacement)) {
            replacement = _replacement.split('');
        }

        if (T.is_array(_replacement)) {
            replacement = _replacement;
        }

        return patternTokens.reduce(function (patternString, token) {
            if (token === 'x') {
                var replaceValue = replacement[xTokenIndex];
                if (T.is_defined(replaceValue)) {
                    patternString += replaceValue;
                    xTokenIndex++;
                    return patternString;
                }

                return patternString;
            }

            return patternString += token;
        }, '');
    }
}

module.exports = {
    string_trim: string_trim,
    string_capitalize: string_capitalize,
    string_pattern: string_pattern
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzU1MzIzOTY5YTYzNWUxOThlNDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3R5cGVzL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsaXR5L3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Vycm9ycy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FycmF5L2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9qc2RvY3MvanNkb2NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vYmplY3Qvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZnVuY3Rpb24vZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0cmluZy9zdHJpbmcuanMiXSwibmFtZXMiOlsiaXNfYXJyYXkiLCJ2YWx1ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImlzX29iamVjdCIsImlzX3N0cmluZyIsImlzX251bWJlciIsImlzX05hTiIsImlzX2Jvb2xlYW4iLCJpc19mdW5jdGlvbiIsImlzX251bGwiLCJpc191bmRlZmluZWQiLCJpc19kZWZpbmVkIiwiaXNfZGF0ZSIsImlzX2pzb24iLCJKU09OIiwicGFyc2UiLCJlcnIiLCJpc19zeW1ib2wiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIlQiLCJyYW5kb21fbnVtYmVyIiwibWluIiwibWF4IiwiX21pbiIsIl9tYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b19hcnJheSIsIml0ZXJhdGFibGVPYmplY3QiLCJBcnJheSIsInNsaWNlIiwiaW5fYXJyYXkiLCJhcnJheSIsIkJvb2xlYW4iLCJpbmRleE9mIiwidHlwZSIsImxlbmd0aCIsImtleXMiLCJ0aHJvd1R5cGVFcnJvciIsImV4cGVjdGVkVHlwZSIsIlR5cGVFcnJvciIsInRocm93U3RyaW5nVHlwZUVycm9yIiwidGhyb3dGdW5jdGlvblR5cGVFcnJvciIsInRocm93T2JqZWN0VHlwZUVycm9yIiwiVSIsIm9iamVjdF9wbHVjayIsImFycmF5X2ZpcnN0IiwiYXJncyIsImFyZ3VtZW50cyIsImFyZzAiLCJhcmcxIiwibnVtYmVyT2ZBcmd1bWVudHMiLCJjb25jYXQiLCJfYXJyYXkiLCJhcnJheV9pbml0aWFsIiwidGFrZUFycmF5IiwiYXJyYXlfbGFzdCIsImFycmF5X3Jlc3QiLCJhcnJheV9jb21wYWN0IiwiZmlsdGVyIiwiY2hlY2tJZkZhbHN5IiwiZWxlbWVudCIsImFycmF5X2ZsYXR0ZW4iLCJyZWR1Y2UiLCJhY2MiLCJhcnJheV93aXRob3V0IiwicmVzdCIsImFycmF5X3VuaXF1ZSIsImNoZWNrUG9zaXRpb24iLCJpbmRleCIsImFycmF5X3VuaW9uIiwiYXJyYXlfaW50ZXJzZWN0aW9uIiwiYXJyYXlzIiwibWFpbkFycmF5IiwiaW50ZXJzZWN0aW9uIiwiZmlyc3QiLCJpIiwiaiIsInB1c2giLCJhcnJheV9zaHVmZmxlIiwidGVtcCIsInJhbmRvbUluZGV4IiwiYXJyYXlDbG9uZSIsImFycmF5TGVuZ3RoIiwiYXJyYXlfcGx1Y2siLCJrZXkiLCJfY29tcHV0ZVBsdWNraW5nIiwicGx1Y2tlZEFycmF5IiwibnVtYmVyT2ZJdGVtcyIsImFycmF5X3B1c2giLCJhcnJheV9wb3AiLCJhcnJheV91bnNoaWZ0IiwiYXJyYXlfc2hpZnQiLCJhcnJheV9yZXZlcnNlIiwibnVtYmVyT2ZFbGVtZW50cyIsIm1hcCIsIm1hcEVsZW1lbnRSZXZlcnNlZCIsIkUiLCJvYmplY3QiLCJnZXRPYmplY3QiLCJfb2JqZWN0IiwiX2RlZXBBY2Nlc3NQbHVjayIsInNwbGl0IiwiY2hlY2tFeGlzdGVuY2UiLCJkZWVwT2JqZWN0Iiwib2JqZWN0X2tleXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdF92YWx1ZXMiLCJ2YWx1ZXMiLCJvYmplY3RfaW52ZXJ0IiwiaW52ZXJ0ZWRPYmplY3QiLCJBIiwiRCIsIkYiLCJPIiwiUyIsIndpbmRvdyIsImN1cnJ5IiwiZm4iLCJ0YWtlTWlzc2luZ0FyZ3VtZW50cyIsImFwcGx5IiwiY29tcG9zZSIsImZ1bmN0aW9ucyIsImNvbXBvc2VWYWx1ZSIsIm9uY2UiLCJkb25lIiwic3RyaW5nX3RyaW0iLCJyZXBsYWNlIiwic3RyaW5nX2NhcGl0YWxpemUiLCJjaGFyYWN0ZXIiLCJ0b1VwcGVyQ2FzZSIsInN0cmluZ19wYXR0ZXJuIiwicGF0dGVybiIsInJlcGxhY2VtZW50IiwicGF0dGVyblRva2VucyIsInRha2VSZXBsYWNlbWVudCIsIl9yZXBsYWNlbWVudCIsIl9mb3JtYXRQYXR0ZXJuIiwieFRva2VuSW5kZXgiLCJwYXR0ZXJuU3RyaW5nIiwidG9rZW4iLCJyZXBsYWNlVmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNyQixXQUFPQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLEtBQS9CLE1BQTBDLGdCQUFqRDtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxTQUFTSyxTQUFULENBQW1CTCxLQUFuQixFQUEwQjtBQUN0QixX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QUFjSDtBQUNKOztBQUVEN0gsT0FBT0MsT0FBUCxHQUFpQjtBQUNiOEcsNEJBRGE7QUFFYkUsd0NBRmE7QUFHYkc7QUFIYSxDQUFqQixDIiwiZmlsZSI6ImpzZWFzeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM1NTMyMzk2OWE2MzVlMTk4ZTQ2IiwiLyoqXG4gKiBKYXZhU2NyaXB0IHR5cGUgdmFsaWRhdGlvbnMuXG4gKiBAbW9kdWxlIFR5cGVzXG4gKi9cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogaXNfYXJyYXkoWzEsIDIsIDNdKVxuICogLy8gPT4gdHJ1ZVxuICogQGV4YW1wbGVcbiAqIChmdW5jdGlvbigpIHsgcmV0dXJuIGlzX2FycmF5KGFyZ3VtZW50cyk7IH0pKCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc19hcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGZ1bmN0aW9uIENvb3JkaW5hdGUoeCA9IDAsIHkgPSAwKSB7XG4gKiAgICAgdGhpcy54ID0geDtcbiAqICAgICB0aGlzLnkgPSB5O1xuICogfVxuICpcbiAqIGlzX29iamVjdChuZXcgQ29vcmRpbmF0ZSgxMCwgMTUpKTtcbiAqIC8vID0+IHRydWVcbiAqIEBleGFtcGxlXG4gKiBpc19vYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqIEBleGFtcGxlXG4gKiBpc19vYmplY3QoWzEsIDIsIDNdKVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNfb2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBPYmplY3QodmFsdWUpICYmICFpc19hcnJheSh2YWx1ZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gc3RyaWN0IHN0cmluZy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIHN0cmluZywgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX3N0cmluZyhcIkhlbGxvIFdvcmxkIVwiKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNfc3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBudW1iZXIsIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBpc19udW1iZXIoMTApXG4gKiAvLyA9PiB0cnVlXG4gKiBAZXhhbXBsZVxuICogaXNfbnVtYmVyKE5hTilcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX251bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc19OYU4odmFsdWUpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGJvb2xlYW4uXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gYm9vbGVhbiwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX2Jvb2xlYW4oZmFsc2UpXG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzX2Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gZnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBpc19mdW5jdGlvbihpc19ib29sZWFuKVxuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc19mdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gbnVsbC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIG51bGwsIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBpc19udWxsKG51bGwpXG4gKiAvLyA9PiB0cnVlXG4gKiBAZXhhbXBsZVxuICogaXNfbnVsbCh2b2lkIDApXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc19udWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX3VuZGVmaW5lZCh2b2lkIDApXG4gKiAvLyA9PiB0cnVlXG4gKiBAZXhhbXBsZVxuICogaXNfdW5kZWZpbmVkKG51bGwpXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc191bmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHZvaWQgMDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgbnVsbCBvciB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkLCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogY29uc3QgUGVyc29uID0ge1xuICogICAgIGE6IDEwXG4gKiB9O1xuICpcbiAqIGlzX2RlZmluZWQoUGVyc29uLmEpO1xuICogLy8gPT4gdHJ1ZVxuICogaXNfZGVmaW5lZChQZXJzb24uYik7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc19kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc19udWxsKHZhbHVlKSAmJiAhaXNfdW5kZWZpbmVkKHZhbHVlKSAmJiAhaXNfTmFOKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgYSBudW1iZXIuIChOYU4pXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBOYU4sIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBpc19OYU4oMSAvICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKiBpc19OYU4oJ2EnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX05hTih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gRGF0ZSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgRGF0ZSBvYmplY3QsIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAqXG4gKiBpc19kYXRlKGRhdGUpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIGlzX2RhdGUobmV3IERhdGUoKS5nZXRZZWFyKCkpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNfZGF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIHZhbGlkIEpTT04gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSB2YWxpZCBKU09OIHN0cmluZywgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGFqYXhEYXRhID0ge1xuICogICAgIHVybDogd3d3LmxpbmtlZGluLmNvbS9pbi9zdGVmYW4tbGF6YXJldmljXG4gKiB9O1xuICpcbiAqIGlzX2pzb24oSlNPTi5zdHJpbmdpZnkoYWpheERhdGEpKVxuICogLy8gPT4gdHJ1ZVxuICogaXNfanNvbihcIkhlbGxvIFdvcmxkXCIpXG4gKiAvLyA9PiBmYWxzZVxuICogaXNfanNvbihhamF4RGF0YSlcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX2pzb24odmFsdWUpIHtcbiAgICBpZiAoaXNfc3RyaW5nKHZhbHVlKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyB2YWxpZCBTeW1ib2wuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBzeW1ib2wsIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBpc19zeW1ib2woU3ltYm9sKCd4JylcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNfc3ltYm9sKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlzX2FycmF5LFxuICAgIGlzX29iamVjdCxcbiAgICBpc19zdHJpbmcsXG4gICAgaXNfbnVtYmVyLFxuICAgIGlzX2Jvb2xlYW4sXG4gICAgaXNfZnVuY3Rpb24sXG4gICAgaXNfbnVsbCxcbiAgICBpc191bmRlZmluZWQsXG4gICAgaXNfZGVmaW5lZCxcbiAgICBpc19OYU4sXG4gICAgaXNfZGF0ZSxcbiAgICBpc19qc29uLFxuICAgIGlzX3N5bWJvbFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90eXBlcy90eXBlcy5qcyIsInJlcXVpcmUoJy4uL2pzZG9jcy9qc2RvY3MnKTtcbmNvbnN0IFQgPSByZXF1aXJlKCcuLi90eXBlcy90eXBlcycpO1xuXG4vKipcbiAqIENvbGxlY3Rpb24gb2YgVXRpbGl0eSBmdW5jdGlvbnMuXG4gKiA8c2NyaXB0IHNyYz1cInNjcmlwdHMvanNlYXN5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICogQG1vZHVsZSBVdGlsaXR5XG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heC4gKGluY2x1c2l2ZSlcbiAqIElmIHlvdSBvbmx5IHBhc3Mgb25lIGFyZ3VtZW50LCBpdCB3aWxsIHJldHVybiBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIHRoYXQgbnVtYmVyLlxuICogQnkgZGVmYXVsdCByYW5kb20gbnVtYmVyIHJhbmdlIGlzIGJldHdlZW4gMCBhbmQgMTAwLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBbbWluID0gMF0gQSBtaW5pbXVtIHBvc2libGUgbnVtYmVyIGdlbmVyYXRlZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbWF4ID0gMTAwXSBBIG1heGltdW0gcG9zaWJsZSBudW1iZXIgZ2VuZXJhdGVkLlxuICogQHJldHVybnMge051bWJlcn0gUmV0dXJucyB0aGUgcmFuZG9tIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKiByYW5kb21fbnVtYmVyKClcbiAqIC8vID0+IHJldHVybnMgYW4gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDEwMFxuICogQGV4YW1wbGVcbiAqIHJhbmRvbV9udW1iZXIoNTApXG4gKiAvLyA9PiByZXR1cm5zIGFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCA1MFxuICogQGV4YW1wbGVcbiAqIHJhbmRvbV9udW1iZXIoNTAsIDIwMClcbiAqIC8vID0+IHJldHVybnMgYW4gaW50ZWdlciBiZXR3ZWVuIDUwIGFuZCAyMDBcbiAqL1xuZnVuY3Rpb24gcmFuZG9tX251bWJlcihtaW4sIG1heCkge1xuICAgIGxldCBfbWluID0gMCwgX21heCA9IDEwMDtcblxuICAgIGlmIChULmlzX251bWJlcihtaW4pICYmICFULmlzX2RlZmluZWQobWF4KSkge1xuICAgICAgICBfbWluID0gMDtcbiAgICAgICAgX21heCA9IG1pbjtcbiAgICB9XG5cbiAgICBpZiAoVC5pc19udW1iZXIobWluKSAmJiBULmlzX251bWJlcihtYXgpKSB7XG4gICAgICAgIF9taW4gPSBtaW47XG4gICAgICAgIF9tYXggPSBtYXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoX21heCAtIF9taW4gKyAxKSkgKyBfbWluKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVhbCBBcnJheSBmcm9tIHRoZSBsaXN0IChhbnl0aGluZyB0aGF0IGNhbiBiZSBpdGVyYXRlZCBvdmVyKS5cbiAqIFVzZWZ1bCBmb3IgdHJhbnNtdXRpbmcgdGhlIGFyZ3VtZW50cyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtJdGVyYXRhYmxlT2JqZWN0fSBpdGVyYXRhYmxlT2JqZWN0IEFuIG9iamVjdCB0aGF0IGhhcyBsZW5ndGggcHJvcGVydHkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IEFycmF5IGNvbnRhaW5pbmcgYWxsIHZhbHVlcyBmcm9tIGFuIEl0ZXJhdGFibGVPYmplY3QuXG4gKiBAZXhhbXBsZVxuICogdG9fYXJyYXkoezA6IDEwLCAxOiAyMCwgbGVuZ3RoOiAyfSlcbiAqIC8vID0+IFsxMCwgMjBdXG4gKiBAZXhhbXBsZVxuICogdG9fYXJyYXkoXCJ3b3JkXCIpXG4gKiAvLyA9PiBbXCJ3XCIsIFwib1wiLCBcInJcIiwgXCJkXCJdXG4gKi9cbmZ1bmN0aW9uIHRvX2FycmF5KGl0ZXJhdGFibGVPYmplY3QpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaXRlcmF0YWJsZU9iamVjdCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBjb2xsZWN0aW9uIGNvbnRhaW4gdmFsdWUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQ29sbGVjdGlvbiBpbiB3aGljaCB0aGUgdmFsdWUgaXMgc2VhcmNoZWQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFNlYXJjaGVkIHZhbHVlLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydXRoZnVsbmVzcyBvZiB0aGUgY29udGVudHMuXG4gKiBAZXhhbXBsZVxuICogaW5fYXJyYXkoWzEsIDIsIDMsIDRdLCAzKVxuICogLy8gPT4gdHJ1ZVxuICogQGV4YW1wbGVcbiAqIGluX2FycmF5KFsyLCA0LCA1LCAyLCAxXSwgNilcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGluX2FycmF5KGFycmF5LCB2YWx1ZSkge1xuICAgIHJldHVybiBULmlzX2FycmF5KGFycmF5KSA/IEJvb2xlYW4ofmFycmF5LmluZGV4T2YodmFsdWUpKSA6IGZhbHNlO1xufVxuXG4vKipcbiAqIFJldHVybiB0eXBlIG9mIHByb3ZpZGVkIHZhbHVlLlxuICogUHJldmVudCBwaXRmYWxsIHR5cGVzIHN1Y2ggYXMgTmFOLCBudWxsLCBbXVxuICpcbiAqIEBwYXJhbSB7bWl4fSBbdmFsdWUgPSAndW5kZWZpbmVkJ10gQ2hlY2tlZCB2YWx1ZS5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IEEgdHlwZSBvZiB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKiB0eXBlKG51bGwpXG4gKiAvLyA9PiAnbnVsbCdcbiAqIEBleGFtcGxlXG4gKiB0eXBlKFsxLCAyLCAzXSlcbiAqIC8vID0+ICdhcnJheSdcbiAqIEBleGFtcGxlXG4gKiB0eXBlKE5hTilcbiAqIC8vID0+ICdOYU5cbiAqL1xuZnVuY3Rpb24gdHlwZSh2YWx1ZSkge1xuICAgIGlmIChULmlzX05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdOYU4nO1xuICAgIH1cblxuICAgIGlmIChULmlzX2FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG5cbiAgICBpZiAoVC5pc19udWxsKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgdmFsdWU7XG59XG5cbi8qKlxuICogR2V0IGxlbmd0aCBvZiBsaXN0LCBudW1iZXIgb2YgcHJvcGVydGllcyBpbiBvYmplY3Qgb3IgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gc3RyaW5nLlxuICogRGVmYXVsdCByZXR1cm4gdmFsdWUgd2lsbCBiZSAwLlxuICpcbiAqIEBwYXJhbSB7SXRlcmF0YWJsZU9iamVjdH0gaXRlcmF0YWJsZU9iamVjdCBBbiBvYmplY3QgdGhhdCBoYXMgbGVuZ3RoIHByb3BlcnR5LlxuICogQHJldHVybnMge051bWJlcn0gU2l6ZSBvZiBhbiBpdGVyYXRhYmxlT2JqZWN0XG4gKiBAZXhhbXBsZVxuICogbGVuZ3RoKFsxLCAyLCAzLCA0XSlcbiAqIC8vID0+IDRcbiAqIEBleGFtcGxlXG4gKiBsZW5ndGgoe2E6IDEwLCBiOiAxNX0pXG4gKiAvLyA9PiAyXG4gKiBAZXhhbXBsZVxuICogbGVuZ3RoKFwiYWJjZGVmZ1wiKVxuICogLy8gPT4gN1xuICovXG5mdW5jdGlvbiBsZW5ndGgoaXRlcmF0YWJsZU9iamVjdCkge1xuXG4gICAgaWYgKCFULmlzX2RlZmluZWQoaXRlcmF0YWJsZU9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKFQuaXNfb2JqZWN0KGl0ZXJhdGFibGVPYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhpdGVyYXRhYmxlT2JqZWN0KS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKFQuaXNfc3RyaW5nKGl0ZXJhdGFibGVPYmplY3QpIHx8IFQuaXNfYXJyYXkoaXRlcmF0YWJsZU9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdGFibGVPYmplY3QubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICByYW5kb21fbnVtYmVyLFxuICAgIHRvX2FycmF5LFxuICAgIGluX2FycmF5LFxuICAgIHR5cGUsXG4gICAgbGVuZ3RoLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy91dGlsaXR5L3V0aWxpdHkuanMiLCJjb25zdCB7IHR5cGUgfSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvdXRpbGl0eScpO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBlcnJvciB0aHJvd2luZyBmdW5jdGlvbnMuXG4gKiBAbW9kdWxlIEVycm9yXG4gKi9cblxuLyoqXG4gKiBUaHJvdyBuZXcgVHlwZUVycm9yIHdpdGggaW52YWxpZCBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBlY3RlZFxuICogQHBhcmFtIHsqfSBhY3R1YWxcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqL1xuZnVuY3Rpb24gdGhyb3dUeXBlRXJyb3IoZXhwZWN0ZWRUeXBlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZShleHBlY3RlZFR5cGUpICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvd1R5cGVFcnJvcignc3RyaW5nJywgZXhwZWN0ZWRUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgJyR7ZXhwZWN0ZWRUeXBlfScgYnV0IGluc3RlYWQgcmVjZWl2ZWQgJyR7dHlwZSh2YWx1ZSl9Jy5gKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIENvbXBvc2VkIHRocm93VHlwZUVycm9yIGZ1bmN0aW9uLlxuICogVGhyb3cgZXJyb3Igd2l0aCBzdHJpbmcgdHlwZSBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqL1xuY29uc3QgdGhyb3dTdHJpbmdUeXBlRXJyb3IgPSB0aHJvd1R5cGVFcnJvcignc3RyaW5nJyk7XG5cbi8qKlxuICogQ29tcG9zZWQgdGhyb3dUeXBlRXJyb3IgZnVuY3Rpb24uXG4gKiBUaHJvdyBlcnJvciB3aXRoIGZ1bmN0aW9uIHR5cGUgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKi9cbmNvbnN0IHRocm93RnVuY3Rpb25UeXBlRXJyb3IgPSB0aHJvd1R5cGVFcnJvcignZnVuY3Rpb24nKTtcblxuLyoqXG4gKiBDb21wb3NlZCB0aHJvd1R5cGVFcnJvciBmdW5jdGlvbi5cbiAqIFRocm93IGVycm9yIHdpdGggb2JqZWN0IHR5cGUgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKi9cbmNvbnN0IHRocm93T2JqZWN0VHlwZUVycm9yID0gdGhyb3dUeXBlRXJyb3IoJ29iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0aHJvd1R5cGVFcnJvcixcbiAgICB0aHJvd1N0cmluZ1R5cGVFcnJvcixcbiAgICB0aHJvd0Z1bmN0aW9uVHlwZUVycm9yLFxuICAgIHRocm93T2JqZWN0VHlwZUVycm9yXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2Vycm9ycy9lcnJvcnMuanMiLCJyZXF1aXJlKCcuLi9qc2RvY3MvanNkb2NzJyk7XG5jb25zdCBUID0gcmVxdWlyZSgnLi4vdHlwZXMvdHlwZXMnKTtcbmNvbnN0IFUgPSByZXF1aXJlKCcuLi91dGlsaXR5L3V0aWxpdHknKTtcbmNvbnN0IHsgb2JqZWN0X3BsdWNrIH0gPSByZXF1aXJlKCcuLi9vYmplY3Qvb2JqZWN0Jyk7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGFycmF5IG1hbmlwdWxhdGluZyBmdW5jdGlvbnMuXG4gKiBAbW9kdWxlIEFycmF5XG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IGVsZW1lbnQgZnJvbSB0aGUgbGlzdC5cbiAqIEJ5IHByb3ZpZGluZyBudW1iZXIgKG4pIGFzIGEgZmlyc3QgYXJndW1lbnQsXG4gKiByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGUgZmlyc3QgbiBlbGVtZW50cyBmcm9tIGEgbGlzdC5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkFycmF5XG4gKiBAcGFyYW0ge051bWJlcnxBcnJheX0gbiBOdW1iZXIgb2YgZmlyc3QgdmFsdWVzIHRvIGdldCwgb3IgYXJyYXkuXG4gKiBAcGFyYW0ge0FycmF5fEJvb2xlYW59IFthcnJdIFRoZSBhcnJheSB0byBwcm9jZXNzLCBvciBhcnJheSBjb252ZXJ0IGZsYWcuXG4gKiBAcmV0dXJucyB7bWl4fEFycmF5fSBSZXR1cm5zIGZpcnN0IHZhbHVlIGZyb20gYXJyYXkgb3IgdGhlIG5ldyBhcnJheSBjb250YWluaW5nIG4gdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X2ZpcnN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAxXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfZmlyc3QoWzEsIDIsIDNdLCB0cnVlKTtcbiAqIC8vID0+IFsxXVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2ZpcnN0KDIsIFsxLCAyLCAzLCA0XSk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9maXJzdCgyKShbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIGFycmF5X2ZpcnN0KCkge1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY29uc3QgYXJnMCA9IGFyZ3NbMF07IC8vIEV4cGVjdGluZyBudW1iZXIgb3IgYXJyYXkuXG4gICAgY29uc3QgYXJnMSA9IGFyZ3NbMV07IC8vIEV4cGVjdGluZyBhcnJheSBvciBib29sZWFuIG9yIG5vdGhpbmcuXG5cbiAgICBjb25zdCBudW1iZXJPZkFyZ3VtZW50cyA9IFUubGVuZ3RoKGFyZ3MpO1xuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAyICYmIFQuaXNfbnVtYmVyKGFyZzApICYmIFQuaXNfYXJyYXkoYXJnMSkpIHtcbiAgICAgICAgcmV0dXJuIGFyZzEuc2xpY2UoMCwgYXJnMCk7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAyICYmIFQuaXNfYXJyYXkoYXJnMCkgJiYgVC5pc19ib29sZWFuKGFyZzEpKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoYXJnMFswXSk7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAxKSB7XG4gICAgICAgIGlmIChULmlzX2FycmF5KGFyZzApKSB7XG4gICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoYXJnMCkgPyBhcmcwWzBdIDogW107XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoVC5pc19udW1iZXIoYXJnMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoX2FycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKFQuaXNfYXJyYXkoX2FycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoX2FycmF5KSA/IF9hcnJheS5zbGljZSgwLCBhcmcwKSA6IFtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG5cbi8qKlxuICogUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuXG4gKiBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC5cbiAqIFBhc3MgbiB0byBleGNsdWRlIHRoZSBsYXN0IG4gZWxlbWVudHMgZnJvbSB0aGUgcmVzdWx0LlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6QXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfEFycmF5fSBuIE51bWJlciBvZiBsYXN0IHZhbHVlcyB0byBleGNsdWRlLCBvciBhcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgY29udGFpbmluZyBpbml0aWFsIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9pbml0aWFsKFs1LCA0LCAzLCAyLCAxXSk7XG4gKiAvLyA9PiBbNSwgNCwgMywgMl1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9pbml0aWFsKDIsIFs1LCA0LCAzLCAyLCAxXSk7XG4gKiAvLyA9PiBbNSwgNCwgM11cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9pbml0aWFsKDMpKFs1LCA0LCAzLCAyLCAxXSk7XG4gKiAvLyA9PiBbNSwgNF1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfaW5pdGlhbCgpIHtcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNvbnN0IGFyZzAgPSBhcmdzWzBdOyAvLyBFeHBlY3RpbmcgbnVtYmVyIG9yIGFycmF5LlxuICAgIGNvbnN0IGFyZzEgPSBhcmdzWzFdOyAvLyBFeHBlY3RpbmcgYXJyYXkgb3Igbm90aGluZy5cblxuICAgIGNvbnN0IG51bWJlck9mQXJndW1lbnRzID0gVS5sZW5ndGgoYXJncyk7XG5cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDIgJiYgVC5pc19udW1iZXIoYXJnMCkgJiYgVC5pc19hcnJheShhcmcxKSkge1xuICAgICAgICByZXR1cm4gYXJnMCA+IDAgPyBhcmcxLnNsaWNlKDAsIC1hcmcwKSA6IGFyZzEuc2xpY2UoMCwgLTEpO1xuICAgIH1cblxuICAgIGlmIChudW1iZXJPZkFyZ3VtZW50cyA9PT0gMSkge1xuICAgICAgICBpZiAoVC5pc19hcnJheShhcmcwKSkge1xuICAgICAgICAgICAgcmV0dXJuIFUubGVuZ3RoKGFyZzApID8gYXJnMC5zbGljZSgwLCAtMSkgOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmIChULmlzX251bWJlcihhcmcwKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VBcnJheShfYXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoX2FycmF5KSA/IF9hcnJheS5zbGljZSgwLCAtYXJnMCkgOiBbXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LlxuICogUGFzc2luZyBuIHdpbGwgcmV0dXJuIHRoZSBsYXN0IG4gZWxlbWVudHMgb2YgdGhlIGFycmF5LlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6QXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfEFycmF5fSBuIE51bWJlciBvZiBmaXJzdCBlbGVtZW50cyB0byBleGNsdWRlIG9yIEFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0ge0FycmF5fEJvb2xlYW59IGEgQXJyYXkgdG8gcHJvY2VzcyBvciBhcnJheSBjb252ZXJ0IGZsYWcuXG4gKiBAcmV0dXJuIHttaXh8QXJyYXl9IFJldHVybnMgbGFzdCB2YWx1ZSBvciB0aGUgbmV3IGFycmF5IGNvbnRhaW5pbmcgbGFzdCB2YWx1ZShzKVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2xhc3QoWzUsIDQsIDMsIDIsIDFdKTtcbiAqIC8vID0+IDFcbiAqIEBleGFtcGxlXG4gKiBhcnJheV9sYXN0KFs1LCA0LCAzLCAyLCAxXSwgdHJ1ZSk7XG4gKiAvLyA9PiBbMV1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9sYXN0KDIsIFs1LCA0LCAzLCAyLCAxXSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9sYXN0KDIpKFs1LCA0LCAzLCAyLCAxXSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfbGFzdCgpIHtcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNvbnN0IGFyZzAgPSBhcmdzWzBdOyAvLyBFeHBlY3RpbmcgbnVtYmVyIG9yIGFycmF5LlxuICAgIGNvbnN0IGFyZzEgPSBhcmdzWzFdOyAvLyBFeHBlY3RpbmcgYXJyYXkgb3Igbm90aGluZy5cblxuICAgIGNvbnN0IG51bWJlck9mQXJndW1lbnRzID0gVS5sZW5ndGgoYXJncyk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChudW1iZXJPZkFyZ3VtZW50cyA9PT0gMiAmJiBULmlzX251bWJlcihhcmcwKSAmJiBULmlzX2FycmF5KGFyZzEpKSB7XG4gICAgICAgIHJldHVybiBVLmxlbmd0aChhcmcxKSA/IGFyZzEuc2xpY2UoLWFyZzApIDogW107XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDIgJiYgVC5pc19hcnJheShhcmcwKSAmJiBULmlzX2Jvb2xlYW4oYXJnMSkpIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChhcmcwW1UubGVuZ3RoKGFyZzApIC0gMV0pO1xuICAgIH1cblxuICAgIGlmIChudW1iZXJPZkFyZ3VtZW50cyA9PT0gMSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoVC5pc19hcnJheShhcmcwKSkge1xuICAgICAgICAgICAgcmV0dXJuIFUubGVuZ3RoKGFyZzApID8gYXJnMFtVLmxlbmd0aChhcmcwKSAtIDFdIDogW107XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoVC5pc19udW1iZXIoYXJnMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiB0YWtlQXJyYXkoX2FycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFUubGVuZ3RoKF9hcnJheSkgPyBfYXJyYXkuc2xpY2UoLWFyZzApIDogW107XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIGluIGFuIGFycmF5LlxuICogUGFzcyBhbiBpbmRleCB0byByZXR1cm4gdGhlIHZhbHVlcyBvZiB0aGUgYXJyYXkgZnJvbSB0aGF0IGluZGV4IG9ud2FyZC5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkFycmF5XG4gKiBAcGFyYW0ge051bWJlcnxBcnJheX0gTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgb3IgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJdIEFycmF5IHRvIHByb2Nlc3NcbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgY29udGFpbmluZyByZXN0IHZhbHVlc1xuICogQGV4YW1wbGVcbiAqIGFycmF5X3Jlc3QoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IFsyLCAzLCA0XVxuICogYXJyYXlfcmVzdCgyLCBbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gWzMsIDRdXG4gKiBhcnJheV9yZXN0KDIpKFsxLCAyLCAzLCA0XSk7XG4gKiAvLyA9PiBbMywgNF1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfcmVzdCgpIHtcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNvbnN0IGFyZzAgPSBhcmdzWzBdOyAvLyBFeHBlY3RpbmcgbnVtYmVyIG9yIGFycmF5LlxuICAgIGNvbnN0IGFyZzEgPSBhcmdzWzFdOyAvLyBFeHBlY3RpbmcgYXJyYXkgb3Igbm90aGluZy5cblxuICAgIGNvbnN0IG51bWJlck9mQXJndW1lbnRzID0gVS5sZW5ndGgoYXJncyk7XG5cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDIgJiYgVC5pc19udW1iZXIoYXJnMCkgJiYgVC5pc19hcnJheShhcmcxKSkge1xuICAgICAgICByZXR1cm4gVS5sZW5ndGgoYXJnMSkgPyBhcmcxLnNsaWNlKGFyZzApIDogW107XG4gICAgfVxuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAxKSB7XG4gICAgICAgIGlmIChULmlzX2FycmF5KGFyZzApKSB7XG4gICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoYXJnMCkgPyBhcmcwLnNsaWNlKDEpIDogW107XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoVC5pc19udW1iZXIoYXJnMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiB0YWtlQXJyYXkoX2FycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFUubGVuZ3RoKF9hcnJheSkgPyBfYXJyYXkuc2xpY2UoYXJnMCkgOiBbXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggYWxsIGZhbHN5IHZhbHVlcyByZW1vdmVkLlxuICogSW4gSmF2YVNjcmlwdCwgZmFsc2UsIG51bGwsIDAsIFwiXCIsIHVuZGVmaW5lZCBhbmQgTmFOIGFyZSBhbGwgZmFsc3kuXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTpBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFycmF5IGNvbnRhaW5pbmcgdGhydXRoeSB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfY29tcGFjdChbMCwgMSwgXCJIZWxsb1wiLCB7fSwgbnVsbCwgWzEsIDIsIDNdLCB2b2lkIDBdKVxuICogLy8gPT4gWzEsIFwiSGVsbG9cIiwge30sIFsxLCAyLCAzXV1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfY29tcGFjdChhcnJheSkge1xuICAgIHJldHVybiBULmlzX2FycmF5KGFycmF5KSA/IGFycmF5LmZpbHRlcihmdW5jdGlvbiBjaGVja0lmRmFsc3koZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihlbGVtZW50KTtcbiAgICB9KSA6IFtdO1xufVxuXG4vKipcbiAqIEZsYXR0ZW5zIGEgbmVzdGVkIGFycmF5ICh0aGUgbmVzdGluZyBjYW4gYmUgdG8gYW55IGRlcHRoKS5cbiAqIElmIHlvdSBwYXNzIHNoYWxsb3csIHRoZSBhcnJheSB3aWxsIG9ubHkgYmUgZmxhdHRlbmVkIGEgc2luZ2xlIGxldmVsLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyciBBcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHtCb29sZWFufSBbc2hhbGxvd10gRmxhdCBvbmx5IG9uZSBsZXZlbCBpbiBkZXB0aC5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGZsYXR0ZW4gYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfZmxhdHRlbihbMSwgWzJdLCBbMywgW1s0XV1dXSlcbiAqIC8vID0+IFsxLCAyLCAzLCA0XVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2ZsYXR0ZW4oWzEsIFsyXSwgWzMsIFtbNF1dXV0sIHRydWUpO1xuICogLy8gPT4gWzEsIDIsIDMsIFtbNF1dXVxuICovXG5mdW5jdGlvbiBhcnJheV9mbGF0dGVuKCkge1xuICAgIGNvbnN0IGFyZzAgPSBhcmd1bWVudHNbMF07IC8vIEV4cGVjdGluZyBhcnJheS5cbiAgICBjb25zdCBhcmcxID0gYXJndW1lbnRzWzFdOyAvLyBFeHBlY3RpbmcgYm9vbGVhbiBmbGFnLlxuXG4gICAgaWYgKFQuaXNfYXJyYXkoYXJnMCkpIHtcbiAgICAgICAgaWYgKGFyZzEpIHsgLy8gSWYgc2hhbGxvdywgcGVyZm9ybSBvbmUgbGV2ZWwgZmxhdHRlbmluZy5cbiAgICAgICAgICAgIHJldHVybiBhcmcwLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcmcwLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoVC5pc19hcnJheSh2YWx1ZSkgPyBhcnJheV9mbGF0dGVuKHZhbHVlKSA6IHZhbHVlKTtcbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCBhbGwgaW5zdGFuY2VzIG9mIHRoZSB2YWx1ZXMgcmVtb3ZlZC5cbiAqXG4gKiBUT0RPOiBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7Li4uYXJndW1lbnRzfVxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgbmV3IGFycmF5IHdpdGhvdXQgdlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3dpdGhvdXQoWzEsIDIsIDMsIDQsIDVdLCAyLCA0KVxuICogLy8gPT4gWzEsIDMsIDVdXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3dpdGhvdXQoYXJyYXkpIHtcbiAgICBjb25zdCByZXN0ID0gYXJyYXlfcmVzdChVLnRvX2FycmF5KGFyZ3VtZW50cykpO1xuXG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gIVUuaW5fYXJyYXkocmVzdCwgdmFsdWUpO1xuICAgIH0pIDogW107XG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS5cbiAqXG4gKiBUT0RPOiBSZW1vdmUgZHVwbGljYXRlIG9iamVjdHMgYW5kIGlubmVyIGFycmF5cy5cbiAqXG4gKiBUT0RPOiBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFycmF5IHdpdGggZHVwbGljYXRlIGZyZWUgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3VuaXF1ZShbMSwgMiwgMiwgMywgNCwgMywgMSwgNSwgNSwgNywgNiwgNl0pXG4gKiAvLyA9PiBbMSwgMiwgMywgNCwgNSwgNywgNl1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfdW5pcXVlKGFycmF5KSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIGNoZWNrUG9zaXRpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4gICAgfSkgOiBbXTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgdW5pb24gb2YgdGhlIHBhc3NlZC1pbiBhcnJheXMgb3IgdmFsdWVzOlxuICogdGhlIGxpc3Qgb2YgdW5pcXVlIGl0ZW1zLCBpbiBvcmRlciwgdGhhdCBhcmUgcHJlc2VudCBpbiBvbmUgb3IgbW9yZSBvZiB0aGUgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3NcbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgY29tYmluZWQgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3VuaW9uKFsxLCAyLCAzXSwgWzEwMSwgMiwgMSwgMTBdLCBbMiwgMV0pXG4gKiAvLyA9PiBbMSwgMiwgMywgMTAxLCAxMF1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV91bmlvbigxLCAyLCBbMywgMl0sIDQsIFsyLCA1XSlcbiAqIC8vID0+IFsxLCAyLCAzLCA0LCA1XVxuICovXG5mdW5jdGlvbiBhcnJheV91bmlvbigpIHtcbiAgICByZXR1cm4gYXJyYXlfdW5pcXVlKGFycmF5X2ZsYXR0ZW4oVS50b19hcnJheShhcmd1bWVudHMpKSk7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGxpc3Qgb2YgdmFsdWVzIHRoYXQgYXJlIHRoZSBpbnRlcnNlY3Rpb24gb2YgYWxsIHRoZSBhcnJheXMuXG4gKiBFYWNoIHZhbHVlIGluIHRoZSByZXN1bHQgaXMgcHJlc2VudCBpbiBlYWNoIG9mIHRoZSBhcnJheXMuXG4gKlxuICogVE9ETzogUGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHNoYXJlZCB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfaW50ZXJzZWN0aW9uKFsxLCAyLCAzXSwgWzEwMSwgMiwgMSwgMTBdLCBbMiwgMV0pXG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfaW50ZXJzZWN0aW9uKCkge1xuICAgIGNvbnN0IGFycmF5cyA9IFUudG9fYXJyYXkoYXJndW1lbnRzKTtcbiAgICBjb25zdCBtYWluQXJyYXkgPSBhcnJheV9maXJzdChhcnJheXMsIHRydWUpO1xuICAgIGNvbnN0IHJlc3QgPSBhcnJheV9yZXN0KGFycmF5cyk7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uID0gW107XG5cbiAgICBpZiAoVS5sZW5ndGgoYXJyYXlzKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKCFULmlzX2FycmF5KG1haW5BcnJheSkgfHwgVS5sZW5ndGgobWFpbkFycmF5KSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBmaXJzdDpcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFUubGVuZ3RoKG1haW5BcnJheSk7IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG1haW5BcnJheVtpXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBVLmxlbmd0aChyZXN0KTsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IHJlc3Rbal07XG4gICAgICAgICAgICBpZiAoVC5pc19hcnJheShhcnJheSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVUuaW5fYXJyYXkocmVzdFtqXSwgbWFpbkFycmF5W2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBmaXJzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGludGVyc2VjdGlvbi5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrIGZpcnN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGludGVyc2VjdGlvbi5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlfdW5pcXVlKGludGVyc2VjdGlvbik7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHNodWZmbGVkIGNvcHkgb2YgdGhlIGxpc3QsIHVzaW5nIGEgRmlzaGVyLVlhdGVzIHNodWZmbGUgYWxnb3JpdGhtLlxuICpcbiAqIEJ1aWx0IHVzaW5nIEZpc2hlcuKAk1lhdGVzIHNodWZmbGUgYWxnb3JpdGhtLlxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVyJUUyJTgwJTkzWWF0ZXNfc2h1ZmZsZVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHNodWZmbGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3NodWZmbGUoWzEsIDIsIDMsIDQsIDUgLDZdKTtcbiAqIC8vID0+IFsyLCAzLCAxLCA0LCA2LCA1XVxuICovXG5mdW5jdGlvbiBhcnJheV9zaHVmZmxlKGFycmF5KSB7XG4gICAgaWYgKCFULmlzX2FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IGluZGV4LCB0ZW1wLCByYW5kb21JbmRleDtcbiAgICBjb25zdCBhcnJheUNsb25lID0gW10uY29uY2F0KGFycmF5KTtcbiAgICBjb25zdCBhcnJheUxlbmd0aCA9IFUubGVuZ3RoKGFycmF5Q2xvbmUpO1xuXG4gICAgZm9yIChpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPiAwOyBpbmRleC0tKSB7XG4gICAgICAgIHJhbmRvbUluZGV4ID0gVS5yYW5kb21fbnVtYmVyKGFycmF5TGVuZ3RoKTtcbiAgICAgICAgdGVtcCA9IGFycmF5Q2xvbmVbaW5kZXhdO1xuICAgICAgICBhcnJheUNsb25lW2luZGV4XSA9IGFycmF5Q2xvbmVbcmFuZG9tSW5kZXhdO1xuICAgICAgICBhcnJheUNsb25lW3JhbmRvbUluZGV4XSA9IHRlbXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5Q2xvbmU7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSB2YWx1ZXMgb2YgYSBzcGVjaWZpZWQgcHJvcGVydHkgZnJvbSBhbGwgb2JqZWN0cyBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IE9iamVjdCBrZXkgb3IgbmVzdGVkIG9iamVjdCBrZXkgcGF0aC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IG9mIG9iamVjdHMgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSB3aXRoIHBsdWNrZWQgdmFsdWVzIGZyb20gb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3BsdWNrKCdpZCcsIFt7aWQ6IDF9LCB7aWQ6Mn0sIHtpZDozfV0pO1xuICogLy8gPT4gWzEsIDIsIDNdXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3BsdWNrKGtleSwgYXJyYXkpIHtcbiAgICBpZiAoVC5pc19zdHJpbmcoa2V5KSAmJiBULmlzX2FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gX2NvbXB1dGVQbHVja2luZyhrZXksIGFycmF5KTtcbiAgICB9XG5cbiAgICBpZiAoVS5sZW5ndGgoYXJndW1lbnRzKSA9PT0gMSAmJiBULmlzX3N0cmluZyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB0YWtlQXJyYXkoX2FycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gVC5pc19hcnJheShfYXJyYXkpID8gX2NvbXB1dGVQbHVja2luZyhrZXksIF9hcnJheSkgOiBbXTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGFsbCBwcm9wZXJ0aWVzIGZyb20gYW4gb2JqZWN0cyBpbnNpZGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgT2JqZWN0IGtleSBvciBuZXN0ZWQgb2JqZWN0IGtleSBwYXRoLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3MuXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHBsdWNrZWQgdmFsdWVzIGZyb20gb2JqZWN0cy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jb21wdXRlUGx1Y2tpbmcoa2V5LCBhcnJheSkge1xuICAgICAgICBsZXQgcGx1Y2tlZEFycmF5ID0gW107XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IG51bWJlck9mSXRlbXMgPSBVLmxlbmd0aChhcnJheSk7XG4gICAgICAgIGZvciAoaW5kZXg7IGluZGV4IDwgbnVtYmVyT2ZJdGVtczsgaW5kZXgrKykge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIGlmIChULmlzX29iamVjdChhcnJheVtpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3RfcGx1Y2soa2V5LCBhcnJheVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmIChULmlzX2RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWNrZWRBcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGx1Y2tlZEFycmF5O1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgb25lIG9yIG1vcmUgZWxlbWVudHMgdG8gdGhlIGVuZCBvZiBhbiBhcnJheSBhbmRcbiAqIHJldHVybiBuZXcgYXJyYXkgd2l0aCBhbGwgdmFsdWVzIGluY2x1ZGVkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IE9yaWdpbmFsIGFycmF5LlxuICogQHBhcmFtIHttaXh9IFsuLi5hcmdzXSBWYWx1ZXMgdG8gYWRkIHRvIGFycmF5LlxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgbmV3IGFycmF5IHdpdGggdmFsdWVzIGFwcGVuZGVkIHRvIG9yaWdpbmFsLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3B1c2goW10sIDEsIDIsIDMsIDQpO1xuICogLy8gPT4gWzEsIDIsIDMsIDRdXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfcHVzaChbMSwgMiwgM10sIFs0LCA1LCA2XSk7XG4gKiAvLyA9PiBbMSwgMiwgMywgWzQsIDUsIDZdXVxuICovXG5mdW5jdGlvbiBhcnJheV9wdXNoKGFycmF5KSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXkuY29uY2F0KGFycmF5X3Jlc3QoVS50b19hcnJheShhcmd1bWVudHMpKSkgOiBbXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gbGFzdCBlbGVtZW50IGZyb20gYSBjb2xsZWN0aW9uLlxuICogVW5saWtlIGFycmF5X2xhc3Qgd2hlcmUgZnVuY3Rpb24gYWx3YXlzIHJldHVybiBlbXB0eSBjb2xsZWN0aW9uIChbXSlcbiAqIGlmIG5vdGhpbmcgaXMgZm91bmQgb3IgaW5wdXQgaXMgaW52YWxpZCwgYXJyYXlfcG9wIHJldHVybnMgdW5kZWZpbmVkIGFzIGEgcmVzdWx0LlxuICpcbiAqIE5PVEU6IGFycmF5X2xhc3QgZG9lcyBub3QgbXV0YXRlIG9yaWdpbmFsIGFycmF5IGxpa2UgbmF0aXZlIGpzIGFycmF5LnBvcCgpXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4geyp9IExhc3QgdmFsdWUgZnJvbSBhbiBhcnJheS5cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9wb3AoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IDRcbiAqIEBleGFtcGxlXG4gKiBhcnJheV9wb3AoXCJoZWxsb1wiKVxuICogLy8gPT4gdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3BvcChhcnJheSkge1xuICAgIHJldHVybiBULmlzX2FycmF5KGFycmF5KSA/IGFycmF5W1UubGVuZ3RoKGFycmF5KSAtIDFdIDogdm9pZCAwO1xufVxuXG4vKipcbiAqIEFkZCBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgYmVnaW5uaW5nIG9mIGFuIGFycmF5IGFuZFxuICogcmV0dXJuIG5ldyBhcnJheSB3aXRoIGFsbCB2YWx1ZXMgaW5jbHVkZWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7Li4uKn0gZWxlbWVudHMgRWxlbWVudHMgdG8gYWRkIGF0IHRoZSBiZWdpbmluZyBvZiBhcnJheS5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFycmF5IHdpdGggbmV3IHZhbHVlcyB2YWx1ZXMgYXQgdGhlIGJlZ2luaW5nLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3Vuc2hpZnQoWzEsIDIsIDNdLCA0LCA1KTtcbiAqIC8vID0+IFs0LCA1LCAxLCAyLCAzXVxuICovXG5mdW5jdGlvbiBhcnJheV91bnNoaWZ0KGFycmF5KSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXlfcmVzdChVLnRvX2FycmF5KGFyZ3VtZW50cykpLmNvbmNhdChhcnJheSkgOiBbXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gZmlyc3QgZWxlbWVudCBmcm9tIGEgY29sbGVjdGlvbi5cbiAqIFVubGlrZSBhcnJheV9maXJzdCB3aGVyZSBmdW5jdGlvbiBhbHdheXMgcmV0dXJuIGVtcHR5IGNvbGxlY3Rpb24gKFtdKVxuICogaWYgbm90aGluZyBpcyBmb3VuZCBvciBpbnB1dCBpcyBpbnZhbGlkLCBhcnJheV9zaGlmdCByZXR1cm5zIHVuZGVmaW5lZCBhcyBhIHJlc3VsdC5cbiAqXG4gKiBOT1RFOiBhcnJheV9zaGlmdCBkb2VzIG5vdCBtdXRhdGUgb3JpZ2luYWwgYXJyYXkgbGlrZSBuYXRpdmUganMgYXJyYXkuc2hpZnQoKVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHsqfSBSZXR1cm5zIGZpcnN0IGVsZW1lbnQgZnJvbSBhbiBhcnJheS5cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9zaGlmdChbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gMVxuICogQGV4YW1wbGVcbiAqIGFycmF5X3NoaWZ0KHtuYW1lOiAnU3RlZmFuJ30pO1xuICogLy8gPT4gdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3NoaWZ0KGFycmF5KSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXlbMF0gOiB2b2lkIDA7XG59XG5cbi8qKlxuICogUmV2ZXJzZXMgYW4gYXJyYXkgaW4gcGxhY2UuIFRoZSBmaXJzdCBhcnJheSBlbGVtZW50IGJlY29tZXMgdGhlIGxhc3QsXG4gKiBhbmQgdGhlIGxhc3QgYXJyYXkgZWxlbWVudCBiZWNvbWVzIHRoZSBmaXJzdC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHJldmVyc2VkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3JldmVyc2UoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IFs0LCAzLCAyLCAxXVxuICovXG5mdW5jdGlvbiBhcnJheV9yZXZlcnNlKGFycmF5KSB7XG4gICAgaWYgKFQuaXNfYXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIGxldCBudW1iZXJPZkVsZW1lbnRzID0gVS5sZW5ndGgoYXJyYXkpO1xuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIG1hcEVsZW1lbnRSZXZlcnNlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheVtudW1iZXJPZkVsZW1lbnRzIC0gKGluZGV4ICsgMSldO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFycmF5X2ZpcnN0LFxuICAgIGFycmF5X2luaXRpYWwsXG4gICAgYXJyYXlfbGFzdCxcbiAgICBhcnJheV9yZXN0LFxuICAgIGFycmF5X2NvbXBhY3QsXG4gICAgYXJyYXlfZmxhdHRlbixcbiAgICBhcnJheV93aXRob3V0LFxuICAgIGFycmF5X3VuaXF1ZSxcbiAgICBhcnJheV91bmlvbixcbiAgICBhcnJheV9pbnRlcnNlY3Rpb24sXG4gICAgYXJyYXlfc2h1ZmZsZSxcbiAgICBhcnJheV9wbHVjayxcbiAgICBhcnJheV9wdXNoLFxuICAgIGFycmF5X3BvcCxcbiAgICBhcnJheV91bnNoaWZ0LFxuICAgIGFycmF5X3NoaWZ0LFxuICAgIGFycmF5X3JldmVyc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXJyYXkvYXJyYXkuanMiLCIvKipcbiAqIEFuIE9iamVjdCBjb250YWluaW5nIGxlbmd0aCBwYXJhbWV0ZXIuXG4gKiBAdHlwZWRlZiB7KGFycmF5fHN0cmluZyl9IEl0ZXJhdGFibGVPYmplY3RcbiAqL1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvanNkb2NzL2pzZG9jcy5qcyIsImNvbnN0IFQgPSByZXF1aXJlKCcuLi90eXBlcy90eXBlcycpO1xuY29uc3QgRSA9IHJlcXVpcmUoJy4uL2Vycm9ycy9lcnJvcnMnKTtcbmNvbnN0IHsgbGVuZ3RoIH0gPSByZXF1aXJlKCcuLi91dGlsaXR5L3V0aWxpdHknKTtcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2Ygb2JqZWN0IG1hbmlwdWxhdGluZyBmdW5jdGlvbnMuXG4gKiBAbW9kdWxlIE9iamVjdFxuICovXG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiBhIHNwZWNpZmllZCBwcm9wZXJ0eSBmcm9tIHByb3ZpZGVkIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKiBAZXhhbXBsZVxuICogY29uc3QgcGVyc29uID0ge1xuICogICAgIG5hbWU6ICdTdGVmYW4nLFxuICogICAgIGFkZHJlc3M6IHtcbiAqICAgICAgICAgY2l0eTogJ0JlbGdyYWRlJyxcbiAqICAgICAgICAgYXJlYToge1xuICogICAgICAgICAgICAgbmFtZTogJ0N1a2FyaWNhJyxcbiAqICAgICAgICAgfVxuICogICAgIH1cbiAqIH07XG4gKlxuICogb2JqZWN0X3BsdWNrKCdhZGRyZXNzLmFyZWEubmFtZScsIHBlcnNvbik7XG4gKiAvLyA9PiAnQ3VrYXJpY2EnXG4gKlxuICogb2JqZWN0X3BsdWNrKCdhZGRyZXNzLm5hbWUuYXJlYScsIHBlcnNvbik7XG4gKiAvLyA9PiB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gb2JqZWN0X3BsdWNrKGtleSwgb2JqZWN0KSB7XG4gICAgY29uc3QgbnVtYmVyT2ZBcmd1bWVudHMgPSBsZW5ndGgoYXJndW1lbnRzKTtcblxuICAgIGlmICghVC5pc19zdHJpbmcoa2V5KSkge1xuICAgICAgICBFLnRocm93U3RyaW5nVHlwZUVycm9yKGtleSk7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRPYmplY3QoX29iamVjdCkge1xuICAgICAgICAgICAgaWYgKCFULmlzX29iamVjdChfb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgIEUudGhyb3dPYmplY3RUeXBlRXJyb3IoX29iamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfZGVlcEFjY2Vzc1BsdWNrKF9vYmplY3QsIGtleSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFULmlzX29iamVjdChvYmplY3QpKSB7XG4gICAgICAgIEUudGhyb3dPYmplY3RUeXBlRXJyb3Iob2JqZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2RlZXBBY2Nlc3NQbHVjayhvYmplY3QsIGtleSk7XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHZhbHVlIGZyb20gYW4gZGVlcCBuZXN0ZWQgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBLZXkgb3IgbmVzdGVkIGtleSBwYXRoIGluIHRoZSBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBjb25zdCBwZXJzb24gPSB7XG4gICAgICogICAgIG5hbWU6ICdTdGVmYW4nLFxuICAgICAqICAgICBhZGRyZXNzOiB7XG4gICAgICogICAgICAgICBjaXR5OiAnQmVsZ3JhZGUnLFxuICAgICAqICAgICAgICAgYXJlYToge1xuICAgICAqICAgICAgICAgICAgIG5hbWU6ICdDdWthcmljYScsXG4gICAgICogICAgICAgICB9XG4gICAgICogICAgIH1cbiAgICAgKiB9O1xuICAgICAqIF9kZWVwQWNjZXNzUGx1Y2socGVyc29uLCAnYWRkcmVzcy5hcmVhLm5hbWUnKVxuICAgICAqIC8vID0+ICdDdWthcmljYSdcbiAgICAgKiBfZGVlcEFjY2Vzc1BsdWNrKHBlcnNvbiwgJ2FkZHJlc3MuY2l0eS5hcmVhLm5hbWUnKVxuICAgICAqIC8vID0+IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9kZWVwQWNjZXNzUGx1Y2sob2JqZWN0LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleS5zcGxpdCgnLicpLnJlZHVjZShmdW5jdGlvbiBjaGVja0V4aXN0ZW5jZShkZWVwT2JqZWN0LCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChkZWVwT2JqZWN0ICYmIGtleSBpbiBkZWVwT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZXBPYmplY3Rba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb2JqZWN0KTtcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIG9iamVjdF9rZXlzIGZ1bmN0aW9uIHJldHVybnMgYW4gYXJyYXkgb2YgYSBnaXZlbiBvYmplY3QncyBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwZXJzb24gPSB7XG4gKiAgICAgZm5hbWU6ICdTdGVmYW4nLFxuICogICAgIGxuYW1lOiAnTGF6YXJldmljJyxcbiAqIH07XG4gKlxuICogb2JqZWN0X2tleXMocGVyc29uKTtcbiAqIC8vID0+IFsnZm5hbWUnLCAnbG5hbWUnXVxuICovXG5mdW5jdGlvbiBvYmplY3Rfa2V5cyhvYmplY3QpIHtcbiAgICBpZiAoVC5pc19vYmplY3Qob2JqZWN0KSB8fCBULmlzX2FycmF5KG9iamVjdCkgfHwgVC5pc19zdHJpbmcob2JqZWN0KSkge1xuICAgICAgICBjb25zdCBrZXlzID0gW107XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IHZhbHVlcyBvZiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSB2YWx1ZXMuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKiBAZXhhbXBsZVxuICogY29uc3QgcGVyc29uID0ge1xuICogICAgIGZuYW1lOiAnU3RlZmFuJyxcbiAqICAgICBsbmFtZTogJ0xhemFyZXZpYycsXG4gKiB9O1xuICpcbiAqIG9iamVjdF92YWx1ZXMocGVyc29uKTtcbiAqIC8vID0+IFsnU3RlZmFuJywgJ0xhemFyZXZpYyddXG4gKi9cbmZ1bmN0aW9uIG9iamVjdF92YWx1ZXMob2JqZWN0KSB7XG4gICAgaWYgKFQuaXNfb2JqZWN0KG9iamVjdCkpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gob2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICBFLnRocm93T2JqZWN0VHlwZUVycm9yKG9iamVjdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2YgdGhlIGludmVydGVkIGtleXMgYW5kIHZhbHVlcyBvZiBvYmplY3QuXG4gKiBJZiBvYmplY3QgY29udGFpbnMgZHVwbGljYXRlIHZhbHVlcywgYW5kIHN1YnNlcXVlbnQgdmFsdWVzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGludmVydC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBpbnZlcnRlZCBvYmplY3QuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKiBAZXhhbXBsZVxuICogY29uc3QgcGVyc29uID0ge1xuICogICAgIGZuYW1lOiAnU3RlZmFuJyxcbiAqICAgICBsbmFtZTogJ0xhemFyZXZpYycsXG4gKiB9O1xuICpcbiAqIG9iamVjdF9pbnZlcnQocGVyc29uKTtcbiAqIC8vID0+IHtcbiAqIC8vICAgICAgICBTdGVmYW46ICdmbmFtZScsXG4gKiAvLyAgICAgICAgTGF6YXJldmljOiAnbG5hbWUnLFxuICogLy8gICAgfVxuICovXG5mdW5jdGlvbiBvYmplY3RfaW52ZXJ0KG9iamVjdCkge1xuICAgIGlmIChULmlzX29iamVjdChvYmplY3QpKSB7XG4gICAgICAgIGNvbnN0IGludmVydGVkT2JqZWN0ID0ge307XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgaWYgKFQuaXNfZGVmaW5lZCh2YWx1ZSkgJiYgIVQuaXNfZnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGludmVydGVkT2JqZWN0W3ZhbHVlXSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW52ZXJ0ZWRPYmplY3Q7XG4gICAgfVxuXG4gICAgRS50aHJvd09iamVjdFR5cGVFcnJvcihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBvYmplY3RfcGx1Y2ssXG4gICAgb2JqZWN0X2tleXMsXG4gICAgb2JqZWN0X3ZhbHVlcyxcbiAgICBvYmplY3RfaW52ZXJ0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29iamVjdC9vYmplY3QuanMiLCJjb25zdCBBID0gcmVxdWlyZSgnLi9hcnJheS9hcnJheScpO1xuY29uc3QgRCA9IHJlcXVpcmUoJy4vZGF0ZS9kYXRlJyk7XG5jb25zdCBFID0gcmVxdWlyZSgnLi9lcnJvcnMvZXJyb3JzJyk7XG5jb25zdCBGID0gcmVxdWlyZSgnLi9mdW5jdGlvbi9mdW5jdGlvbicpO1xuY29uc3QgTyA9IHJlcXVpcmUoJy4vb2JqZWN0L29iamVjdCcpO1xuY29uc3QgUyA9IHJlcXVpcmUoJy4vc3RyaW5nL3N0cmluZycpO1xuY29uc3QgVCA9IHJlcXVpcmUoJy4vdHlwZXMvdHlwZXMnKTtcbmNvbnN0IFUgPSByZXF1aXJlKCcuL3V0aWxpdHkvdXRpbGl0eScpO1xuXG53aW5kb3cuQSA9IEE7XG53aW5kb3cuRCA9IEQ7XG53aW5kb3cuRSA9IEU7XG53aW5kb3cuRiA9IEY7XG53aW5kb3cuTyA9IE87XG53aW5kb3cuUyA9IFM7XG53aW5kb3cuRSA9IEU7XG53aW5kb3cuVCA9IFQ7XG53aW5kb3cuVSA9IFU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCJjb25zdCBBID0gcmVxdWlyZSgnLi4vYXJyYXkvYXJyYXknKTtcbmNvbnN0IFQgPSByZXF1aXJlKCcuLi90eXBlcy90eXBlcycpO1xuY29uc3QgVSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvdXRpbGl0eScpO1xuY29uc3QgRSA9IHJlcXVpcmUoJy4uL2Vycm9ycy9lcnJvcnMnKTtcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgRlAgc3R5bGUgZnVuY3Rpb25zLlxuICogQG1vZHVsZSBGdW5jdGlvblxuICovXG5cbi8qKlxuICogQ3VycnlpbmcgcmVmZXJzIHRvIHRoZSBwcm9jZXNzIG9mIHRyYW5zZm9ybWluZyBhIGZ1bmN0aW9uIHdpdGggbXVsdGlwbGUgYXJpdHlcbiAqIGludG8gdGhlIHNhbWUgZnVuY3Rpb24gd2l0aCBsZXNzIGFyaXR5LiBUaGUgY3VycmllZCBlZmZlY3QgaXMgYWNoaWV2ZWQgYnkgYmluZGluZ1xuICogc29tZSBvZiB0aGUgYXJndW1lbnRzIHRvIHRoZSBmaXJzdCBmdW5jdGlvbiBpbnZva2UsXG4gKiBzbyB0aGF0IHRob3NlIHZhbHVlcyBhcmUgZml4ZWQgZm9yIHRoZSBuZXh0IGludm9jYXRpb24uXG4gKlxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ3VycnlpbmdcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb258bWl4fVxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICovXG5mdW5jdGlvbiBjdXJyeShmbikge1xuICAgIGlmIChULmlzX2Z1bmN0aW9uKGZuKSkge1xuICAgICAgICBjb25zdCBhcmdzID0gQS5hcnJheV9yZXN0KFUudG9fYXJyYXkoYXJndW1lbnRzKSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB0YWtlTWlzc2luZ0FyZ3VtZW50cygpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzLmNvbmNhdChVLnRvX2FycmF5KGFyZ3VtZW50cykpKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBFLnRocm93RnVuY3Rpb25UeXBlRXJyb3IoZm4pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBjb21wb3NpdGlvbiBpcyB0aGUgcHJvY2VzcyBvZiBjb21iaW5pbmcgdHdvIG9yIG1vcmUgZnVuY3Rpb25zXG4gKiB0byBwcm9kdWNlIG5ldyBmdW5jdGlvbi4gQ29tcG9zZWQgZnVuY3Rpb24gdGFrZSBkYXRhIGFuZCBwcm9jZXNzIGl0XG4gKiB0aHJvdWdoIGFsbCBwaXBlcyBmcm9tIHJpZ2h0IHRvIGxlZnQgcHJvZHVjaW5nIG5ldyBkYXRhLiAoZiBvIGcpID0+IGYoZyhvKSk7XG4gKlxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRnVuY3Rpb25fY29tcG9zaXRpb25fKGNvbXB1dGVyX3NjaWVuY2UpXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufG1peH1cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgICBjb25zdCBmdW5jdGlvbnMgPSBhcmd1bWVudHM7XG4gICAgbGV0IGluZGV4ID0gZnVuY3Rpb25zLmxlbmd0aDtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIC0taW5kZXg7XG4gICAgICAgIHJldHVybiAoaW5kZXggPiAtMSkgPyBjb21wb3NlVmFsdWUoZnVuY3Rpb25zW2luZGV4XSh2YWx1ZSkpIDogdmFsdWU7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb24gdGhhdCBjYW4gb25seSBiZSBjYWxsZWQgb25lIHRpbWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZG9uZSA/IHZvaWQgMCA6IChkb25lID0gdHJ1ZSwgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY3VycnksXG4gICAgY29tcG9zZSxcbiAgICBvbmNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2Z1bmN0aW9uL2Z1bmN0aW9uLmpzIiwiY29uc3QgVCA9IHJlcXVpcmUoJy4uL3R5cGVzL3R5cGVzJyk7XG5jb25zdCBFID0gcmVxdWlyZSgnLi4vZXJyb3JzL2Vycm9ycycpO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBzdHJpbmcgbWFuaXB1bGF0aW5nIGZ1bmN0aW9ucy5cbiAqIEBtb2R1bGUgU3RyaW5nXG4gKi9cblxuLyoqXG4gKiBUaGUgc3RyaW5nX3RyaW0oKSBtZXRob2QgcmV0dXJucyB0aGUgc3RyaW5nIHN0cmlwcGVkIG9mIHdoaXRlc3BhY2UgZnJvbSBib3RoIGVuZHMuXG4gKiBzdHJpbmdfdHJpbSgpIGRvZXMgbm90IGFmZmVjdCB0aGUgdmFsdWUgb2YgdGhlICogc3RyaW5nIGl0c2VsZi5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIHN0cmluZ190cmltKFwiICBTdGVmYW4gTGF6YXJldmljICAgXCIpID0+IFwiU3RlZmFuIExhemFyZXZpY1wiXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ190cmltKHZhbHVlKSB7XG4gICAgaWYgKFQuaXNfc3RyaW5nKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICAgIH1cblxuICAgIEUudGhyb3dTdHJpbmdUeXBlRXJyb3IodmFsdWUpO1xufVxuXG4vKipcbiAqIFJldHVybiByZWNlaXZlZCBzdHJpbmcgd2l0aCBmaXJzdCBsZXR0ZXIgaW4gdXBwZXJjYXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBzdHJpbmdfY2FwaXRhbGl6ZSh2YWx1ZSkge1xuICAgIGlmIChULmlzX3N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL15cXHcvLCBmdW5jdGlvbiAoY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgRS50aHJvd1N0cmluZ1R5cGVFcnJvcih2YWx1ZSk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBuZXcgc3RyaW5nIHVzaW5nIHByb3ZpZGVkIHBhdHRlcm4gd2l0aCAneCcgbWFyayByZXByZXNlbnRpbmdcbiAqIGVhY2ggdmFsdWUgcGxhY2Vob2xkZXIuIEFjY2VwdHMgMyBkaWZmZXJlbnQgdHlwZSBvZiB2YWx1ZSBjb250YWluZXJzOlxuICogQXJyYXksIFN0cmluZyBhbmQgTnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXR0ZXJuIEEgcGF0dGVybiB0aGF0IHdpbGwgYmUgZnVsbGZpbGxlZC5cbiAqIEBwYXJhbSB7QXJyYXl8TnVtYmVyfFN0cmluZ30gdG9SZXBsYWNlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBOZXcgc3RyaW5nIHdpdGggZnVsbGZpbGxlZCBwYXR0ZXJuIHBsYWNlaG9sZGVycy5cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqIEBleGFtcGxlXG4gKiBzdHJpbmdfcGF0dGVybignK3ggKHgpIHgteCcsIFsnMzgxJywgJzYyJywgJzU1NScsICczMzMnXSlcbiAqIC8vID0+ICcrMzgxICg2MikgNTU1LTMzMydcbiAqIEBleGFtcGxlXG4gKiBzdHJpbmdfcGF0dGVybigneHh4eC14eHh4LXh4eHgteHh4eCcsIDQyNDI0MjQyNDI0MjQyNDIpO1xuICogLy8gPT4gJzQyNDItNDI0Mi00MjQyLTQyNDInXG4gKiBAZXhhbXBsZVxuICogc3RyaW5nX3BhdHRlcm4oJ3h4eC14eHgnKSgnMTIzNDU2Jyk7XG4gKiAvLyA9PiAnMTIzLTQ1NidcbiAqL1xuZnVuY3Rpb24gc3RyaW5nX3BhdHRlcm4ocGF0dGVybiwgcmVwbGFjZW1lbnQpIHtcbiAgICBpZiAoVC5pc19zdHJpbmcocGF0dGVybikpIHtcbiAgICAgICAgY29uc3QgcGF0dGVyblRva2VucyA9IHBhdHRlcm4uc3BsaXQoJycpO1xuXG4gICAgICAgIGlmICghVC5pc19kZWZpbmVkKHJlcGxhY2VtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VSZXBsYWNlbWVudChfcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2Zvcm1hdFBhdHRlcm4ocGF0dGVyblRva2VucywgX3JlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2Zvcm1hdFBhdHRlcm4ocGF0dGVyblRva2VucywgcmVwbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIEUudGhyb3dTdHJpbmdUeXBlRXJyb3IocGF0dGVybik7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXR0ZXJuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9mb3JtYXRQYXR0ZXJuKHBhdHRlcm5Ub2tlbnMsIF9yZXBsYWNlbWVudCkge1xuICAgICAgICBsZXQgeFRva2VuSW5kZXggPSAwO1xuICAgICAgICBsZXQgcmVwbGFjZW1lbnQgPSBBcnJheSgwKTtcblxuICAgICAgICBpZiAoVC5pc19udW1iZXIoX3JlcGxhY2VtZW50KSkge1xuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBfcmVwbGFjZW1lbnQudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVC5pc19zdHJpbmcoX3JlcGxhY2VtZW50KSkge1xuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBfcmVwbGFjZW1lbnQuc3BsaXQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFQuaXNfYXJyYXkoX3JlcGxhY2VtZW50KSkge1xuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBfcmVwbGFjZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0dGVyblRva2Vucy5yZWR1Y2UoZnVuY3Rpb24gKHBhdHRlcm5TdHJpbmcsIHRva2VuKSB7XG4gICAgICAgICAgICBpZiAodG9rZW4gPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VWYWx1ZSA9IHJlcGxhY2VtZW50W3hUb2tlbkluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoVC5pc19kZWZpbmVkKHJlcGxhY2VWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblN0cmluZyArPSByZXBsYWNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHhUb2tlbkluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuU3RyaW5nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuU3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0dGVyblN0cmluZyArPSB0b2tlbjtcbiAgICAgICAgfSwgJycpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc3RyaW5nX3RyaW0sXG4gICAgc3RyaW5nX2NhcGl0YWxpemUsXG4gICAgc3RyaW5nX3BhdHRlcm4sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3N0cmluZy9zdHJpbmcuanMiXSwic291cmNlUm9vdCI6IiJ9