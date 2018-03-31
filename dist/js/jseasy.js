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
 * @param {mix} value
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
 * @param {mix} value
 * @throws {TypeError}
 */
var throwStringTypeError = throwTypeError('string');

/**
 * Composed throwTypeError function.
 * Throw error with function type message.
 *
 * @param {mix} value
 * @throws {TypeError}
 */
var throwFunctionTypeError = throwTypeError('function');

/**
 * Composed throwTypeError function.
 * Throw error with object type message.
 *
 * @param {mix} value
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


/* Under construction */
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
 *
 *
 * @param {String} pattern A pattern that will be fullfilled.
 * @param {Array|Number|String} toReplace
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDEyNTFiOWEzNjQyNzcyOWNjMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3R5cGVzL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsaXR5L3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Vycm9ycy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FycmF5L2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9qc2RvY3MvanNkb2NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vYmplY3Qvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZnVuY3Rpb24vZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0cmluZy9zdHJpbmcuanMiXSwibmFtZXMiOlsiaXNfYXJyYXkiLCJ2YWx1ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImlzX29iamVjdCIsImlzX3N0cmluZyIsImlzX251bWJlciIsImlzX05hTiIsImlzX2Jvb2xlYW4iLCJpc19mdW5jdGlvbiIsImlzX251bGwiLCJpc191bmRlZmluZWQiLCJpc19kZWZpbmVkIiwiaXNfZGF0ZSIsImlzX2pzb24iLCJKU09OIiwicGFyc2UiLCJlcnIiLCJpc19zeW1ib2wiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIlQiLCJyYW5kb21fbnVtYmVyIiwibWluIiwibWF4IiwiX21pbiIsIl9tYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b19hcnJheSIsIml0ZXJhdGFibGVPYmplY3QiLCJBcnJheSIsInNsaWNlIiwiaW5fYXJyYXkiLCJhcnJheSIsIkJvb2xlYW4iLCJpbmRleE9mIiwidHlwZSIsImxlbmd0aCIsImtleXMiLCJ0aHJvd1R5cGVFcnJvciIsImV4cGVjdGVkVHlwZSIsIlR5cGVFcnJvciIsInRocm93U3RyaW5nVHlwZUVycm9yIiwidGhyb3dGdW5jdGlvblR5cGVFcnJvciIsInRocm93T2JqZWN0VHlwZUVycm9yIiwiVSIsIm9iamVjdF9wbHVjayIsImFycmF5X2ZpcnN0IiwiYXJncyIsImFyZ3VtZW50cyIsImFyZzAiLCJhcmcxIiwibnVtYmVyT2ZBcmd1bWVudHMiLCJjb25jYXQiLCJfYXJyYXkiLCJhcnJheV9pbml0aWFsIiwidGFrZUFycmF5IiwiYXJyYXlfbGFzdCIsImFycmF5X3Jlc3QiLCJhcnJheV9jb21wYWN0IiwiZmlsdGVyIiwiY2hlY2tJZkZhbHN5IiwiZWxlbWVudCIsImFycmF5X2ZsYXR0ZW4iLCJyZWR1Y2UiLCJhY2MiLCJhcnJheV93aXRob3V0IiwicmVzdCIsImFycmF5X3VuaXF1ZSIsImNoZWNrUG9zaXRpb24iLCJpbmRleCIsImFycmF5X3VuaW9uIiwiYXJyYXlfaW50ZXJzZWN0aW9uIiwiYXJyYXlzIiwibWFpbkFycmF5IiwiaW50ZXJzZWN0aW9uIiwiZmlyc3QiLCJpIiwiaiIsInB1c2giLCJhcnJheV9zaHVmZmxlIiwidGVtcCIsInJhbmRvbUluZGV4IiwiYXJyYXlDbG9uZSIsImFycmF5TGVuZ3RoIiwiYXJyYXlfcGx1Y2siLCJrZXkiLCJfY29tcHV0ZVBsdWNraW5nIiwicGx1Y2tlZEFycmF5IiwibnVtYmVyT2ZJdGVtcyIsImFycmF5X3B1c2giLCJhcnJheV9wb3AiLCJhcnJheV91bnNoaWZ0IiwiYXJyYXlfc2hpZnQiLCJhcnJheV9yZXZlcnNlIiwibnVtYmVyT2ZFbGVtZW50cyIsIm1hcCIsIm1hcEVsZW1lbnRSZXZlcnNlZCIsIkUiLCJvYmplY3QiLCJnZXRPYmplY3QiLCJfb2JqZWN0IiwiX2RlZXBBY2Nlc3NQbHVjayIsInNwbGl0IiwiY2hlY2tFeGlzdGVuY2UiLCJkZWVwT2JqZWN0Iiwib2JqZWN0X2tleXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdF92YWx1ZXMiLCJ2YWx1ZXMiLCJvYmplY3RfaW52ZXJ0IiwiaW52ZXJ0ZWRPYmplY3QiLCJBIiwiRCIsIkYiLCJPIiwiUyIsIndpbmRvdyIsImN1cnJ5IiwiZm4iLCJ0YWtlTWlzc2luZ0FyZ3VtZW50cyIsImFwcGx5IiwiY29tcG9zZSIsImZ1bmN0aW9ucyIsImNvbXBvc2VWYWx1ZSIsIm9uY2UiLCJkb25lIiwic3RyaW5nX3RyaW0iLCJyZXBsYWNlIiwic3RyaW5nX2NhcGl0YWxpemUiLCJjaGFyYWN0ZXIiLCJ0b1VwcGVyQ2FzZSIsInN0cmluZ19wYXR0ZXJuIiwicGF0dGVybiIsInJlcGxhY2VtZW50IiwicGF0dGVyblRva2VucyIsInRha2VSZXBsYWNlbWVudCIsIl9yZXBsYWNlbWVudCIsIl9mb3JtYXRQYXR0ZXJuIiwieFRva2VuSW5kZXgiLCJwYXR0ZXJuU3RyaW5nIiwidG9rZW4iLCJyZXBsYWNlVmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNyQixXQUFPQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLEtBQS9CLE1BQTBDLGdCQUFqRDtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxTQUFTSyxTQUFULENBQW1CTCxLQUFuQixFQUEwQjtBQUN0QixX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O0FBRUQ3SCxPQUFPQyxPQUFQLEdBQWlCO0FBQ2I4Ryw0QkFEYTtBQUViRSx3Q0FGYTtBQUdiRztBQUhhLENBQWpCLEMiLCJmaWxlIjoianNlYXN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDEyNTFiOWEzNjQyNzcyOWNjMzQiLCIvKipcbiAqIEphdmFTY3JpcHQgdHlwZSB2YWxpZGF0aW9ucy5cbiAqIEBtb2R1bGUgVHlwZXNcbiAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBpc19hcnJheShbMSwgMiwgM10pXG4gKiAvLyA9PiB0cnVlXG4gKiBAZXhhbXBsZVxuICogKGZ1bmN0aW9uKCkgeyByZXR1cm4gaXNfYXJyYXkoYXJndW1lbnRzKTsgfSkoKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX2FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogZnVuY3Rpb24gQ29vcmRpbmF0ZSh4ID0gMCwgeSA9IDApIHtcbiAqICAgICB0aGlzLnggPSB4O1xuICogICAgIHRoaXMueSA9IHk7XG4gKiB9XG4gKlxuICogaXNfb2JqZWN0KG5ldyBDb29yZGluYXRlKDEwLCAxNSkpO1xuICogLy8gPT4gdHJ1ZVxuICogQGV4YW1wbGVcbiAqIGlzX29iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICogQGV4YW1wbGVcbiAqIGlzX29iamVjdChbMSwgMiwgM10pXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc19vYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IE9iamVjdCh2YWx1ZSkgJiYgIWlzX2FycmF5KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBzdHJpY3Qgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gc3RyaW5nLCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogaXNfc3RyaW5nKFwiSGVsbG8gV29ybGQhXCIpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc19zdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG51bWJlciwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX251bWJlcigxMClcbiAqIC8vID0+IHRydWVcbiAqIEBleGFtcGxlXG4gKiBpc19udW1iZXIoTmFOKVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNfbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzX05hTih2YWx1ZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYm9vbGVhbi5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBib29sZWFuLCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogaXNfYm9vbGVhbihmYWxzZSlcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNfYm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBmdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX2Z1bmN0aW9uKGlzX2Jvb2xlYW4pXG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBudWxsLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgbnVsbCwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX251bGwobnVsbClcbiAqIC8vID0+IHRydWVcbiAqIEBleGFtcGxlXG4gKiBpc19udWxsKHZvaWQgMClcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX251bGwodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogaXNfdW5kZWZpbmVkKHZvaWQgMClcbiAqIC8vID0+IHRydWVcbiAqIEBleGFtcGxlXG4gKiBpc191bmRlZmluZWQobnVsbClcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX3VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdm9pZCAwO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIHZhbHVlIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQsIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBQZXJzb24gPSB7XG4gKiAgICAgYTogMTBcbiAqIH07XG4gKlxuICogaXNfZGVmaW5lZChQZXJzb24uYSk7XG4gKiAvLyA9PiB0cnVlXG4gKiBpc19kZWZpbmVkKFBlcnNvbi5iKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX2RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzX251bGwodmFsdWUpICYmICFpc191bmRlZmluZWQodmFsdWUpICYmICFpc19OYU4odmFsdWUpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIHZhbHVlIGlzIG5vdCBhIG51bWJlci4gKE5hTilcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIE5hTiwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX05hTigxIC8gJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqIGlzX05hTignYScpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNfTmFOKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBEYXRlIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBEYXRlIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICpcbiAqIGlzX2RhdGUoZGF0ZSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogaXNfZGF0ZShuZXcgRGF0ZSgpLmdldFllYXIoKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc19kYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgdmFsaWQgSlNPTiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBhIHZhbGlkIEpTT04gc3RyaW5nLCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogY29uc3QgYWpheERhdGEgPSB7XG4gKiAgICAgdXJsOiB3d3cubGlua2VkaW4uY29tL2luL3N0ZWZhbi1sYXphcmV2aWNcbiAqIH07XG4gKlxuICogaXNfanNvbihKU09OLnN0cmluZ2lmeShhamF4RGF0YSkpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc19qc29uKFwiSGVsbG8gV29ybGRcIilcbiAqIC8vID0+IGZhbHNlXG4gKiBpc19qc29uKGFqYXhEYXRhKVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNfanNvbih2YWx1ZSkge1xuICAgIGlmIChpc19zdHJpbmcodmFsdWUpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIHZhbGlkIFN5bWJvbC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIHN5bWJvbCwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX3N5bWJvbChTeW1ib2woJ3gnKVxuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc19zeW1ib2wodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaXNfYXJyYXksXG4gICAgaXNfb2JqZWN0LFxuICAgIGlzX3N0cmluZyxcbiAgICBpc19udW1iZXIsXG4gICAgaXNfYm9vbGVhbixcbiAgICBpc19mdW5jdGlvbixcbiAgICBpc19udWxsLFxuICAgIGlzX3VuZGVmaW5lZCxcbiAgICBpc19kZWZpbmVkLFxuICAgIGlzX05hTixcbiAgICBpc19kYXRlLFxuICAgIGlzX2pzb24sXG4gICAgaXNfc3ltYm9sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3R5cGVzL3R5cGVzLmpzIiwicmVxdWlyZSgnLi4vanNkb2NzL2pzZG9jcycpO1xuY29uc3QgVCA9IHJlcXVpcmUoJy4uL3R5cGVzL3R5cGVzJyk7XG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBVdGlsaXR5IGZ1bmN0aW9ucy5cbiAqIEBtb2R1bGUgVXRpbGl0eVxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXguIChpbmNsdXNpdmUpXG4gKiBJZiB5b3Ugb25seSBwYXNzIG9uZSBhcmd1bWVudCwgaXQgd2lsbCByZXR1cm4gYSBudW1iZXIgYmV0d2VlbiAwIGFuZCB0aGF0IG51bWJlci5cbiAqIEJ5IGRlZmF1bHQgcmFuZG9tIG51bWJlciByYW5nZSBpcyBiZXR3ZWVuIDAgYW5kIDEwMC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gW21pbiA9IDBdIEEgbWluaW11bSBwb3NpYmxlIG51bWJlciBnZW5lcmF0ZWQuXG4gKiBAcGFyYW0ge051bWJlcn0gW21heCA9IDEwMF0gQSBtYXhpbXVtIHBvc2libGUgbnVtYmVyIGdlbmVyYXRlZC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFJldHVybnMgdGhlIHJhbmRvbSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICogcmFuZG9tX251bWJlcigpXG4gKiAvLyA9PiByZXR1cm5zIGFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCAxMDBcbiAqIEBleGFtcGxlXG4gKiByYW5kb21fbnVtYmVyKDUwKVxuICogLy8gPT4gcmV0dXJucyBhbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgNTBcbiAqIEBleGFtcGxlXG4gKiByYW5kb21fbnVtYmVyKDUwLCAyMDApXG4gKiAvLyA9PiByZXR1cm5zIGFuIGludGVnZXIgYmV0d2VlbiA1MCBhbmQgMjAwXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbV9udW1iZXIobWluLCBtYXgpIHtcbiAgICBsZXQgX21pbiA9IDAsIF9tYXggPSAxMDA7XG5cbiAgICBpZiAoVC5pc19udW1iZXIobWluKSAmJiAhVC5pc19kZWZpbmVkKG1heCkpIHtcbiAgICAgICAgX21pbiA9IDA7XG4gICAgICAgIF9tYXggPSBtaW47XG4gICAgfVxuXG4gICAgaWYgKFQuaXNfbnVtYmVyKG1pbikgJiYgVC5pc19udW1iZXIobWF4KSkge1xuICAgICAgICBfbWluID0gbWluO1xuICAgICAgICBfbWF4ID0gbWF4O1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKF9tYXggLSBfbWluICsgMSkpICsgX21pbik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlYWwgQXJyYXkgZnJvbSB0aGUgbGlzdCAoYW55dGhpbmcgdGhhdCBjYW4gYmUgaXRlcmF0ZWQgb3ZlcikuXG4gKiBVc2VmdWwgZm9yIHRyYW5zbXV0aW5nIHRoZSBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7SXRlcmF0YWJsZU9iamVjdH0gaXRlcmF0YWJsZU9iamVjdCBBbiBvYmplY3QgdGhhdCBoYXMgbGVuZ3RoIHByb3BlcnR5LlxuICogQHJldHVybnMge0FycmF5fSBBcnJheSBjb250YWluaW5nIGFsbCB2YWx1ZXMgZnJvbSBhbiBJdGVyYXRhYmxlT2JqZWN0LlxuICogQGV4YW1wbGVcbiAqIHRvX2FycmF5KHswOiAxMCwgMTogMjAsIGxlbmd0aDogMn0pXG4gKiAvLyA9PiBbMTAsIDIwXVxuICogQGV4YW1wbGVcbiAqIHRvX2FycmF5KFwid29yZFwiKVxuICogLy8gPT4gW1wid1wiLCBcIm9cIiwgXCJyXCIsIFwiZFwiXVxuICovXG5mdW5jdGlvbiB0b19hcnJheShpdGVyYXRhYmxlT2JqZWN0KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZXJhdGFibGVPYmplY3QpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgY29sbGVjdGlvbiBjb250YWluIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IENvbGxlY3Rpb24gaW4gd2hpY2ggdGhlIHZhbHVlIGlzIHNlYXJjaGVkLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBTZWFyY2hlZCB2YWx1ZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnV0aGZ1bG5lc3Mgb2YgdGhlIGNvbnRlbnRzLlxuICogQGV4YW1wbGVcbiAqIGluX2FycmF5KFsxLCAyLCAzLCA0XSwgMylcbiAqIC8vID0+IHRydWVcbiAqIEBleGFtcGxlXG4gKiBpbl9hcnJheShbMiwgNCwgNSwgMiwgMV0sIDYpXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpbl9hcnJheShhcnJheSwgdmFsdWUpIHtcbiAgICByZXR1cm4gVC5pc19hcnJheShhcnJheSkgPyBCb29sZWFuKH5hcnJheS5pbmRleE9mKHZhbHVlKSkgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdHlwZSBvZiBwcm92aWRlZCB2YWx1ZS5cbiAqIFByZXZlbnQgcGl0ZmFsbCB0eXBlcyBzdWNoIGFzIE5hTiwgbnVsbCwgW11cbiAqXG4gKiBAcGFyYW0ge21peH0gW3ZhbHVlID0gJ3VuZGVmaW5lZCddIENoZWNrZWQgdmFsdWUuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBBIHR5cGUgb2YgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICogdHlwZShudWxsKVxuICogLy8gPT4gJ251bGwnXG4gKiBAZXhhbXBsZVxuICogdHlwZShbMSwgMiwgM10pXG4gKiAvLyA9PiAnYXJyYXknXG4gKiBAZXhhbXBsZVxuICogdHlwZShOYU4pXG4gKiAvLyA9PiAnTmFOXG4gKi9cbmZ1bmN0aW9uIHR5cGUodmFsdWUpIHtcbiAgICBpZiAoVC5pc19OYU4odmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAnTmFOJztcbiAgICB9XG5cbiAgICBpZiAoVC5pc19hcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuXG4gICAgaWYgKFQuaXNfbnVsbCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlO1xufVxuXG4vKipcbiAqIEdldCBsZW5ndGggb2YgbGlzdCwgbnVtYmVyIG9mIHByb3BlcnRpZXMgaW4gb2JqZWN0IG9yIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIHN0cmluZy5cbiAqIERlZmF1bHQgcmV0dXJuIHZhbHVlIHdpbGwgYmUgMC5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhdGFibGVPYmplY3R9IGl0ZXJhdGFibGVPYmplY3QgQW4gb2JqZWN0IHRoYXQgaGFzIGxlbmd0aCBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFNpemUgb2YgYW4gaXRlcmF0YWJsZU9iamVjdFxuICogQGV4YW1wbGVcbiAqIGxlbmd0aChbMSwgMiwgMywgNF0pXG4gKiAvLyA9PiA0XG4gKiBAZXhhbXBsZVxuICogbGVuZ3RoKHthOiAxMCwgYjogMTV9KVxuICogLy8gPT4gMlxuICogQGV4YW1wbGVcbiAqIGxlbmd0aChcImFiY2RlZmdcIilcbiAqIC8vID0+IDdcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoKGl0ZXJhdGFibGVPYmplY3QpIHtcblxuICAgIGlmICghVC5pc19kZWZpbmVkKGl0ZXJhdGFibGVPYmplY3QpKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmIChULmlzX29iamVjdChpdGVyYXRhYmxlT2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoaXRlcmF0YWJsZU9iamVjdCkubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmIChULmlzX3N0cmluZyhpdGVyYXRhYmxlT2JqZWN0KSB8fCBULmlzX2FycmF5KGl0ZXJhdGFibGVPYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRhYmxlT2JqZWN0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcmFuZG9tX251bWJlcixcbiAgICB0b19hcnJheSxcbiAgICBpbl9hcnJheSxcbiAgICB0eXBlLFxuICAgIGxlbmd0aCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbGl0eS91dGlsaXR5LmpzIiwiY29uc3QgeyB0eXBlIH0gPSByZXF1aXJlKCcuLi91dGlsaXR5L3V0aWxpdHknKTtcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZXJyb3IgdGhyb3dpbmcgZnVuY3Rpb25zLlxuICogQG1vZHVsZSBFcnJvclxuICovXG5cbi8qKlxuICogVGhyb3cgbmV3IFR5cGVFcnJvciB3aXRoIGludmFsaWQgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwZWN0ZWRcbiAqIEBwYXJhbSB7bWl4fSB2YWx1ZVxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICovXG5mdW5jdGlvbiB0aHJvd1R5cGVFcnJvcihleHBlY3RlZFR5cGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlKGV4cGVjdGVkVHlwZSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93VHlwZUVycm9yKCdzdHJpbmcnLCBleHBlY3RlZFR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCAnJHtleHBlY3RlZFR5cGV9JyBidXQgaW5zdGVhZCByZWNlaXZlZCAnJHt0eXBlKHZhbHVlKX0nLmApO1xuICAgIH07XG59XG5cbi8qKlxuICogQ29tcG9zZWQgdGhyb3dUeXBlRXJyb3IgZnVuY3Rpb24uXG4gKiBUaHJvdyBlcnJvciB3aXRoIHN0cmluZyB0eXBlIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHttaXh9IHZhbHVlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKi9cbmNvbnN0IHRocm93U3RyaW5nVHlwZUVycm9yID0gdGhyb3dUeXBlRXJyb3IoJ3N0cmluZycpO1xuXG4vKipcbiAqIENvbXBvc2VkIHRocm93VHlwZUVycm9yIGZ1bmN0aW9uLlxuICogVGhyb3cgZXJyb3Igd2l0aCBmdW5jdGlvbiB0eXBlIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHttaXh9IHZhbHVlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKi9cbmNvbnN0IHRocm93RnVuY3Rpb25UeXBlRXJyb3IgPSB0aHJvd1R5cGVFcnJvcignZnVuY3Rpb24nKTtcblxuLyoqXG4gKiBDb21wb3NlZCB0aHJvd1R5cGVFcnJvciBmdW5jdGlvbi5cbiAqIFRocm93IGVycm9yIHdpdGggb2JqZWN0IHR5cGUgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge21peH0gdmFsdWVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqL1xuY29uc3QgdGhyb3dPYmplY3RUeXBlRXJyb3IgPSB0aHJvd1R5cGVFcnJvcignb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRocm93VHlwZUVycm9yLFxuICAgIHRocm93U3RyaW5nVHlwZUVycm9yLFxuICAgIHRocm93RnVuY3Rpb25UeXBlRXJyb3IsXG4gICAgdGhyb3dPYmplY3RUeXBlRXJyb3Jcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvZXJyb3JzL2Vycm9ycy5qcyIsInJlcXVpcmUoJy4uL2pzZG9jcy9qc2RvY3MnKTtcbmNvbnN0IFQgPSByZXF1aXJlKCcuLi90eXBlcy90eXBlcycpO1xuY29uc3QgVSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvdXRpbGl0eScpO1xuY29uc3QgeyBvYmplY3RfcGx1Y2sgfSA9IHJlcXVpcmUoJy4uL29iamVjdC9vYmplY3QnKTtcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgYXJyYXkgbWFuaXB1bGF0aW5nIGZ1bmN0aW9ucy5cbiAqIEBtb2R1bGUgQXJyYXlcbiAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgZmlyc3QgZWxlbWVudCBmcm9tIHRoZSBsaXN0LlxuICogQnkgcHJvdmlkaW5nIG51bWJlciAobikgYXMgYSBmaXJzdCBhcmd1bWVudCxcbiAqIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZSBmaXJzdCBuIGVsZW1lbnRzIGZyb20gYSBsaXN0LlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6QXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfEFycmF5fSBuIE51bWJlciBvZiBmaXJzdCB2YWx1ZXMgdG8gZ2V0LCBvciBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXl8Qm9vbGVhbn0gW2Fycl0gVGhlIGFycmF5IHRvIHByb2Nlc3MsIG9yIGFycmF5IGNvbnZlcnQgZmxhZy5cbiAqIEByZXR1cm5zIHttaXh8QXJyYXl9IFJldHVybnMgZmlyc3QgdmFsdWUgZnJvbSBhcnJheSBvciB0aGUgbmV3IGFycmF5IGNvbnRhaW5pbmcgbiB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfZmlyc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDFcbiAqIEBleGFtcGxlXG4gKiBhcnJheV9maXJzdChbMSwgMiwgM10sIHRydWUpO1xuICogLy8gPT4gWzFdXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfZmlyc3QoMiwgWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IFsxLCAyXVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2ZpcnN0KDIpKFsxLCAyLCAzLCA0XSk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfZmlyc3QoKSB7XG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjb25zdCBhcmcwID0gYXJnc1swXTsgLy8gRXhwZWN0aW5nIG51bWJlciBvciBhcnJheS5cbiAgICBjb25zdCBhcmcxID0gYXJnc1sxXTsgLy8gRXhwZWN0aW5nIGFycmF5IG9yIGJvb2xlYW4gb3Igbm90aGluZy5cblxuICAgIGNvbnN0IG51bWJlck9mQXJndW1lbnRzID0gVS5sZW5ndGgoYXJncyk7XG5cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDIgJiYgVC5pc19udW1iZXIoYXJnMCkgJiYgVC5pc19hcnJheShhcmcxKSkge1xuICAgICAgICByZXR1cm4gYXJnMS5zbGljZSgwLCBhcmcwKTtcbiAgICB9XG5cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDIgJiYgVC5pc19hcnJheShhcmcwKSAmJiBULmlzX2Jvb2xlYW4oYXJnMSkpIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChhcmcwWzBdKTtcbiAgICB9XG5cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDEpIHtcbiAgICAgICAgaWYgKFQuaXNfYXJyYXkoYXJnMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBVLmxlbmd0aChhcmcwKSA/IGFyZzBbMF0gOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmIChULmlzX251bWJlcihhcmcwKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoVC5pc19hcnJheShfYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVLmxlbmd0aChfYXJyYXkpID8gX2FycmF5LnNsaWNlKDAsIGFyZzApIDogW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS5cbiAqIEVzcGVjaWFsbHkgdXNlZnVsIG9uIHRoZSBhcmd1bWVudHMgb2JqZWN0LlxuICogUGFzcyBuIHRvIGV4Y2x1ZGUgdGhlIGxhc3QgbiBlbGVtZW50cyBmcm9tIHRoZSByZXN1bHQuXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTpBcnJheVxuICogQHBhcmFtIHtOdW1iZXJ8QXJyYXl9IG4gTnVtYmVyIG9mIGxhc3QgdmFsdWVzIHRvIGV4Y2x1ZGUsIG9yIGFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBwcm9jZXNzLlxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBjb250YWluaW5nIGluaXRpYWwgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X2luaXRpYWwoWzUsIDQsIDMsIDIsIDFdKTtcbiAqIC8vID0+IFs1LCA0LCAzLCAyXVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2luaXRpYWwoMiwgWzUsIDQsIDMsIDIsIDFdKTtcbiAqIC8vID0+IFs1LCA0LCAzXVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2luaXRpYWwoMykoWzUsIDQsIDMsIDIsIDFdKTtcbiAqIC8vID0+IFs1LCA0XVxuICovXG5mdW5jdGlvbiBhcnJheV9pbml0aWFsKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY29uc3QgYXJnMCA9IGFyZ3NbMF07IC8vIEV4cGVjdGluZyBudW1iZXIgb3IgYXJyYXkuXG4gICAgY29uc3QgYXJnMSA9IGFyZ3NbMV07IC8vIEV4cGVjdGluZyBhcnJheSBvciBub3RoaW5nLlxuXG4gICAgY29uc3QgbnVtYmVyT2ZBcmd1bWVudHMgPSBVLmxlbmd0aChhcmdzKTtcblxuICAgIGlmIChudW1iZXJPZkFyZ3VtZW50cyA9PT0gMiAmJiBULmlzX251bWJlcihhcmcwKSAmJiBULmlzX2FycmF5KGFyZzEpKSB7XG4gICAgICAgIHJldHVybiBhcmcwID4gMCA/IGFyZzEuc2xpY2UoMCwgLWFyZzApIDogYXJnMS5zbGljZSgwLCAtMSk7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAxKSB7XG4gICAgICAgIGlmIChULmlzX2FycmF5KGFyZzApKSB7XG4gICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoYXJnMCkgPyBhcmcwLnNsaWNlKDAsIC0xKSA6IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgaWYgKFQuaXNfbnVtYmVyKGFyZzApKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gdGFrZUFycmF5KF9hcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBVLmxlbmd0aChfYXJyYXkpID8gX2FycmF5LnNsaWNlKDAsIC1hcmcwKSA6IFtdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuXG4gKiBQYXNzaW5nIG4gd2lsbCByZXR1cm4gdGhlIGxhc3QgbiBlbGVtZW50cyBvZiB0aGUgYXJyYXkuXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTpBcnJheVxuICogQHBhcmFtIHtOdW1iZXJ8QXJyYXl9IG4gTnVtYmVyIG9mIGZpcnN0IGVsZW1lbnRzIHRvIGV4Y2x1ZGUgb3IgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7QXJyYXl8Qm9vbGVhbn0gYSBBcnJheSB0byBwcm9jZXNzIG9yIGFycmF5IGNvbnZlcnQgZmxhZy5cbiAqIEByZXR1cm4ge21peHxBcnJheX0gUmV0dXJucyBsYXN0IHZhbHVlIG9yIHRoZSBuZXcgYXJyYXkgY29udGFpbmluZyBsYXN0IHZhbHVlKHMpXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfbGFzdChbNSwgNCwgMywgMiwgMV0pO1xuICogLy8gPT4gMVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2xhc3QoWzUsIDQsIDMsIDIsIDFdLCB0cnVlKTtcbiAqIC8vID0+IFsxXVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2xhc3QoMiwgWzUsIDQsIDMsIDIsIDFdKTtcbiAqIC8vID0+IFsyLCAxXVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2xhc3QoMikoWzUsIDQsIDMsIDIsIDFdKTtcbiAqIC8vID0+IFsyLCAxXVxuICovXG5mdW5jdGlvbiBhcnJheV9sYXN0KCkge1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY29uc3QgYXJnMCA9IGFyZ3NbMF07IC8vIEV4cGVjdGluZyBudW1iZXIgb3IgYXJyYXkuXG4gICAgY29uc3QgYXJnMSA9IGFyZ3NbMV07IC8vIEV4cGVjdGluZyBhcnJheSBvciBub3RoaW5nLlxuXG4gICAgY29uc3QgbnVtYmVyT2ZBcmd1bWVudHMgPSBVLmxlbmd0aChhcmdzKTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAyICYmIFQuaXNfbnVtYmVyKGFyZzApICYmIFQuaXNfYXJyYXkoYXJnMSkpIHtcbiAgICAgICAgcmV0dXJuIFUubGVuZ3RoKGFyZzEpID8gYXJnMS5zbGljZSgtYXJnMCkgOiBbXTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChudW1iZXJPZkFyZ3VtZW50cyA9PT0gMiAmJiBULmlzX2FycmF5KGFyZzApICYmIFQuaXNfYm9vbGVhbihhcmcxKSkge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KGFyZzBbVS5sZW5ndGgoYXJnMCkgLSAxXSk7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAxKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmIChULmlzX2FycmF5KGFyZzApKSB7XG4gICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoYXJnMCkgPyBhcmcwW1UubGVuZ3RoKGFyZzApIC0gMV0gOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmIChULmlzX251bWJlcihhcmcwKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VBcnJheShfYXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoX2FycmF5KSA/IF9hcnJheS5zbGljZSgtYXJnMCkgOiBbXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcmVzdCBvZiB0aGUgZWxlbWVudHMgaW4gYW4gYXJyYXkuXG4gKiBQYXNzIGFuIGluZGV4IHRvIHJldHVybiB0aGUgdmFsdWVzIG9mIHRoZSBhcnJheSBmcm9tIHRoYXQgaW5kZXggb253YXJkLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6QXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfEFycmF5fSBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBvciBBcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHtBcnJheX0gW2Fycl0gQXJyYXkgdG8gcHJvY2Vzc1xuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBjb250YWluaW5nIHJlc3QgdmFsdWVzXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfcmVzdChbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gWzIsIDMsIDRdXG4gKiBhcnJheV9yZXN0KDIsIFsxLCAyLCAzLCA0XSk7XG4gKiAvLyA9PiBbMywgNF1cbiAqIGFycmF5X3Jlc3QoMikoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IFszLCA0XVxuICovXG5mdW5jdGlvbiBhcnJheV9yZXN0KCkge1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY29uc3QgYXJnMCA9IGFyZ3NbMF07IC8vIEV4cGVjdGluZyBudW1iZXIgb3IgYXJyYXkuXG4gICAgY29uc3QgYXJnMSA9IGFyZ3NbMV07IC8vIEV4cGVjdGluZyBhcnJheSBvciBub3RoaW5nLlxuXG4gICAgY29uc3QgbnVtYmVyT2ZBcmd1bWVudHMgPSBVLmxlbmd0aChhcmdzKTtcblxuICAgIGlmIChudW1iZXJPZkFyZ3VtZW50cyA9PT0gMiAmJiBULmlzX251bWJlcihhcmcwKSAmJiBULmlzX2FycmF5KGFyZzEpKSB7XG4gICAgICAgIHJldHVybiBVLmxlbmd0aChhcmcxKSA/IGFyZzEuc2xpY2UoYXJnMCkgOiBbXTtcbiAgICB9XG5cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDEpIHtcbiAgICAgICAgaWYgKFQuaXNfYXJyYXkoYXJnMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBVLmxlbmd0aChhcmcwKSA/IGFyZzAuc2xpY2UoMSkgOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmIChULmlzX251bWJlcihhcmcwKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VBcnJheShfYXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoX2FycmF5KSA/IF9hcnJheS5zbGljZShhcmcwKSA6IFtdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCBhbGwgZmFsc3kgdmFsdWVzIHJlbW92ZWQuXG4gKiBJbiBKYXZhU2NyaXB0LCBmYWxzZSwgbnVsbCwgMCwgXCJcIiwgdW5kZWZpbmVkIGFuZCBOYU4gYXJlIGFsbCBmYWxzeS5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB0byBwcm9jZXNzLlxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgYXJyYXkgY29udGFpbmluZyB0aHJ1dGh5IHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9jb21wYWN0KFswLCAxLCBcIkhlbGxvXCIsIHt9LCBudWxsLCBbMSwgMiwgM10sIHZvaWQgMF0pXG4gKiAvLyA9PiBbMSwgXCJIZWxsb1wiLCB7fSwgWzEsIDIsIDNdXVxuICovXG5mdW5jdGlvbiBhcnJheV9jb21wYWN0KGFycmF5KSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIGNoZWNrSWZGYWxzeShlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKGVsZW1lbnQpO1xuICAgIH0pIDogW107XG59XG5cbi8qKlxuICogRmxhdHRlbnMgYSBuZXN0ZWQgYXJyYXkgKHRoZSBuZXN0aW5nIGNhbiBiZSB0byBhbnkgZGVwdGgpLlxuICogSWYgeW91IHBhc3Mgc2hhbGxvdywgdGhlIGFycmF5IHdpbGwgb25seSBiZSBmbGF0dGVuZWQgYSBzaW5nbGUgbGV2ZWwuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyIEFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtzaGFsbG93XSBGbGF0IG9ubHkgb25lIGxldmVsIGluIGRlcHRoLlxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgZmxhdHRlbiBhcnJheS5cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9mbGF0dGVuKFsxLCBbMl0sIFszLCBbWzRdXV1dKVxuICogLy8gPT4gWzEsIDIsIDMsIDRdXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfZmxhdHRlbihbMSwgWzJdLCBbMywgW1s0XV1dXSwgdHJ1ZSk7XG4gKiAvLyA9PiBbMSwgMiwgMywgW1s0XV1dXG4gKi9cbmZ1bmN0aW9uIGFycmF5X2ZsYXR0ZW4oKSB7XG4gICAgY29uc3QgYXJnMCA9IGFyZ3VtZW50c1swXTsgLy8gRXhwZWN0aW5nIGFycmF5LlxuICAgIGNvbnN0IGFyZzEgPSBhcmd1bWVudHNbMV07IC8vIEV4cGVjdGluZyBib29sZWFuIGZsYWcuXG5cbiAgICBpZiAoVC5pc19hcnJheShhcmcwKSkge1xuICAgICAgICBpZiAoYXJnMSkgeyAvLyBJZiBzaGFsbG93LCBwZXJmb3JtIG9uZSBsZXZlbCBmbGF0dGVuaW5nLlxuICAgICAgICAgICAgcmV0dXJuIGFyZzAucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQodmFsdWUpO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFyZzAucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChULmlzX2FycmF5KHZhbHVlKSA/IGFycmF5X2ZsYXR0ZW4odmFsdWUpIDogdmFsdWUpO1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBjb3B5IG9mIHRoZSBhcnJheSB3aXRoIGFsbCBpbnN0YW5jZXMgb2YgdGhlIHZhbHVlcyByZW1vdmVkLlxuICpcbiAqIFRPRE86IFBlcmZvcm1hbmNlIG9wdGltaXphdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHsuLi5hcmd1bWVudHN9XG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBuZXcgYXJyYXkgd2l0aG91dCB2XG4gKiBAZXhhbXBsZVxuICogYXJyYXlfd2l0aG91dChbMSwgMiwgMywgNCwgNV0sIDIsIDQpXG4gKiAvLyA9PiBbMSwgMywgNV1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfd2l0aG91dChhcnJheSkge1xuICAgIGNvbnN0IHJlc3QgPSBhcnJheV9yZXN0KFUudG9fYXJyYXkoYXJndW1lbnRzKSk7XG5cbiAgICByZXR1cm4gVC5pc19hcnJheShhcnJheSkgPyBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhVS5pbl9hcnJheShyZXN0LCB2YWx1ZSk7XG4gICAgfSkgOiBbXTtcbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgdGhlIGFycmF5LlxuICpcbiAqIFRPRE86IFJlbW92ZSBkdXBsaWNhdGUgb2JqZWN0cyBhbmQgaW5uZXIgYXJyYXlzLlxuICpcbiAqIFRPRE86IFBlcmZvcm1hbmNlIG9wdGltaXphdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB0byBwcm9jZXNzLlxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgYXJyYXkgd2l0aCBkdXBsaWNhdGUgZnJlZSB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfdW5pcXVlKFsxLCAyLCAyLCAzLCA0LCAzLCAxLCA1LCA1LCA3LCA2LCA2XSlcbiAqIC8vID0+IFsxLCAyLCAzLCA0LCA1LCA3LCA2XVxuICovXG5mdW5jdGlvbiBhcnJheV91bmlxdWUoYXJyYXkpIHtcbiAgICByZXR1cm4gVC5pc19hcnJheShhcnJheSkgPyBhcnJheS5maWx0ZXIoZnVuY3Rpb24gY2hlY2tQb3NpdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbiAgICB9KSA6IFtdO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSB1bmlvbiBvZiB0aGUgcGFzc2VkLWluIGFycmF5cyBvciB2YWx1ZXM6XG4gKiB0aGUgbGlzdCBvZiB1bmlxdWUgaXRlbXMsIGluIG9yZGVyLCB0aGF0IGFyZSBwcmVzZW50IGluIG9uZSBvciBtb3JlIG9mIHRoZSBhcnJheXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzc1xuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjb21iaW5lZCB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfdW5pb24oWzEsIDIsIDNdLCBbMTAxLCAyLCAxLCAxMF0sIFsyLCAxXSlcbiAqIC8vID0+IFsxLCAyLCAzLCAxMDEsIDEwXVxuICogQGV4YW1wbGVcbiAqIGFycmF5X3VuaW9uKDEsIDIsIFszLCAyXSwgNCwgWzIsIDVdKVxuICogLy8gPT4gWzEsIDIsIDMsIDQsIDVdXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3VuaW9uKCkge1xuICAgIHJldHVybiBhcnJheV91bmlxdWUoYXJyYXlfZmxhdHRlbihVLnRvX2FycmF5KGFyZ3VtZW50cykpKTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgbGlzdCBvZiB2YWx1ZXMgdGhhdCBhcmUgdGhlIGludGVyc2VjdGlvbiBvZiBhbGwgdGhlIGFycmF5cy5cbiAqIEVhY2ggdmFsdWUgaW4gdGhlIHJlc3VsdCBpcyBwcmVzZW50IGluIGVhY2ggb2YgdGhlIGFycmF5cy5cbiAqXG4gKiBUT0RPOiBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2Ygc2hhcmVkIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9pbnRlcnNlY3Rpb24oWzEsIDIsIDNdLCBbMTAxLCAyLCAxLCAxMF0sIFsyLCAxXSlcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBhcnJheV9pbnRlcnNlY3Rpb24oKSB7XG4gICAgY29uc3QgYXJyYXlzID0gVS50b19hcnJheShhcmd1bWVudHMpO1xuICAgIGNvbnN0IG1haW5BcnJheSA9IGFycmF5X2ZpcnN0KGFycmF5cywgdHJ1ZSk7XG4gICAgY29uc3QgcmVzdCA9IGFycmF5X3Jlc3QoYXJyYXlzKTtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBbXTtcblxuICAgIGlmIChVLmxlbmd0aChhcnJheXMpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoIVQuaXNfYXJyYXkobWFpbkFycmF5KSB8fCBVLmxlbmd0aChtYWluQXJyYXkpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGZpcnN0OlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVS5sZW5ndGgobWFpbkFycmF5KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbWFpbkFycmF5W2ldO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IFUubGVuZ3RoKHJlc3QpOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gcmVzdFtqXTtcbiAgICAgICAgICAgIGlmIChULmlzX2FycmF5KGFycmF5KSkge1xuICAgICAgICAgICAgICAgIGlmICghVS5pbl9hcnJheShyZXN0W2pdLCBtYWluQXJyYXlbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIGZpcnN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0aW9uLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWsgZmlyc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW50ZXJzZWN0aW9uLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheV91bmlxdWUoaW50ZXJzZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc2h1ZmZsZWQgY29weSBvZiB0aGUgbGlzdCwgdXNpbmcgYSBGaXNoZXItWWF0ZXMgc2h1ZmZsZSBhbGdvcml0aG0uXG4gKlxuICogQnVpbHQgdXNpbmcgRmlzaGVy4oCTWWF0ZXMgc2h1ZmZsZSBhbGdvcml0aG0uXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXIlRTIlODAlOTNZYXRlc19zaHVmZmxlXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgc2h1ZmZsZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfc2h1ZmZsZShbMSwgMiwgMywgNCwgNSAsNl0pO1xuICogLy8gPT4gWzIsIDMsIDEsIDQsIDYsIDVdXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3NodWZmbGUoYXJyYXkpIHtcbiAgICBpZiAoIVQuaXNfYXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgaW5kZXgsIHRlbXAsIHJhbmRvbUluZGV4O1xuICAgIGNvbnN0IGFycmF5Q2xvbmUgPSBbXS5jb25jYXQoYXJyYXkpO1xuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gVS5sZW5ndGgoYXJyYXlDbG9uZSk7XG5cbiAgICBmb3IgKGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+IDA7IGluZGV4LS0pIHtcbiAgICAgICAgcmFuZG9tSW5kZXggPSBVLnJhbmRvbV9udW1iZXIoYXJyYXlMZW5ndGgpO1xuICAgICAgICB0ZW1wID0gYXJyYXlDbG9uZVtpbmRleF07XG4gICAgICAgIGFycmF5Q2xvbmVbaW5kZXhdID0gYXJyYXlDbG9uZVtyYW5kb21JbmRleF07XG4gICAgICAgIGFycmF5Q2xvbmVbcmFuZG9tSW5kZXhdID0gdGVtcDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlDbG9uZTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHZhbHVlcyBvZiBhIHNwZWNpZmllZCBwcm9wZXJ0eSBmcm9tIGFsbCBvYmplY3RzIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgT2JqZWN0IGtleSBvciBuZXN0ZWQgb2JqZWN0IGtleSBwYXRoLlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgb2Ygb2JqZWN0cyB0byBwcm9jZXNzLlxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IHdpdGggcGx1Y2tlZCB2YWx1ZXMgZnJvbSBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfcGx1Y2soJ2lkJywgW3tpZDogMX0sIHtpZDoyfSwge2lkOjN9XSk7XG4gKiAvLyA9PiBbMSwgMiwgM11cbiAqL1xuZnVuY3Rpb24gYXJyYXlfcGx1Y2soa2V5LCBhcnJheSkge1xuICAgIGlmIChULmlzX3N0cmluZyhrZXkpICYmIFQuaXNfYXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBfY29tcHV0ZVBsdWNraW5nKGtleSwgYXJyYXkpO1xuICAgIH1cblxuICAgIGlmIChVLmxlbmd0aChhcmd1bWVudHMpID09PSAxICYmIFQuaXNfc3RyaW5nKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VBcnJheShfYXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBULmlzX2FycmF5KF9hcnJheSkgPyBfY29tcHV0ZVBsdWNraW5nKGtleSwgX2FycmF5KSA6IFtdO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgYWxsIHByb3BlcnRpZXMgZnJvbSBhbiBvYmplY3RzIGluc2lkZSBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBPYmplY3Qga2V5IG9yIG5lc3RlZCBvYmplY3Qga2V5IHBhdGguXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgcGx1Y2tlZCB2YWx1ZXMgZnJvbSBvYmplY3RzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NvbXB1dGVQbHVja2luZyhrZXksIGFycmF5KSB7XG4gICAgICAgIGxldCBwbHVja2VkQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZJdGVtcyA9IFUubGVuZ3RoKGFycmF5KTtcbiAgICAgICAgZm9yIChpbmRleDsgaW5kZXggPCBudW1iZXJPZkl0ZW1zOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgaWYgKFQuaXNfb2JqZWN0KGFycmF5W2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9iamVjdF9wbHVjayhrZXksIGFycmF5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKFQuaXNfZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Y2tlZEFycmF5LnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwbHVja2VkQXJyYXk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgZW5kIG9mIGFuIGFycmF5IGFuZFxuICogcmV0dXJuIG5ldyBhcnJheSB3aXRoIGFsbCB2YWx1ZXMgaW5jbHVkZWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgT3JpZ2luYWwgYXJyYXkuXG4gKiBAcGFyYW0ge21peH0gWy4uLmFyZ3NdIFZhbHVlcyB0byBhZGQgdG8gYXJyYXkuXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBuZXcgYXJyYXkgd2l0aCB2YWx1ZXMgYXBwZW5kZWQgdG8gb3JpZ2luYWwuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfcHVzaChbXSwgMSwgMiwgMywgNCk7XG4gKiAvLyA9PiBbMSwgMiwgMywgNF1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9wdXNoKFsxLCAyLCAzXSwgWzQsIDUsIDZdKTtcbiAqIC8vID0+IFsxLCAyLCAzLCBbNCwgNSwgNl1dXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3B1c2goYXJyYXkpIHtcbiAgICByZXR1cm4gVC5pc19hcnJheShhcnJheSkgPyBhcnJheS5jb25jYXQoYXJyYXlfcmVzdChVLnRvX2FycmF5KGFyZ3VtZW50cykpKSA6IFtdO1xufVxuXG4vKipcbiAqIFJldHVybiBsYXN0IGVsZW1lbnQgZnJvbSBhIGNvbGxlY3Rpb24uXG4gKiBVbmxpa2UgYXJyYXlfbGFzdCB3aGVyZSBmdW5jdGlvbiBhbHdheXMgcmV0dXJuIGVtcHR5IGNvbGxlY3Rpb24gKFtdKVxuICogaWYgbm90aGluZyBpcyBmb3VuZCBvciBpbnB1dCBpcyBpbnZhbGlkLCBhcnJheV9wb3AgcmV0dXJucyB1bmRlZmluZWQgYXMgYSByZXN1bHQuXG4gKlxuICogTk9URTogYXJyYXlfbGFzdCBkb2VzIG5vdCBtdXRhdGUgb3JpZ2luYWwgYXJyYXkgbGlrZSBuYXRpdmUganMgYXJyYXkucG9wKClcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB0byBwcm9jZXNzLlxuICogQHJldHVybiB7Kn0gTGFzdCB2YWx1ZSBmcm9tIGFuIGFycmF5LlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3BvcChbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gNFxuICogQGV4YW1wbGVcbiAqIGFycmF5X3BvcChcImhlbGxvXCIpXG4gKiAvLyA9PiB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gYXJyYXlfcG9wKGFycmF5KSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXlbVS5sZW5ndGgoYXJyYXkpIC0gMV0gOiB2b2lkIDA7XG59XG5cbi8qKlxuICogQWRkIG9uZSBvciBtb3JlIGVsZW1lbnRzIHRvIHRoZSBiZWdpbm5pbmcgb2YgYW4gYXJyYXkgYW5kXG4gKiByZXR1cm4gbmV3IGFycmF5IHdpdGggYWxsIHZhbHVlcyBpbmNsdWRlZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHsuLi4qfSBlbGVtZW50cyBFbGVtZW50cyB0byBhZGQgYXQgdGhlIGJlZ2luaW5nIG9mIGFycmF5LlxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgYXJyYXkgd2l0aCBuZXcgdmFsdWVzIHZhbHVlcyBhdCB0aGUgYmVnaW5pbmcuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfdW5zaGlmdChbMSwgMiwgM10sIDQsIDUpO1xuICogLy8gPT4gWzQsIDUsIDEsIDIsIDNdXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3Vuc2hpZnQoYXJyYXkpIHtcbiAgICByZXR1cm4gVC5pc19hcnJheShhcnJheSkgPyBhcnJheV9yZXN0KFUudG9fYXJyYXkoYXJndW1lbnRzKSkuY29uY2F0KGFycmF5KSA6IFtdO1xufVxuXG4vKipcbiAqIFJldHVybiBmaXJzdCBlbGVtZW50IGZyb20gYSBjb2xsZWN0aW9uLlxuICogVW5saWtlIGFycmF5X2ZpcnN0IHdoZXJlIGZ1bmN0aW9uIGFsd2F5cyByZXR1cm4gZW1wdHkgY29sbGVjdGlvbiAoW10pXG4gKiBpZiBub3RoaW5nIGlzIGZvdW5kIG9yIGlucHV0IGlzIGludmFsaWQsIGFycmF5X3NoaWZ0IHJldHVybnMgdW5kZWZpbmVkIGFzIGEgcmVzdWx0LlxuICpcbiAqIE5PVEU6IGFycmF5X3NoaWZ0IGRvZXMgbm90IG11dGF0ZSBvcmlnaW5hbCBhcnJheSBsaWtlIG5hdGl2ZSBqcyBhcnJheS5zaGlmdCgpXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4geyp9IFJldHVybnMgZmlyc3QgZWxlbWVudCBmcm9tIGFuIGFycmF5LlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3NoaWZ0KFsxLCAyLCAzLCA0XSk7XG4gKiAvLyA9PiAxXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfc2hpZnQoe25hbWU6ICdTdGVmYW4nfSk7XG4gKiAvLyA9PiB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gYXJyYXlfc2hpZnQoYXJyYXkpIHtcbiAgICByZXR1cm4gVC5pc19hcnJheShhcnJheSkgPyBhcnJheVswXSA6IHZvaWQgMDtcbn1cblxuLyoqXG4gKiBSZXZlcnNlcyBhbiBhcnJheSBpbiBwbGFjZS4gVGhlIGZpcnN0IGFycmF5IGVsZW1lbnQgYmVjb21lcyB0aGUgbGFzdCxcbiAqIGFuZCB0aGUgbGFzdCBhcnJheSBlbGVtZW50IGJlY29tZXMgdGhlIGZpcnN0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgcmV2ZXJzZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfcmV2ZXJzZShbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gWzQsIDMsIDIsIDFdXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3JldmVyc2UoYXJyYXkpIHtcbiAgICBpZiAoVC5pc19hcnJheShhcnJheSkpIHtcbiAgICAgICAgbGV0IG51bWJlck9mRWxlbWVudHMgPSBVLmxlbmd0aChhcnJheSk7XG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gbWFwRWxlbWVudFJldmVyc2VkKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5W251bWJlck9mRWxlbWVudHMgLSAoaW5kZXggKyAxKV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXJyYXlfZmlyc3QsXG4gICAgYXJyYXlfaW5pdGlhbCxcbiAgICBhcnJheV9sYXN0LFxuICAgIGFycmF5X3Jlc3QsXG4gICAgYXJyYXlfY29tcGFjdCxcbiAgICBhcnJheV9mbGF0dGVuLFxuICAgIGFycmF5X3dpdGhvdXQsXG4gICAgYXJyYXlfdW5pcXVlLFxuICAgIGFycmF5X3VuaW9uLFxuICAgIGFycmF5X2ludGVyc2VjdGlvbixcbiAgICBhcnJheV9zaHVmZmxlLFxuICAgIGFycmF5X3BsdWNrLFxuICAgIGFycmF5X3B1c2gsXG4gICAgYXJyYXlfcG9wLFxuICAgIGFycmF5X3Vuc2hpZnQsXG4gICAgYXJyYXlfc2hpZnQsXG4gICAgYXJyYXlfcmV2ZXJzZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcnJheS9hcnJheS5qcyIsIi8qKlxuICogQW4gT2JqZWN0IGNvbnRhaW5pbmcgbGVuZ3RoIHBhcmFtZXRlci5cbiAqIEB0eXBlZGVmIHsoYXJyYXl8c3RyaW5nKX0gSXRlcmF0YWJsZU9iamVjdFxuICovXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9qc2RvY3MvanNkb2NzLmpzIiwiY29uc3QgVCA9IHJlcXVpcmUoJy4uL3R5cGVzL3R5cGVzJyk7XG5jb25zdCBFID0gcmVxdWlyZSgnLi4vZXJyb3JzL2Vycm9ycycpO1xuY29uc3QgeyBsZW5ndGggfSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvdXRpbGl0eScpO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBvYmplY3QgbWFuaXB1bGF0aW5nIGZ1bmN0aW9ucy5cbiAqIEBtb2R1bGUgT2JqZWN0XG4gKi9cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIGEgc3BlY2lmaWVkIHByb3BlcnR5IGZyb20gcHJvdmlkZWQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwZXJzb24gPSB7XG4gKiAgICAgbmFtZTogJ1N0ZWZhbicsXG4gKiAgICAgYWRkcmVzczoge1xuICogICAgICAgICBjaXR5OiAnQmVsZ3JhZGUnLFxuICogICAgICAgICBhcmVhOiB7XG4gKiAgICAgICAgICAgICBuYW1lOiAnQ3VrYXJpY2EnLFxuICogICAgICAgICB9XG4gKiAgICAgfVxuICogfTtcbiAqXG4gKiBvYmplY3RfcGx1Y2soJ2FkZHJlc3MuYXJlYS5uYW1lJywgcGVyc29uKTtcbiAqIC8vID0+ICdDdWthcmljYSdcbiAqXG4gKiBvYmplY3RfcGx1Y2soJ2FkZHJlc3MubmFtZS5hcmVhJywgcGVyc29uKTtcbiAqIC8vID0+IHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBvYmplY3RfcGx1Y2soa2V5LCBvYmplY3QpIHtcbiAgICBjb25zdCBudW1iZXJPZkFyZ3VtZW50cyA9IGxlbmd0aChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCFULmlzX3N0cmluZyhrZXkpKSB7XG4gICAgICAgIEUudGhyb3dTdHJpbmdUeXBlRXJyb3Ioa2V5KTtcbiAgICB9XG5cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldE9iamVjdChfb2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoIVQuaXNfb2JqZWN0KF9vYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgRS50aHJvd09iamVjdFR5cGVFcnJvcihfb2JqZWN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9kZWVwQWNjZXNzUGx1Y2soX29iamVjdCwga2V5KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIVQuaXNfb2JqZWN0KG9iamVjdCkpIHtcbiAgICAgICAgRS50aHJvd09iamVjdFR5cGVFcnJvcihvYmplY3QpO1xuICAgIH1cblxuICAgIHJldHVybiBfZGVlcEFjY2Vzc1BsdWNrKG9iamVjdCwga2V5KTtcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdmFsdWUgZnJvbSBhbiBkZWVwIG5lc3RlZCBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IEtleSBvciBuZXN0ZWQga2V5IHBhdGggaW4gdGhlIG9iamVjdC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGNvbnN0IHBlcnNvbiA9IHtcbiAgICAgKiAgICAgbmFtZTogJ1N0ZWZhbicsXG4gICAgICogICAgIGFkZHJlc3M6IHtcbiAgICAgKiAgICAgICAgIGNpdHk6ICdCZWxncmFkZScsXG4gICAgICogICAgICAgICBhcmVhOiB7XG4gICAgICogICAgICAgICAgICAgbmFtZTogJ0N1a2FyaWNhJyxcbiAgICAgKiAgICAgICAgIH1cbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICogX2RlZXBBY2Nlc3NQbHVjayhwZXJzb24sICdhZGRyZXNzLmFyZWEubmFtZScpXG4gICAgICogLy8gPT4gJ0N1a2FyaWNhJ1xuICAgICAqIF9kZWVwQWNjZXNzUGx1Y2socGVyc29uLCAnYWRkcmVzcy5jaXR5LmFyZWEubmFtZScpXG4gICAgICogLy8gPT4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2RlZXBBY2Nlc3NQbHVjayhvYmplY3QsIGtleSkge1xuICAgICAgICByZXR1cm4ga2V5LnNwbGl0KCcuJykucmVkdWNlKGZ1bmN0aW9uIGNoZWNrRXhpc3RlbmNlKGRlZXBPYmplY3QsIGtleSkge1xuICAgICAgICAgICAgaWYgKGRlZXBPYmplY3QgJiYga2V5IGluIGRlZXBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVlcE9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBvYmplY3QpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgb2JqZWN0X2tleXMgZnVuY3Rpb24gcmV0dXJucyBhbiBhcnJheSBvZiBhIGdpdmVuIG9iamVjdCdzIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHBlcnNvbiA9IHtcbiAqICAgICBmbmFtZTogJ1N0ZWZhbicsXG4gKiAgICAgbG5hbWU6ICdMYXphcmV2aWMnLFxuICogfTtcbiAqXG4gKiBvYmplY3Rfa2V5cyhwZXJzb24pO1xuICogLy8gPT4gWydmbmFtZScsICdsbmFtZSddXG4gKi9cbmZ1bmN0aW9uIG9iamVjdF9rZXlzKG9iamVjdCkge1xuICAgIGlmIChULmlzX29iamVjdChvYmplY3QpIHx8IFQuaXNfYXJyYXkob2JqZWN0KSB8fCBULmlzX3N0cmluZyhvYmplY3QpKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgdmFsdWVzIG9mIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IHZhbHVlcy5cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwZXJzb24gPSB7XG4gKiAgICAgZm5hbWU6ICdTdGVmYW4nLFxuICogICAgIGxuYW1lOiAnTGF6YXJldmljJyxcbiAqIH07XG4gKlxuICogb2JqZWN0X3ZhbHVlcyhwZXJzb24pO1xuICogLy8gPT4gWydTdGVmYW4nLCAnTGF6YXJldmljJ11cbiAqL1xuZnVuY3Rpb24gb2JqZWN0X3ZhbHVlcyhvYmplY3QpIHtcbiAgICBpZiAoVC5pc19vYmplY3Qob2JqZWN0KSkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgbGV0IGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChvYmplY3Rba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIEUudGhyb3dPYmplY3RUeXBlRXJyb3Iob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCBjb21wb3NlZCBvZiB0aGUgaW52ZXJ0ZWQga2V5cyBhbmQgdmFsdWVzIG9mIG9iamVjdC5cbiAqIElmIG9iamVjdCBjb250YWlucyBkdXBsaWNhdGUgdmFsdWVzLCBhbmQgc3Vic2VxdWVudCB2YWx1ZXMgb3ZlcndyaXRlIHByb3BlcnR5IGFzc2lnbm1lbnRzIG9mIHByZXZpb3VzIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW52ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IGludmVydGVkIG9iamVjdC5cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwZXJzb24gPSB7XG4gKiAgICAgZm5hbWU6ICdTdGVmYW4nLFxuICogICAgIGxuYW1lOiAnTGF6YXJldmljJyxcbiAqIH07XG4gKlxuICogb2JqZWN0X2ludmVydChwZXJzb24pO1xuICogLy8gPT4ge1xuICogLy8gICAgICAgIFN0ZWZhbjogJ2ZuYW1lJyxcbiAqIC8vICAgICAgICBMYXphcmV2aWM6ICdsbmFtZScsXG4gKiAvLyAgICB9XG4gKi9cbmZ1bmN0aW9uIG9iamVjdF9pbnZlcnQob2JqZWN0KSB7XG4gICAgaWYgKFQuaXNfb2JqZWN0KG9iamVjdCkpIHtcbiAgICAgICAgY29uc3QgaW52ZXJ0ZWRPYmplY3QgPSB7fTtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoVC5pc19kZWZpbmVkKHZhbHVlKSAmJiAhVC5pc19mdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3RbdmFsdWVdID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnZlcnRlZE9iamVjdDtcbiAgICB9XG5cbiAgICBFLnRocm93T2JqZWN0VHlwZUVycm9yKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9iamVjdF9wbHVjayxcbiAgICBvYmplY3Rfa2V5cyxcbiAgICBvYmplY3RfdmFsdWVzLFxuICAgIG9iamVjdF9pbnZlcnRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0L29iamVjdC5qcyIsIi8qIFVuZGVyIGNvbnN0cnVjdGlvbiAqL1xuY29uc3QgQSA9IHJlcXVpcmUoJy4vYXJyYXkvYXJyYXknKTtcbmNvbnN0IEQgPSByZXF1aXJlKCcuL2RhdGUvZGF0ZScpO1xuY29uc3QgRSA9IHJlcXVpcmUoJy4vZXJyb3JzL2Vycm9ycycpO1xuY29uc3QgRiA9IHJlcXVpcmUoJy4vZnVuY3Rpb24vZnVuY3Rpb24nKTtcbmNvbnN0IE8gPSByZXF1aXJlKCcuL29iamVjdC9vYmplY3QnKTtcbmNvbnN0IFMgPSByZXF1aXJlKCcuL3N0cmluZy9zdHJpbmcnKTtcbmNvbnN0IFQgPSByZXF1aXJlKCcuL3R5cGVzL3R5cGVzJyk7XG5jb25zdCBVID0gcmVxdWlyZSgnLi91dGlsaXR5L3V0aWxpdHknKTtcblxud2luZG93LkEgPSBBO1xud2luZG93LkQgPSBEO1xud2luZG93LkUgPSBFO1xud2luZG93LkYgPSBGO1xud2luZG93Lk8gPSBPO1xud2luZG93LlMgPSBTO1xud2luZG93LkUgPSBFO1xud2luZG93LlQgPSBUO1xud2luZG93LlUgPSBVO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIiwiY29uc3QgQSA9IHJlcXVpcmUoJy4uL2FycmF5L2FycmF5Jyk7XG5jb25zdCBUID0gcmVxdWlyZSgnLi4vdHlwZXMvdHlwZXMnKTtcbmNvbnN0IFUgPSByZXF1aXJlKCcuLi91dGlsaXR5L3V0aWxpdHknKTtcbmNvbnN0IEUgPSByZXF1aXJlKCcuLi9lcnJvcnMvZXJyb3JzJyk7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIEZQIHN0eWxlIGZ1bmN0aW9ucy5cbiAqIEBtb2R1bGUgRnVuY3Rpb25cbiAqL1xuXG4vKipcbiAqIEN1cnJ5aW5nIHJlZmVycyB0byB0aGUgcHJvY2VzcyBvZiB0cmFuc2Zvcm1pbmcgYSBmdW5jdGlvbiB3aXRoIG11bHRpcGxlIGFyaXR5XG4gKiBpbnRvIHRoZSBzYW1lIGZ1bmN0aW9uIHdpdGggbGVzcyBhcml0eS4gVGhlIGN1cnJpZWQgZWZmZWN0IGlzIGFjaGlldmVkIGJ5IGJpbmRpbmdcbiAqIHNvbWUgb2YgdGhlIGFyZ3VtZW50cyB0byB0aGUgZmlyc3QgZnVuY3Rpb24gaW52b2tlLFxuICogc28gdGhhdCB0aG9zZSB2YWx1ZXMgYXJlIGZpeGVkIGZvciB0aGUgbmV4dCBpbnZvY2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0N1cnJ5aW5nXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufG1peH1cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqL1xuZnVuY3Rpb24gY3VycnkoZm4pIHtcbiAgICBpZiAoVC5pc19mdW5jdGlvbihmbikpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IEEuYXJyYXlfcmVzdChVLnRvX2FycmF5KGFyZ3VtZW50cykpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gdGFrZU1pc3NpbmdBcmd1bWVudHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncy5jb25jYXQoVS50b19hcnJheShhcmd1bWVudHMpKSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRS50aHJvd0Z1bmN0aW9uVHlwZUVycm9yKGZuKTtcbiAgICB9XG59XG5cbi8qKlxuICogRnVuY3Rpb24gY29tcG9zaXRpb24gaXMgdGhlIHByb2Nlc3Mgb2YgY29tYmluaW5nIHR3byBvciBtb3JlIGZ1bmN0aW9uc1xuICogdG8gcHJvZHVjZSBuZXcgZnVuY3Rpb24uIENvbXBvc2VkIGZ1bmN0aW9uIHRha2UgZGF0YSBhbmQgcHJvY2VzcyBpdFxuICogdGhyb3VnaCBhbGwgcGlwZXMgZnJvbSByaWdodCB0byBsZWZ0IHByb2R1Y2luZyBuZXcgZGF0YS4gKGYgbyBnKSA9PiBmKGcobykpO1xuICpcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Z1bmN0aW9uX2NvbXBvc2l0aW9uXyhjb21wdXRlcl9zY2llbmNlKVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAcmV0dXJuIHtGdW5jdGlvbnxtaXh9XG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gICAgY29uc3QgZnVuY3Rpb25zID0gYXJndW1lbnRzO1xuICAgIGxldCBpbmRleCA9IGZ1bmN0aW9ucy5sZW5ndGg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAtLWluZGV4O1xuICAgICAgICByZXR1cm4gKGluZGV4ID4gLTEpID8gY29tcG9zZVZhbHVlKGZ1bmN0aW9uc1tpbmRleF0odmFsdWUpKSA6IHZhbHVlO1xuICAgIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uIHRoYXQgY2FuIG9ubHkgYmUgY2FsbGVkIG9uZSB0aW1lLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUgPyB2b2lkIDAgOiAoZG9uZSA9IHRydWUsIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGN1cnJ5LFxuICAgIGNvbXBvc2UsXG4gICAgb25jZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9mdW5jdGlvbi9mdW5jdGlvbi5qcyIsImNvbnN0IFQgPSByZXF1aXJlKCcuLi90eXBlcy90eXBlcycpO1xuY29uc3QgRSA9IHJlcXVpcmUoJy4uL2Vycm9ycy9lcnJvcnMnKTtcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc3RyaW5nIG1hbmlwdWxhdGluZyBmdW5jdGlvbnMuXG4gKiBAbW9kdWxlIFN0cmluZ1xuICovXG5cbi8qKlxuICogVGhlIHN0cmluZ190cmltKCkgbWV0aG9kIHJldHVybnMgdGhlIHN0cmluZyBzdHJpcHBlZCBvZiB3aGl0ZXNwYWNlIGZyb20gYm90aCBlbmRzLlxuICogc3RyaW5nX3RyaW0oKSBkb2VzIG5vdCBhZmZlY3QgdGhlIHZhbHVlIG9mIHRoZSAqIHN0cmluZyBpdHNlbGYuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBzdHJpbmdfdHJpbShcIiAgU3RlZmFuIExhemFyZXZpYyAgIFwiKSA9PiBcIlN0ZWZhbiBMYXphcmV2aWNcIlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBzdHJpbmdfdHJpbSh2YWx1ZSkge1xuICAgIGlmIChULmlzX3N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgICB9XG5cbiAgICBFLnRocm93U3RyaW5nVHlwZUVycm9yKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gcmVjZWl2ZWQgc3RyaW5nIHdpdGggZmlyc3QgbGV0dGVyIGluIHVwcGVyY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc3RyaW5nX2NhcGl0YWxpemUodmFsdWUpIHtcbiAgICBpZiAoVC5pc19zdHJpbmcodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9eXFx3LywgZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIEUudGhyb3dTdHJpbmdUeXBlRXJyb3IodmFsdWUpO1xufVxuXG4vKipcbiAqXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdHRlcm4gQSBwYXR0ZXJuIHRoYXQgd2lsbCBiZSBmdWxsZmlsbGVkLlxuICogQHBhcmFtIHtBcnJheXxOdW1iZXJ8U3RyaW5nfSB0b1JlcGxhY2VcbiAqL1xuZnVuY3Rpb24gc3RyaW5nX3BhdHRlcm4ocGF0dGVybiwgcmVwbGFjZW1lbnQpIHtcbiAgICBpZiAoVC5pc19zdHJpbmcocGF0dGVybikpIHtcbiAgICAgICAgY29uc3QgcGF0dGVyblRva2VucyA9IHBhdHRlcm4uc3BsaXQoJycpO1xuXG4gICAgICAgIGlmICghVC5pc19kZWZpbmVkKHJlcGxhY2VtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VSZXBsYWNlbWVudChfcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2Zvcm1hdFBhdHRlcm4ocGF0dGVyblRva2VucywgX3JlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2Zvcm1hdFBhdHRlcm4ocGF0dGVyblRva2VucywgcmVwbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIEUudGhyb3dTdHJpbmdUeXBlRXJyb3IocGF0dGVybik7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXR0ZXJuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9mb3JtYXRQYXR0ZXJuKHBhdHRlcm5Ub2tlbnMsIF9yZXBsYWNlbWVudCkge1xuICAgICAgICBsZXQgeFRva2VuSW5kZXggPSAwO1xuICAgICAgICBsZXQgcmVwbGFjZW1lbnQgPSBBcnJheSgwKTtcblxuICAgICAgICBpZiAoVC5pc19udW1iZXIoX3JlcGxhY2VtZW50KSkge1xuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBfcmVwbGFjZW1lbnQudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVC5pc19zdHJpbmcoX3JlcGxhY2VtZW50KSkge1xuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBfcmVwbGFjZW1lbnQuc3BsaXQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFQuaXNfYXJyYXkoX3JlcGxhY2VtZW50KSkge1xuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBfcmVwbGFjZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0dGVyblRva2Vucy5yZWR1Y2UoZnVuY3Rpb24gKHBhdHRlcm5TdHJpbmcsIHRva2VuKSB7XG4gICAgICAgICAgICBpZiAodG9rZW4gPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VWYWx1ZSA9IHJlcGxhY2VtZW50W3hUb2tlbkluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoVC5pc19kZWZpbmVkKHJlcGxhY2VWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblN0cmluZyArPSByZXBsYWNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHhUb2tlbkluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuU3RyaW5nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuU3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0dGVyblN0cmluZyArPSB0b2tlbjtcbiAgICAgICAgfSwgJycpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc3RyaW5nX3RyaW0sXG4gICAgc3RyaW5nX2NhcGl0YWxpemUsXG4gICAgc3RyaW5nX3BhdHRlcm4sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3N0cmluZy9zdHJpbmcuanMiXSwic291cmNlUm9vdCI6IiJ9