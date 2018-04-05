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
 * is_symbol(Symbol('x'))
 * // => true
 */
function is_symbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol';
}

/**
 * Determines if a value is valid Symbol.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is an RegExp, otherwise false.
 * @example
 * is_regexp(/abc/g);
 * // => true
 * @example
 * is_regexp(new RegExp('abc', 'g'));
 * // => true
 */
function is_regexp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
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
    is_symbol: is_symbol,
    is_regexp: is_regexp
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(3);
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
        return 'nan';
    }

    if (T.is_array(value)) {
        return 'array';
    }

    if (T.is_null(value)) {
        return 'null';
    }

    if (T.is_regexp(value)) {
        return 'regexp';
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

    if (T.is_string(iteratableObject) || T.is_array(iteratableObject) || T.is_function(iteratableObject)) {
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
function random_string() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

    var possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^*()-+_';
    var generatedString = '';
    var possibleCharactersCount = possibleCharacters.length - 1;
    var index = 0;

    for (index; index < length; index++) {
        generatedString += possibleCharacters.charAt(random_number(possibleCharactersCount));
    }

    return generatedString;
}

module.exports = {
    random_number: random_number,
    to_array: to_array,
    in_array: in_array,
    type: type,
    length: length,
    random_string: random_string
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
/**
 * An Object containing length parameter.
 * @typedef {(array|string)} IteratableObject
 */

/**
 * Undefined is a primitive value used when a variable has not been assigned a value.
 *
 * The type Undefined has exactly one value, called undefined.
 * @typedef {undefined} Undefined
 */

/**
 * Null is a primitive value that represents the null, empty, or nonexistent reference.
 *
 * The type Null has exactly one value, called null.
 * @typedef {null} Null
 */

/**
 * The type Boolean represents a logical entity and consists of exactly two unique values. One is called true and the
 * other is called false.
 *
 * @typedef {boolean} Boolean
 */

/**
 * The type String is the set of all finite ordered sequences of zero or more Unicode characters.
 *
 * @typedef {string} String
 */

/**
 * The type Number is a set of values representing numbers. In ECMAScript the set of values represent the
 * doubleprecision 64-bit format IEEE 754 value along with a special “Not-a-Number” (NaN) value,
 * positive infinity, and negative infinity.
 *
 * @typedef {number} Number
 */

/**
 * The primitive value NaN represents the set of IEEE Standard “Not-a-Number” values.
 *
 * @typedef {NaN} NaN
 */

/**
 * The primitive value Infinity represents the positive infinite number value.
 *
 * @typedef {Infinity} Infinity
 */


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);
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
 * @param {String} key
 * @param {Object} object
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


var A = __webpack_require__(4);
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


var A = __webpack_require__(4);

var _require = __webpack_require__(0),
    is_function = _require.is_function;

var U = __webpack_require__(1);

var _require2 = __webpack_require__(2),
    throwFunctionTypeError = _require2.throwFunctionTypeError;

/**
 * A collection of FP style functions.
 * @module Function
 */

/**
 * Wraps a function call of any arity to ensure that only one argument is accepted.
 *
 * At first sign unary function seems useless, but here's the pitfall example
 * that can be prevented using unary function.
 *
 * @param {Function} fn The function to wrap.
 * @returns {Function} A new function wrapping `fn`. The new function is guaranteed to be of arity 1.
 * @throws {TypeError}
 * @example
 * // Failing example without using unary function.
 * const strNumbers = ["1", "2", "3"];
 * const numbers = strNumbers.map(parseInt);
 *
 * console.log(numbers); // => [1, NaN, NaN]
 * @example
 * // Passing example using unary function.
 * const strNumbers = ["1", "2", "3"];
 * const numbers = strNumbers.map(unary(parseInt));
 *
 * console.log(numbers); // => [1, 2, 3]
 */


function unary(fn) {
    if (is_function(fn)) {
        return function takeArgument(arg) {
            return fn.call(this, arg);
        };
    }

    throwFunctionTypeError(fn);
}

/**
 * Function that takes one argument and does nothing but return the value untouched.
 *
 * @param {*} value Value to be returned.
 * @returns {*} Returns passed value.
 * @example
 * identity(10); // => 10
 * identity(undefined); // => undefined
 */
function identity(value) {
    return value;
}

/**
 * Currying refers to the process of transforming a function with multiple arity
 * into the same function with less arity.
 *
 * The curried effect is achieved by binding some of the arguments to the first function invoke,
 * so that those values are fixed for the next invocation.
 *
 * @param {Function} fn The function to curry.
 * @return {Function} Curried function.
 * @throws {TypeError}
 * @see {@link https://en.wikipedia.org/wiki/Currying|Currying}
 * @example
 * const sum = (a, b, c) => a + b + c;
 * const sumBy5 = curry(sum, 5);
 * const sumBy8 = curry(sum)(2)(6);
 *
 * sumBy5(3, 5); // => 13
 * sumBy8(6); // => 14
 */
function curry(fn) {
    if (!is_function(fn)) throwFunctionTypeError(fn);

    var arity = fn.length;

    return function takeArguments(initialArguments) {
        return function takeCurriedArguments() {
            var allArguments = initialArguments.concat(U.to_array(arguments));
            return U.length(allArguments) >= arity ? fn.apply(this, allArguments) : takeArguments(allArguments);
        };
    }(A.array_rest(U.to_array(arguments)));
}

/**
 * The process of applying a function to some of its arguments. The partially applied function gets returned for later * use. In other words, a function that takes a function with multiple parameters and returns a function with fewer
 * parameters.
 *
 * @param {Function} fn
 * @param {Arguments} args arguments to apply.
 * @return {Function} Function that takes rest of the arguments.
 * @example
 * const multiply = (a, b) => a * b;
 * const double = partial(multiply, 2);
 *
 * double(5); // => 10
 */
function partial(fn) {
    if (!is_function(fn)) {
        throwFunctionTypeError(fn);
    }

    var firstArguments = A.array_rest(U.to_array(arguments));

    return function takeRestOfTheArguments() {
        return fn.apply(this, firstArguments.concat(U.to_array(arguments)));
    };
}

/**
 * Function composition is the process of combining two or more functions
 * to produce new function.
 *
 * Composed function take data and process it through all pipes from right to left
 * producing new data. (f o g) => f(g(o));
 *
 * @param {Functions} - List of functions to compose.
 * @return {Function} - Function that expect a value to compute.
 * @see {@link https://en.wikipedia.org/wiki/Function_composition_(computer_science)|Function composition}
 * @example
 * const greet = name => `Hello ${name}`;
 * const greetName = compose(greet, string_capitalize);
 *
 * greetName('stefan'); // => Hello Stefan
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
 * Pipe perform function composition like compose.
 *
 * The only difference between pipe and compose if that pipe takes function arguments from left to right,
 * and by that provides additional readability.
 *
 * @param {Functions} - List of functions to compose.
 * @return {Function} - Function that expect a value to compute.
 * @see {@link https://en.wikipedia.org/wiki/Function_composition_(computer_science)|Function composition}
 * @example
 * const greet = name => `Hello ${name}`;
 * const greetName = compose(string_capitalize, greet);
 *
 * greetName('stefan'); // => Hello Stefan
 */
function pipe() {
    var functions = arguments;
    var index = -1;
    return function composeValue(value) {
        index++;
        return index < functions.length ? composeValue(functions[index](value)) : value;
    };
}

/**
 * Creates a version of the function that can only be called one time.
 *
 * @param {Function} fn
 * @return {Function}
 * @example
 * function returnMyName() {
 *      return "Stefan Lazarevic";
 * }
 *
 * const callMyNameOnce = once(returnMyName);
 * callMyNameOnce() // => "Stefan Lazarevic"
 * callMyNameOnce() // => undefined
 */
function once(fn) {
    if (is_function(fn)) {
        var done = false;
        return function () {
            return done ? void 0 : (done = true, fn.apply(this, arguments));
        };
    }

    throwFunctionTypeError(fn);
}

/**
 *
 * @param {Function} fn Function to memoize.
 * @returns {Function} Memoized function.
 */
function memoize(fn) {
    var cache = {};
    return function takeArguments() {
        var args = U.to_array(arguments);
        if (args in cache) {
            return cache[args];
        }

        return cache[args] = fn.apply(this, args);
    };
}

module.exports = {
    unary: unary,
    identity: identity,
    curry: curry,
    partial: partial,
    compose: compose,
    pipe: pipe,
    once: once,
    memoize: memoize
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
        return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
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

/**
 * Returns a string equal in length to the length of the result of converting this object to a string.
 * The result is a string value, not a String object.
 *
 * @param {String} str String to transform.
 * @returns {String} Uppercased string.
 */
function string_uppercase(str) {
    if (T.is_string(str)) {
        return str.toUpperCase();
    }

    E.throwStringTypeError(str);
}

/**
 * Returns a string equal in length to the length of the result of converting this object to a string.
 * The result is a string value, not a String object.
 *
 * @param {String} str String to transform.
 * @returns {String} Lowercased string.
 */
function string_lowercase(str) {
    if (T.is_string(str)) {
        return str.toLowerCase();
    }

    E.throwStringTypeError(str);
}

module.exports = {
    string_trim: string_trim,
    string_capitalize: string_capitalize,
    string_pattern: string_pattern,
    string_uppercase: string_uppercase,
    string_lowercase: string_lowercase
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTc4OTFkMDQ4NzUwYjNlMTZiMDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3R5cGVzL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsaXR5L3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Vycm9ycy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2pzZG9jcy9qc2RvY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FycmF5L2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vYmplY3Qvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZnVuY3Rpb24vZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0cmluZy9zdHJpbmcuanMiXSwibmFtZXMiOlsiaXNfYXJyYXkiLCJ2YWx1ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImlzX29iamVjdCIsImlzX3N0cmluZyIsImlzX251bWJlciIsImlzX05hTiIsImlzX2Jvb2xlYW4iLCJpc19mdW5jdGlvbiIsImlzX251bGwiLCJpc191bmRlZmluZWQiLCJpc19kZWZpbmVkIiwiaXNfZGF0ZSIsImlzX2pzb24iLCJKU09OIiwicGFyc2UiLCJlcnIiLCJpc19zeW1ib2wiLCJpc19yZWdleHAiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIlQiLCJyYW5kb21fbnVtYmVyIiwibWluIiwibWF4IiwiX21pbiIsIl9tYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b19hcnJheSIsIml0ZXJhdGFibGVPYmplY3QiLCJBcnJheSIsInNsaWNlIiwiaW5fYXJyYXkiLCJhcnJheSIsIkJvb2xlYW4iLCJpbmRleE9mIiwidHlwZSIsImxlbmd0aCIsImtleXMiLCJyYW5kb21fc3RyaW5nIiwicG9zc2libGVDaGFyYWN0ZXJzIiwiZ2VuZXJhdGVkU3RyaW5nIiwicG9zc2libGVDaGFyYWN0ZXJzQ291bnQiLCJpbmRleCIsImNoYXJBdCIsInRocm93VHlwZUVycm9yIiwiZXhwZWN0ZWRUeXBlIiwiVHlwZUVycm9yIiwidGhyb3dTdHJpbmdUeXBlRXJyb3IiLCJ0aHJvd0Z1bmN0aW9uVHlwZUVycm9yIiwidGhyb3dPYmplY3RUeXBlRXJyb3IiLCJVIiwib2JqZWN0X3BsdWNrIiwiYXJyYXlfZmlyc3QiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXJnMCIsImFyZzEiLCJudW1iZXJPZkFyZ3VtZW50cyIsImNvbmNhdCIsIl9hcnJheSIsImFycmF5X2luaXRpYWwiLCJ0YWtlQXJyYXkiLCJhcnJheV9sYXN0IiwiYXJyYXlfcmVzdCIsImFycmF5X2NvbXBhY3QiLCJmaWx0ZXIiLCJjaGVja0lmRmFsc3kiLCJlbGVtZW50IiwiYXJyYXlfZmxhdHRlbiIsInJlZHVjZSIsImFjYyIsImFycmF5X3dpdGhvdXQiLCJyZXN0IiwiYXJyYXlfdW5pcXVlIiwiY2hlY2tQb3NpdGlvbiIsImFycmF5X3VuaW9uIiwiYXJyYXlfaW50ZXJzZWN0aW9uIiwiYXJyYXlzIiwibWFpbkFycmF5IiwiaW50ZXJzZWN0aW9uIiwiZmlyc3QiLCJpIiwiaiIsInB1c2giLCJhcnJheV9zaHVmZmxlIiwidGVtcCIsInJhbmRvbUluZGV4IiwiYXJyYXlDbG9uZSIsImFycmF5TGVuZ3RoIiwiYXJyYXlfcGx1Y2siLCJrZXkiLCJfY29tcHV0ZVBsdWNraW5nIiwicGx1Y2tlZEFycmF5IiwibnVtYmVyT2ZJdGVtcyIsImFycmF5X3B1c2giLCJhcnJheV9wb3AiLCJhcnJheV91bnNoaWZ0IiwiYXJyYXlfc2hpZnQiLCJhcnJheV9yZXZlcnNlIiwibnVtYmVyT2ZFbGVtZW50cyIsIm1hcCIsIm1hcEVsZW1lbnRSZXZlcnNlZCIsIkUiLCJvYmplY3QiLCJnZXRPYmplY3QiLCJfb2JqZWN0IiwiX2RlZXBBY2Nlc3NQbHVjayIsInNwbGl0IiwiY2hlY2tFeGlzdGVuY2UiLCJkZWVwT2JqZWN0Iiwib2JqZWN0X2tleXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdF92YWx1ZXMiLCJ2YWx1ZXMiLCJvYmplY3RfaW52ZXJ0IiwiaW52ZXJ0ZWRPYmplY3QiLCJBIiwiRCIsIkYiLCJPIiwiUyIsIndpbmRvdyIsInVuYXJ5IiwiZm4iLCJ0YWtlQXJndW1lbnQiLCJhcmciLCJpZGVudGl0eSIsImN1cnJ5IiwiYXJpdHkiLCJ0YWtlQXJndW1lbnRzIiwiaW5pdGlhbEFyZ3VtZW50cyIsInRha2VDdXJyaWVkQXJndW1lbnRzIiwiYWxsQXJndW1lbnRzIiwiYXBwbHkiLCJwYXJ0aWFsIiwiZmlyc3RBcmd1bWVudHMiLCJ0YWtlUmVzdE9mVGhlQXJndW1lbnRzIiwiY29tcG9zZSIsImZ1bmN0aW9ucyIsImNvbXBvc2VWYWx1ZSIsInBpcGUiLCJvbmNlIiwiZG9uZSIsIm1lbW9pemUiLCJjYWNoZSIsInN0cmluZ190cmltIiwicmVwbGFjZSIsInN0cmluZ19jYXBpdGFsaXplIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsInN0cmluZ19wYXR0ZXJuIiwicGF0dGVybiIsInJlcGxhY2VtZW50IiwicGF0dGVyblRva2VucyIsInRha2VSZXBsYWNlbWVudCIsIl9yZXBsYWNlbWVudCIsIl9mb3JtYXRQYXR0ZXJuIiwieFRva2VuSW5kZXgiLCJwYXR0ZXJuU3RyaW5nIiwidG9rZW4iLCJyZXBsYWNlVmFsdWUiLCJzdHJpbmdfdXBwZXJjYXNlIiwic3RyIiwic3RyaW5nX2xvd2VyY2FzZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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Ozs7OztBQU9BLFNBQVNDLGdCQUFULENBQTBCRCxHQUExQixFQUErQjtBQUMzQixRQUFJaEosRUFBRWxCLFNBQUYsQ0FBWWtLLEdBQVosQ0FBSixFQUFzQjtBQUNsQixlQUFPQSxJQUFJYixXQUFKLEVBQVA7QUFDSDs7QUFFRC9DLE1BQUV2RCxvQkFBRixDQUF1Qm1ILEdBQXZCO0FBQ0g7O0FBRURuSixPQUFPQyxPQUFQLEdBQWlCO0FBQ2JpSSw0QkFEYTtBQUViRSx3Q0FGYTtBQUdiRyxrQ0FIYTtBQUliVyxzQ0FKYTtBQUtiRTtBQUxhLENBQWpCLEMiLCJmaWxlIjoianNlYXN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTc4OTFkMDQ4NzUwYjNlMTZiMDMiLCIvKipcbiAqIEphdmFTY3JpcHQgdHlwZSB2YWxpZGF0aW9ucy5cbiAqIEBtb2R1bGUgVHlwZXNcbiAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBpc19hcnJheShbMSwgMiwgM10pXG4gKiAvLyA9PiB0cnVlXG4gKiBAZXhhbXBsZVxuICogKGZ1bmN0aW9uKCkgeyByZXR1cm4gaXNfYXJyYXkoYXJndW1lbnRzKTsgfSkoKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX2FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogZnVuY3Rpb24gQ29vcmRpbmF0ZSh4ID0gMCwgeSA9IDApIHtcbiAqICAgICB0aGlzLnggPSB4O1xuICogICAgIHRoaXMueSA9IHk7XG4gKiB9XG4gKlxuICogaXNfb2JqZWN0KG5ldyBDb29yZGluYXRlKDEwLCAxNSkpO1xuICogLy8gPT4gdHJ1ZVxuICogQGV4YW1wbGVcbiAqIGlzX29iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICogQGV4YW1wbGVcbiAqIGlzX29iamVjdChbMSwgMiwgM10pXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc19vYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IE9iamVjdCh2YWx1ZSkgJiYgIWlzX2FycmF5KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBzdHJpY3Qgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gc3RyaW5nLCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogaXNfc3RyaW5nKFwiSGVsbG8gV29ybGQhXCIpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc19zdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG51bWJlciwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX251bWJlcigxMClcbiAqIC8vID0+IHRydWVcbiAqIEBleGFtcGxlXG4gKiBpc19udW1iZXIoTmFOKVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNfbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzX05hTih2YWx1ZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYm9vbGVhbi5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBib29sZWFuLCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogaXNfYm9vbGVhbihmYWxzZSlcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNfYm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBmdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX2Z1bmN0aW9uKGlzX2Jvb2xlYW4pXG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBudWxsLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgbnVsbCwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX251bGwobnVsbClcbiAqIC8vID0+IHRydWVcbiAqIEBleGFtcGxlXG4gKiBpc19udWxsKHZvaWQgMClcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX251bGwodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgdmFsdWUgaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogaXNfdW5kZWZpbmVkKHZvaWQgMClcbiAqIC8vID0+IHRydWVcbiAqIEBleGFtcGxlXG4gKiBpc191bmRlZmluZWQobnVsbClcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX3VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdm9pZCAwO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIHZhbHVlIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQsIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBQZXJzb24gPSB7XG4gKiAgICAgYTogMTBcbiAqIH07XG4gKlxuICogaXNfZGVmaW5lZChQZXJzb24uYSk7XG4gKiAvLyA9PiB0cnVlXG4gKiBpc19kZWZpbmVkKFBlcnNvbi5iKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzX2RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzX251bGwodmFsdWUpICYmICFpc191bmRlZmluZWQodmFsdWUpICYmICFpc19OYU4odmFsdWUpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIHZhbHVlIGlzIG5vdCBhIG51bWJlci4gKE5hTilcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIE5hTiwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX05hTigxIC8gJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqIGlzX05hTignYScpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNfTmFOKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBEYXRlIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBEYXRlIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICpcbiAqIGlzX2RhdGUoZGF0ZSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogaXNfZGF0ZShuZXcgRGF0ZSgpLmdldFllYXIoKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc19kYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgdmFsaWQgSlNPTiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBhIHZhbGlkIEpTT04gc3RyaW5nLCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogY29uc3QgYWpheERhdGEgPSB7XG4gKiAgICAgdXJsOiB3d3cubGlua2VkaW4uY29tL2luL3N0ZWZhbi1sYXphcmV2aWNcbiAqIH07XG4gKlxuICogaXNfanNvbihKU09OLnN0cmluZ2lmeShhamF4RGF0YSkpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc19qc29uKFwiSGVsbG8gV29ybGRcIilcbiAqIC8vID0+IGZhbHNlXG4gKiBpc19qc29uKGFqYXhEYXRhKVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNfanNvbih2YWx1ZSkge1xuICAgIGlmIChpc19zdHJpbmcodmFsdWUpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIHZhbGlkIFN5bWJvbC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIHN5bWJvbCwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX3N5bWJvbChTeW1ib2woJ3gnKSlcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNfc3ltYm9sKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIHZhbGlkIFN5bWJvbC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIFJlZ0V4cCwgb3RoZXJ3aXNlIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGlzX3JlZ2V4cCgvYWJjL2cpO1xuICogLy8gPT4gdHJ1ZVxuICogQGV4YW1wbGVcbiAqIGlzX3JlZ2V4cChuZXcgUmVnRXhwKCdhYmMnLCAnZycpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNfcmVnZXhwKHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpc19hcnJheSxcbiAgICBpc19vYmplY3QsXG4gICAgaXNfc3RyaW5nLFxuICAgIGlzX251bWJlcixcbiAgICBpc19ib29sZWFuLFxuICAgIGlzX2Z1bmN0aW9uLFxuICAgIGlzX251bGwsXG4gICAgaXNfdW5kZWZpbmVkLFxuICAgIGlzX2RlZmluZWQsXG4gICAgaXNfTmFOLFxuICAgIGlzX2RhdGUsXG4gICAgaXNfanNvbixcbiAgICBpc19zeW1ib2wsXG4gICAgaXNfcmVnZXhwXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3R5cGVzL3R5cGVzLmpzIiwicmVxdWlyZSgnLi4vanNkb2NzL2pzZG9jcycpO1xuY29uc3QgVCA9IHJlcXVpcmUoJy4uL3R5cGVzL3R5cGVzJyk7XG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBVdGlsaXR5IGZ1bmN0aW9ucy5cbiAqIDxzY3JpcHQgc3JjPVwic2NyaXB0cy9qc2Vhc3kubWluLmpzXCI+PC9zY3JpcHQ+XG4gKiBAbW9kdWxlIFV0aWxpdHlcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LiAoaW5jbHVzaXZlKVxuICogSWYgeW91IG9ubHkgcGFzcyBvbmUgYXJndW1lbnQsIGl0IHdpbGwgcmV0dXJuIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgdGhhdCBudW1iZXIuXG4gKiBCeSBkZWZhdWx0IHJhbmRvbSBudW1iZXIgcmFuZ2UgaXMgYmV0d2VlbiAwIGFuZCAxMDAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IFttaW4gPSAwXSBBIG1pbmltdW0gcG9zaWJsZSBudW1iZXIgZ2VuZXJhdGVkLlxuICogQHBhcmFtIHtOdW1iZXJ9IFttYXggPSAxMDBdIEEgbWF4aW11bSBwb3NpYmxlIG51bWJlciBnZW5lcmF0ZWQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIHRoZSByYW5kb20gbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqIHJhbmRvbV9udW1iZXIoKVxuICogLy8gPT4gcmV0dXJucyBhbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMTAwXG4gKiBAZXhhbXBsZVxuICogcmFuZG9tX251bWJlcig1MClcbiAqIC8vID0+IHJldHVybnMgYW4gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDUwXG4gKiBAZXhhbXBsZVxuICogcmFuZG9tX251bWJlcig1MCwgMjAwKVxuICogLy8gPT4gcmV0dXJucyBhbiBpbnRlZ2VyIGJldHdlZW4gNTAgYW5kIDIwMFxuICovXG5mdW5jdGlvbiByYW5kb21fbnVtYmVyKG1pbiwgbWF4KSB7XG4gICAgbGV0IF9taW4gPSAwLCBfbWF4ID0gMTAwO1xuXG4gICAgaWYgKFQuaXNfbnVtYmVyKG1pbikgJiYgIVQuaXNfZGVmaW5lZChtYXgpKSB7XG4gICAgICAgIF9taW4gPSAwO1xuICAgICAgICBfbWF4ID0gbWluO1xuICAgIH1cblxuICAgIGlmIChULmlzX251bWJlcihtaW4pICYmIFQuaXNfbnVtYmVyKG1heCkpIHtcbiAgICAgICAgX21pbiA9IG1pbjtcbiAgICAgICAgX21heCA9IG1heDtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIChfbWF4IC0gX21pbiArIDEpKSArIF9taW4pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWFsIEFycmF5IGZyb20gdGhlIGxpc3QgKGFueXRoaW5nIHRoYXQgY2FuIGJlIGl0ZXJhdGVkIG92ZXIpLlxuICogVXNlZnVsIGZvciB0cmFuc211dGluZyB0aGUgYXJndW1lbnRzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhdGFibGVPYmplY3R9IGl0ZXJhdGFibGVPYmplY3QgQW4gb2JqZWN0IHRoYXQgaGFzIGxlbmd0aCBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgY29udGFpbmluZyBhbGwgdmFsdWVzIGZyb20gYW4gSXRlcmF0YWJsZU9iamVjdC5cbiAqIEBleGFtcGxlXG4gKiB0b19hcnJheSh7MDogMTAsIDE6IDIwLCBsZW5ndGg6IDJ9KVxuICogLy8gPT4gWzEwLCAyMF1cbiAqIEBleGFtcGxlXG4gKiB0b19hcnJheShcIndvcmRcIilcbiAqIC8vID0+IFtcIndcIiwgXCJvXCIsIFwiclwiLCBcImRcIl1cbiAqL1xuZnVuY3Rpb24gdG9fYXJyYXkoaXRlcmF0YWJsZU9iamVjdCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYXRhYmxlT2JqZWN0KTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGNvbGxlY3Rpb24gY29udGFpbiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBDb2xsZWN0aW9uIGluIHdoaWNoIHRoZSB2YWx1ZSBpcyBzZWFyY2hlZC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgU2VhcmNoZWQgdmFsdWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1dGhmdWxuZXNzIG9mIHRoZSBjb250ZW50cy5cbiAqIEBleGFtcGxlXG4gKiBpbl9hcnJheShbMSwgMiwgMywgNF0sIDMpXG4gKiAvLyA9PiB0cnVlXG4gKiBAZXhhbXBsZVxuICogaW5fYXJyYXkoWzIsIDQsIDUsIDIsIDFdLCA2KVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaW5fYXJyYXkoYXJyYXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gQm9vbGVhbih+YXJyYXkuaW5kZXhPZih2YWx1ZSkpIDogZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJuIHR5cGUgb2YgcHJvdmlkZWQgdmFsdWUuXG4gKiBQcmV2ZW50IHBpdGZhbGwgdHlwZXMgc3VjaCBhcyBOYU4sIG51bGwsIFtdXG4gKlxuICogQHBhcmFtIHttaXh9IFt2YWx1ZSA9ICd1bmRlZmluZWQnXSBDaGVja2VkIHZhbHVlLlxuICogQHJldHVybnMge1N0cmluZ30gQSB0eXBlIG9mIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqIHR5cGUobnVsbClcbiAqIC8vID0+ICdudWxsJ1xuICogQGV4YW1wbGVcbiAqIHR5cGUoWzEsIDIsIDNdKVxuICogLy8gPT4gJ2FycmF5J1xuICogQGV4YW1wbGVcbiAqIHR5cGUoTmFOKVxuICogLy8gPT4gJ05hTlxuICovXG5mdW5jdGlvbiB0eXBlKHZhbHVlKSB7XG4gICAgaWYgKFQuaXNfTmFOKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ25hbic7XG4gICAgfVxuXG4gICAgaWYgKFQuaXNfYXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cblxuICAgIGlmIChULmlzX251bGwodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuXG4gICAgaWYgKFQuaXNfcmVnZXhwKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBHZXQgbGVuZ3RoIG9mIGxpc3QsIG51bWJlciBvZiBwcm9wZXJ0aWVzIGluIG9iamVjdCBvciBudW1iZXIgb2YgY2hhcmFjdGVycyBpbiBzdHJpbmcuXG4gKiBEZWZhdWx0IHJldHVybiB2YWx1ZSB3aWxsIGJlIDAuXG4gKlxuICogQHBhcmFtIHtJdGVyYXRhYmxlT2JqZWN0fSBpdGVyYXRhYmxlT2JqZWN0IEFuIG9iamVjdCB0aGF0IGhhcyBsZW5ndGggcHJvcGVydHkuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBTaXplIG9mIGFuIGl0ZXJhdGFibGVPYmplY3RcbiAqIEBleGFtcGxlXG4gKiBsZW5ndGgoWzEsIDIsIDMsIDRdKVxuICogLy8gPT4gNFxuICogQGV4YW1wbGVcbiAqIGxlbmd0aCh7YTogMTAsIGI6IDE1fSlcbiAqIC8vID0+IDJcbiAqIEBleGFtcGxlXG4gKiBsZW5ndGgoXCJhYmNkZWZnXCIpXG4gKiAvLyA9PiA3XG4gKi9cbmZ1bmN0aW9uIGxlbmd0aChpdGVyYXRhYmxlT2JqZWN0KSB7XG5cbiAgICBpZiAoIVQuaXNfZGVmaW5lZChpdGVyYXRhYmxlT2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoVC5pc19vYmplY3QoaXRlcmF0YWJsZU9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGl0ZXJhdGFibGVPYmplY3QpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAoVC5pc19zdHJpbmcoaXRlcmF0YWJsZU9iamVjdCkgfHwgVC5pc19hcnJheShpdGVyYXRhYmxlT2JqZWN0KSB8fCBULmlzX2Z1bmN0aW9uKGl0ZXJhdGFibGVPYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRhYmxlT2JqZWN0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nIG4gY2hhcmFjdGVycyBsb25nLiBJZiBzdHJpbmcgbGVuZ3RoIGlzIG5vdCBwcm92aWRlZCBkZWZhdWx0IHN0cmluZyBsZW5ndGggd2lsbCBiZSAyMC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gW2xlbmd0aCA9IDIwXSBTdHJpbmcgbGVuZ3RoLlxuICogQHJldHVybnMge1N0cmluZ30gR2VuZXJhdGVkIHN0cmluZyBvZiBuIGNoYXJhY3RlcnMuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbV9zdHJpbmcobGVuZ3RoID0gMjApIHtcbiAgICBjb25zdCBwb3NzaWJsZUNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkhQCQlXiooKS0rXyc7XG4gICAgbGV0IGdlbmVyYXRlZFN0cmluZyA9ICcnO1xuICAgIGNvbnN0IHBvc3NpYmxlQ2hhcmFjdGVyc0NvdW50ID0gcG9zc2libGVDaGFyYWN0ZXJzLmxlbmd0aCAtIDE7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoaW5kZXg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGdlbmVyYXRlZFN0cmluZyArPSBwb3NzaWJsZUNoYXJhY3RlcnMuY2hhckF0KHJhbmRvbV9udW1iZXIocG9zc2libGVDaGFyYWN0ZXJzQ291bnQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2VuZXJhdGVkU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICByYW5kb21fbnVtYmVyLFxuICAgIHRvX2FycmF5LFxuICAgIGluX2FycmF5LFxuICAgIHR5cGUsXG4gICAgbGVuZ3RoLFxuICAgIHJhbmRvbV9zdHJpbmcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxpdHkvdXRpbGl0eS5qcyIsImNvbnN0IHsgdHlwZSB9ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS91dGlsaXR5Jyk7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGVycm9yIHRocm93aW5nIGZ1bmN0aW9ucy5cbiAqIEBtb2R1bGUgRXJyb3JcbiAqL1xuXG4vKipcbiAqIFRocm93IG5ldyBUeXBlRXJyb3Igd2l0aCBpbnZhbGlkIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cGVjdGVkXG4gKiBAcGFyYW0geyp9IGFjdHVhbFxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICovXG5mdW5jdGlvbiB0aHJvd1R5cGVFcnJvcihleHBlY3RlZFR5cGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlKGV4cGVjdGVkVHlwZSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93VHlwZUVycm9yKCdzdHJpbmcnLCBleHBlY3RlZFR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCAnJHtleHBlY3RlZFR5cGV9JyBidXQgaW5zdGVhZCByZWNlaXZlZCAnJHt0eXBlKHZhbHVlKX0nLmApO1xuICAgIH07XG59XG5cbi8qKlxuICogQ29tcG9zZWQgdGhyb3dUeXBlRXJyb3IgZnVuY3Rpb24uXG4gKiBUaHJvdyBlcnJvciB3aXRoIHN0cmluZyB0eXBlIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICovXG5jb25zdCB0aHJvd1N0cmluZ1R5cGVFcnJvciA9IHRocm93VHlwZUVycm9yKCdzdHJpbmcnKTtcblxuLyoqXG4gKiBDb21wb3NlZCB0aHJvd1R5cGVFcnJvciBmdW5jdGlvbi5cbiAqIFRocm93IGVycm9yIHdpdGggZnVuY3Rpb24gdHlwZSBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqL1xuY29uc3QgdGhyb3dGdW5jdGlvblR5cGVFcnJvciA9IHRocm93VHlwZUVycm9yKCdmdW5jdGlvbicpO1xuXG4vKipcbiAqIENvbXBvc2VkIHRocm93VHlwZUVycm9yIGZ1bmN0aW9uLlxuICogVGhyb3cgZXJyb3Igd2l0aCBvYmplY3QgdHlwZSBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqL1xuY29uc3QgdGhyb3dPYmplY3RUeXBlRXJyb3IgPSB0aHJvd1R5cGVFcnJvcignb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRocm93VHlwZUVycm9yLFxuICAgIHRocm93U3RyaW5nVHlwZUVycm9yLFxuICAgIHRocm93RnVuY3Rpb25UeXBlRXJyb3IsXG4gICAgdGhyb3dPYmplY3RUeXBlRXJyb3Jcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvZXJyb3JzL2Vycm9ycy5qcyIsIi8qKlxuICogQW4gT2JqZWN0IGNvbnRhaW5pbmcgbGVuZ3RoIHBhcmFtZXRlci5cbiAqIEB0eXBlZGVmIHsoYXJyYXl8c3RyaW5nKX0gSXRlcmF0YWJsZU9iamVjdFxuICovXG5cbi8qKlxuICogVW5kZWZpbmVkIGlzIGEgcHJpbWl0aXZlIHZhbHVlIHVzZWQgd2hlbiBhIHZhcmlhYmxlIGhhcyBub3QgYmVlbiBhc3NpZ25lZCBhIHZhbHVlLlxuICpcbiAqIFRoZSB0eXBlIFVuZGVmaW5lZCBoYXMgZXhhY3RseSBvbmUgdmFsdWUsIGNhbGxlZCB1bmRlZmluZWQuXG4gKiBAdHlwZWRlZiB7dW5kZWZpbmVkfSBVbmRlZmluZWRcbiAqL1xuXG4vKipcbiAqIE51bGwgaXMgYSBwcmltaXRpdmUgdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoZSBudWxsLCBlbXB0eSwgb3Igbm9uZXhpc3RlbnQgcmVmZXJlbmNlLlxuICpcbiAqIFRoZSB0eXBlIE51bGwgaGFzIGV4YWN0bHkgb25lIHZhbHVlLCBjYWxsZWQgbnVsbC5cbiAqIEB0eXBlZGVmIHtudWxsfSBOdWxsXG4gKi9cblxuLyoqXG4gKiBUaGUgdHlwZSBCb29sZWFuIHJlcHJlc2VudHMgYSBsb2dpY2FsIGVudGl0eSBhbmQgY29uc2lzdHMgb2YgZXhhY3RseSB0d28gdW5pcXVlIHZhbHVlcy4gT25lIGlzIGNhbGxlZCB0cnVlIGFuZCB0aGVcbiAqIG90aGVyIGlzIGNhbGxlZCBmYWxzZS5cbiAqXG4gKiBAdHlwZWRlZiB7Ym9vbGVhbn0gQm9vbGVhblxuICovXG5cbi8qKlxuICogVGhlIHR5cGUgU3RyaW5nIGlzIHRoZSBzZXQgb2YgYWxsIGZpbml0ZSBvcmRlcmVkIHNlcXVlbmNlcyBvZiB6ZXJvIG9yIG1vcmUgVW5pY29kZSBjaGFyYWN0ZXJzLlxuICpcbiAqIEB0eXBlZGVmIHtzdHJpbmd9IFN0cmluZ1xuICovXG5cbi8qKlxuICogVGhlIHR5cGUgTnVtYmVyIGlzIGEgc2V0IG9mIHZhbHVlcyByZXByZXNlbnRpbmcgbnVtYmVycy4gSW4gRUNNQVNjcmlwdCB0aGUgc2V0IG9mIHZhbHVlcyByZXByZXNlbnQgdGhlXG4gKiBkb3VibGVwcmVjaXNpb24gNjQtYml0IGZvcm1hdCBJRUVFIDc1NCB2YWx1ZSBhbG9uZyB3aXRoIGEgc3BlY2lhbCDigJxOb3QtYS1OdW1iZXLigJ0gKE5hTikgdmFsdWUsXG4gKiBwb3NpdGl2ZSBpbmZpbml0eSwgYW5kIG5lZ2F0aXZlIGluZmluaXR5LlxuICpcbiAqIEB0eXBlZGVmIHtudW1iZXJ9IE51bWJlclxuICovXG5cbi8qKlxuICogVGhlIHByaW1pdGl2ZSB2YWx1ZSBOYU4gcmVwcmVzZW50cyB0aGUgc2V0IG9mIElFRUUgU3RhbmRhcmQg4oCcTm90LWEtTnVtYmVy4oCdIHZhbHVlcy5cbiAqXG4gKiBAdHlwZWRlZiB7TmFOfSBOYU5cbiAqL1xuXG4vKipcbiAqIFRoZSBwcmltaXRpdmUgdmFsdWUgSW5maW5pdHkgcmVwcmVzZW50cyB0aGUgcG9zaXRpdmUgaW5maW5pdGUgbnVtYmVyIHZhbHVlLlxuICpcbiAqIEB0eXBlZGVmIHtJbmZpbml0eX0gSW5maW5pdHlcbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2pzZG9jcy9qc2RvY3MuanMiLCJyZXF1aXJlKCcuLi9qc2RvY3MvanNkb2NzJyk7XG5jb25zdCBUID0gcmVxdWlyZSgnLi4vdHlwZXMvdHlwZXMnKTtcbmNvbnN0IFUgPSByZXF1aXJlKCcuLi91dGlsaXR5L3V0aWxpdHknKTtcbmNvbnN0IHsgb2JqZWN0X3BsdWNrIH0gPSByZXF1aXJlKCcuLi9vYmplY3Qvb2JqZWN0Jyk7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGFycmF5IG1hbmlwdWxhdGluZyBmdW5jdGlvbnMuXG4gKiBAbW9kdWxlIEFycmF5XG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IGVsZW1lbnQgZnJvbSB0aGUgbGlzdC5cbiAqIEJ5IHByb3ZpZGluZyBudW1iZXIgKG4pIGFzIGEgZmlyc3QgYXJndW1lbnQsXG4gKiByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGUgZmlyc3QgbiBlbGVtZW50cyBmcm9tIGEgbGlzdC5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkFycmF5XG4gKiBAcGFyYW0ge051bWJlcnxBcnJheX0gbiBOdW1iZXIgb2YgZmlyc3QgdmFsdWVzIHRvIGdldCwgb3IgYXJyYXkuXG4gKiBAcGFyYW0ge0FycmF5fEJvb2xlYW59IFthcnJdIFRoZSBhcnJheSB0byBwcm9jZXNzLCBvciBhcnJheSBjb252ZXJ0IGZsYWcuXG4gKiBAcmV0dXJucyB7bWl4fEFycmF5fSBSZXR1cm5zIGZpcnN0IHZhbHVlIGZyb20gYXJyYXkgb3IgdGhlIG5ldyBhcnJheSBjb250YWluaW5nIG4gdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X2ZpcnN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAxXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfZmlyc3QoWzEsIDIsIDNdLCB0cnVlKTtcbiAqIC8vID0+IFsxXVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2ZpcnN0KDIsIFsxLCAyLCAzLCA0XSk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9maXJzdCgyKShbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIGFycmF5X2ZpcnN0KCkge1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY29uc3QgYXJnMCA9IGFyZ3NbMF07IC8vIEV4cGVjdGluZyBudW1iZXIgb3IgYXJyYXkuXG4gICAgY29uc3QgYXJnMSA9IGFyZ3NbMV07IC8vIEV4cGVjdGluZyBhcnJheSBvciBib29sZWFuIG9yIG5vdGhpbmcuXG5cbiAgICBjb25zdCBudW1iZXJPZkFyZ3VtZW50cyA9IFUubGVuZ3RoKGFyZ3MpO1xuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAyICYmIFQuaXNfbnVtYmVyKGFyZzApICYmIFQuaXNfYXJyYXkoYXJnMSkpIHtcbiAgICAgICAgcmV0dXJuIGFyZzEuc2xpY2UoMCwgYXJnMCk7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAyICYmIFQuaXNfYXJyYXkoYXJnMCkgJiYgVC5pc19ib29sZWFuKGFyZzEpKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoYXJnMFswXSk7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAxKSB7XG4gICAgICAgIGlmIChULmlzX2FycmF5KGFyZzApKSB7XG4gICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoYXJnMCkgPyBhcmcwWzBdIDogW107XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoVC5pc19udW1iZXIoYXJnMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoX2FycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKFQuaXNfYXJyYXkoX2FycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoX2FycmF5KSA/IF9hcnJheS5zbGljZSgwLCBhcmcwKSA6IFtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG5cbi8qKlxuICogUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuXG4gKiBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC5cbiAqIFBhc3MgbiB0byBleGNsdWRlIHRoZSBsYXN0IG4gZWxlbWVudHMgZnJvbSB0aGUgcmVzdWx0LlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6QXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfEFycmF5fSBuIE51bWJlciBvZiBsYXN0IHZhbHVlcyB0byBleGNsdWRlLCBvciBhcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgY29udGFpbmluZyBpbml0aWFsIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9pbml0aWFsKFs1LCA0LCAzLCAyLCAxXSk7XG4gKiAvLyA9PiBbNSwgNCwgMywgMl1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9pbml0aWFsKDIsIFs1LCA0LCAzLCAyLCAxXSk7XG4gKiAvLyA9PiBbNSwgNCwgM11cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9pbml0aWFsKDMpKFs1LCA0LCAzLCAyLCAxXSk7XG4gKiAvLyA9PiBbNSwgNF1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfaW5pdGlhbCgpIHtcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNvbnN0IGFyZzAgPSBhcmdzWzBdOyAvLyBFeHBlY3RpbmcgbnVtYmVyIG9yIGFycmF5LlxuICAgIGNvbnN0IGFyZzEgPSBhcmdzWzFdOyAvLyBFeHBlY3RpbmcgYXJyYXkgb3Igbm90aGluZy5cblxuICAgIGNvbnN0IG51bWJlck9mQXJndW1lbnRzID0gVS5sZW5ndGgoYXJncyk7XG5cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDIgJiYgVC5pc19udW1iZXIoYXJnMCkgJiYgVC5pc19hcnJheShhcmcxKSkge1xuICAgICAgICByZXR1cm4gYXJnMCA+IDAgPyBhcmcxLnNsaWNlKDAsIC1hcmcwKSA6IGFyZzEuc2xpY2UoMCwgLTEpO1xuICAgIH1cblxuICAgIGlmIChudW1iZXJPZkFyZ3VtZW50cyA9PT0gMSkge1xuICAgICAgICBpZiAoVC5pc19hcnJheShhcmcwKSkge1xuICAgICAgICAgICAgcmV0dXJuIFUubGVuZ3RoKGFyZzApID8gYXJnMC5zbGljZSgwLCAtMSkgOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmIChULmlzX251bWJlcihhcmcwKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VBcnJheShfYXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoX2FycmF5KSA/IF9hcnJheS5zbGljZSgwLCAtYXJnMCkgOiBbXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LlxuICogUGFzc2luZyBuIHdpbGwgcmV0dXJuIHRoZSBsYXN0IG4gZWxlbWVudHMgb2YgdGhlIGFycmF5LlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6QXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfEFycmF5fSBuIE51bWJlciBvZiBmaXJzdCBlbGVtZW50cyB0byBleGNsdWRlIG9yIEFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0ge0FycmF5fEJvb2xlYW59IGEgQXJyYXkgdG8gcHJvY2VzcyBvciBhcnJheSBjb252ZXJ0IGZsYWcuXG4gKiBAcmV0dXJuIHttaXh8QXJyYXl9IFJldHVybnMgbGFzdCB2YWx1ZSBvciB0aGUgbmV3IGFycmF5IGNvbnRhaW5pbmcgbGFzdCB2YWx1ZShzKVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2xhc3QoWzUsIDQsIDMsIDIsIDFdKTtcbiAqIC8vID0+IDFcbiAqIEBleGFtcGxlXG4gKiBhcnJheV9sYXN0KFs1LCA0LCAzLCAyLCAxXSwgdHJ1ZSk7XG4gKiAvLyA9PiBbMV1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9sYXN0KDIsIFs1LCA0LCAzLCAyLCAxXSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9sYXN0KDIpKFs1LCA0LCAzLCAyLCAxXSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfbGFzdCgpIHtcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNvbnN0IGFyZzAgPSBhcmdzWzBdOyAvLyBFeHBlY3RpbmcgbnVtYmVyIG9yIGFycmF5LlxuICAgIGNvbnN0IGFyZzEgPSBhcmdzWzFdOyAvLyBFeHBlY3RpbmcgYXJyYXkgb3Igbm90aGluZy5cblxuICAgIGNvbnN0IG51bWJlck9mQXJndW1lbnRzID0gVS5sZW5ndGgoYXJncyk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChudW1iZXJPZkFyZ3VtZW50cyA9PT0gMiAmJiBULmlzX251bWJlcihhcmcwKSAmJiBULmlzX2FycmF5KGFyZzEpKSB7XG4gICAgICAgIHJldHVybiBVLmxlbmd0aChhcmcxKSA/IGFyZzEuc2xpY2UoLWFyZzApIDogW107XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDIgJiYgVC5pc19hcnJheShhcmcwKSAmJiBULmlzX2Jvb2xlYW4oYXJnMSkpIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChhcmcwW1UubGVuZ3RoKGFyZzApIC0gMV0pO1xuICAgIH1cblxuICAgIGlmIChudW1iZXJPZkFyZ3VtZW50cyA9PT0gMSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoVC5pc19hcnJheShhcmcwKSkge1xuICAgICAgICAgICAgcmV0dXJuIFUubGVuZ3RoKGFyZzApID8gYXJnMFtVLmxlbmd0aChhcmcwKSAtIDFdIDogW107XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoVC5pc19udW1iZXIoYXJnMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiB0YWtlQXJyYXkoX2FycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFUubGVuZ3RoKF9hcnJheSkgPyBfYXJyYXkuc2xpY2UoLWFyZzApIDogW107XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIGluIGFuIGFycmF5LlxuICogUGFzcyBhbiBpbmRleCB0byByZXR1cm4gdGhlIHZhbHVlcyBvZiB0aGUgYXJyYXkgZnJvbSB0aGF0IGluZGV4IG9ud2FyZC5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkFycmF5XG4gKiBAcGFyYW0ge051bWJlcnxBcnJheX0gTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgb3IgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJdIEFycmF5IHRvIHByb2Nlc3NcbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgY29udGFpbmluZyByZXN0IHZhbHVlc1xuICogQGV4YW1wbGVcbiAqIGFycmF5X3Jlc3QoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IFsyLCAzLCA0XVxuICogYXJyYXlfcmVzdCgyLCBbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gWzMsIDRdXG4gKiBhcnJheV9yZXN0KDIpKFsxLCAyLCAzLCA0XSk7XG4gKiAvLyA9PiBbMywgNF1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfcmVzdCgpIHtcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNvbnN0IGFyZzAgPSBhcmdzWzBdOyAvLyBFeHBlY3RpbmcgbnVtYmVyIG9yIGFycmF5LlxuICAgIGNvbnN0IGFyZzEgPSBhcmdzWzFdOyAvLyBFeHBlY3RpbmcgYXJyYXkgb3Igbm90aGluZy5cblxuICAgIGNvbnN0IG51bWJlck9mQXJndW1lbnRzID0gVS5sZW5ndGgoYXJncyk7XG5cbiAgICBpZiAobnVtYmVyT2ZBcmd1bWVudHMgPT09IDIgJiYgVC5pc19udW1iZXIoYXJnMCkgJiYgVC5pc19hcnJheShhcmcxKSkge1xuICAgICAgICByZXR1cm4gVS5sZW5ndGgoYXJnMSkgPyBhcmcxLnNsaWNlKGFyZzApIDogW107XG4gICAgfVxuXG4gICAgaWYgKG51bWJlck9mQXJndW1lbnRzID09PSAxKSB7XG4gICAgICAgIGlmIChULmlzX2FycmF5KGFyZzApKSB7XG4gICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoYXJnMCkgPyBhcmcwLnNsaWNlKDEpIDogW107XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoVC5pc19udW1iZXIoYXJnMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiB0YWtlQXJyYXkoX2FycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFUubGVuZ3RoKF9hcnJheSkgPyBfYXJyYXkuc2xpY2UoYXJnMCkgOiBbXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggYWxsIGZhbHN5IHZhbHVlcyByZW1vdmVkLlxuICogSW4gSmF2YVNjcmlwdCwgZmFsc2UsIG51bGwsIDAsIFwiXCIsIHVuZGVmaW5lZCBhbmQgTmFOIGFyZSBhbGwgZmFsc3kuXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTpBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFycmF5IGNvbnRhaW5pbmcgdGhydXRoeSB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfY29tcGFjdChbMCwgMSwgXCJIZWxsb1wiLCB7fSwgbnVsbCwgWzEsIDIsIDNdLCB2b2lkIDBdKVxuICogLy8gPT4gWzEsIFwiSGVsbG9cIiwge30sIFsxLCAyLCAzXV1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfY29tcGFjdChhcnJheSkge1xuICAgIHJldHVybiBULmlzX2FycmF5KGFycmF5KSA/IGFycmF5LmZpbHRlcihmdW5jdGlvbiBjaGVja0lmRmFsc3koZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihlbGVtZW50KTtcbiAgICB9KSA6IFtdO1xufVxuXG4vKipcbiAqIEZsYXR0ZW5zIGEgbmVzdGVkIGFycmF5ICh0aGUgbmVzdGluZyBjYW4gYmUgdG8gYW55IGRlcHRoKS5cbiAqIElmIHlvdSBwYXNzIHNoYWxsb3csIHRoZSBhcnJheSB3aWxsIG9ubHkgYmUgZmxhdHRlbmVkIGEgc2luZ2xlIGxldmVsLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyciBBcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHtCb29sZWFufSBbc2hhbGxvd10gRmxhdCBvbmx5IG9uZSBsZXZlbCBpbiBkZXB0aC5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGZsYXR0ZW4gYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfZmxhdHRlbihbMSwgWzJdLCBbMywgW1s0XV1dXSlcbiAqIC8vID0+IFsxLCAyLCAzLCA0XVxuICogQGV4YW1wbGVcbiAqIGFycmF5X2ZsYXR0ZW4oWzEsIFsyXSwgWzMsIFtbNF1dXV0sIHRydWUpO1xuICogLy8gPT4gWzEsIDIsIDMsIFtbNF1dXVxuICovXG5mdW5jdGlvbiBhcnJheV9mbGF0dGVuKCkge1xuICAgIGNvbnN0IGFyZzAgPSBhcmd1bWVudHNbMF07IC8vIEV4cGVjdGluZyBhcnJheS5cbiAgICBjb25zdCBhcmcxID0gYXJndW1lbnRzWzFdOyAvLyBFeHBlY3RpbmcgYm9vbGVhbiBmbGFnLlxuXG4gICAgaWYgKFQuaXNfYXJyYXkoYXJnMCkpIHtcbiAgICAgICAgaWYgKGFyZzEpIHsgLy8gSWYgc2hhbGxvdywgcGVyZm9ybSBvbmUgbGV2ZWwgZmxhdHRlbmluZy5cbiAgICAgICAgICAgIHJldHVybiBhcmcwLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcmcwLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoVC5pc19hcnJheSh2YWx1ZSkgPyBhcnJheV9mbGF0dGVuKHZhbHVlKSA6IHZhbHVlKTtcbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCBhbGwgaW5zdGFuY2VzIG9mIHRoZSB2YWx1ZXMgcmVtb3ZlZC5cbiAqXG4gKiBUT0RPOiBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7Li4uYXJndW1lbnRzfVxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgbmV3IGFycmF5IHdpdGhvdXQgdlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3dpdGhvdXQoWzEsIDIsIDMsIDQsIDVdLCAyLCA0KVxuICogLy8gPT4gWzEsIDMsIDVdXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3dpdGhvdXQoYXJyYXkpIHtcbiAgICBjb25zdCByZXN0ID0gYXJyYXlfcmVzdChVLnRvX2FycmF5KGFyZ3VtZW50cykpO1xuXG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gIVUuaW5fYXJyYXkocmVzdCwgdmFsdWUpO1xuICAgIH0pIDogW107XG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS5cbiAqXG4gKiBUT0RPOiBSZW1vdmUgZHVwbGljYXRlIG9iamVjdHMgYW5kIGlubmVyIGFycmF5cy5cbiAqXG4gKiBUT0RPOiBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFycmF5IHdpdGggZHVwbGljYXRlIGZyZWUgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3VuaXF1ZShbMSwgMiwgMiwgMywgNCwgMywgMSwgNSwgNSwgNywgNiwgNl0pXG4gKiAvLyA9PiBbMSwgMiwgMywgNCwgNSwgNywgNl1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfdW5pcXVlKGFycmF5KSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIGNoZWNrUG9zaXRpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4gICAgfSkgOiBbXTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgdW5pb24gb2YgdGhlIHBhc3NlZC1pbiBhcnJheXMgb3IgdmFsdWVzOlxuICogdGhlIGxpc3Qgb2YgdW5pcXVlIGl0ZW1zLCBpbiBvcmRlciwgdGhhdCBhcmUgcHJlc2VudCBpbiBvbmUgb3IgbW9yZSBvZiB0aGUgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3NcbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgY29tYmluZWQgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3VuaW9uKFsxLCAyLCAzXSwgWzEwMSwgMiwgMSwgMTBdLCBbMiwgMV0pXG4gKiAvLyA9PiBbMSwgMiwgMywgMTAxLCAxMF1cbiAqIEBleGFtcGxlXG4gKiBhcnJheV91bmlvbigxLCAyLCBbMywgMl0sIDQsIFsyLCA1XSlcbiAqIC8vID0+IFsxLCAyLCAzLCA0LCA1XVxuICovXG5mdW5jdGlvbiBhcnJheV91bmlvbigpIHtcbiAgICByZXR1cm4gYXJyYXlfdW5pcXVlKGFycmF5X2ZsYXR0ZW4oVS50b19hcnJheShhcmd1bWVudHMpKSk7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGxpc3Qgb2YgdmFsdWVzIHRoYXQgYXJlIHRoZSBpbnRlcnNlY3Rpb24gb2YgYWxsIHRoZSBhcnJheXMuXG4gKiBFYWNoIHZhbHVlIGluIHRoZSByZXN1bHQgaXMgcHJlc2VudCBpbiBlYWNoIG9mIHRoZSBhcnJheXMuXG4gKlxuICogVE9ETzogUGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHNoYXJlZCB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfaW50ZXJzZWN0aW9uKFsxLCAyLCAzXSwgWzEwMSwgMiwgMSwgMTBdLCBbMiwgMV0pXG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gYXJyYXlfaW50ZXJzZWN0aW9uKCkge1xuICAgIGNvbnN0IGFycmF5cyA9IFUudG9fYXJyYXkoYXJndW1lbnRzKTtcbiAgICBjb25zdCBtYWluQXJyYXkgPSBhcnJheV9maXJzdChhcnJheXMsIHRydWUpO1xuICAgIGNvbnN0IHJlc3QgPSBhcnJheV9yZXN0KGFycmF5cyk7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uID0gW107XG5cbiAgICBpZiAoVS5sZW5ndGgoYXJyYXlzKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKCFULmlzX2FycmF5KG1haW5BcnJheSkgfHwgVS5sZW5ndGgobWFpbkFycmF5KSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBmaXJzdDpcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFUubGVuZ3RoKG1haW5BcnJheSk7IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG1haW5BcnJheVtpXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBVLmxlbmd0aChyZXN0KTsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IHJlc3Rbal07XG4gICAgICAgICAgICBpZiAoVC5pc19hcnJheShhcnJheSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVUuaW5fYXJyYXkocmVzdFtqXSwgbWFpbkFycmF5W2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBmaXJzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGludGVyc2VjdGlvbi5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrIGZpcnN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGludGVyc2VjdGlvbi5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlfdW5pcXVlKGludGVyc2VjdGlvbik7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHNodWZmbGVkIGNvcHkgb2YgdGhlIGxpc3QsIHVzaW5nIGEgRmlzaGVyLVlhdGVzIHNodWZmbGUgYWxnb3JpdGhtLlxuICpcbiAqIEJ1aWx0IHVzaW5nIEZpc2hlcuKAk1lhdGVzIHNodWZmbGUgYWxnb3JpdGhtLlxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVyJUUyJTgwJTkzWWF0ZXNfc2h1ZmZsZVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHNodWZmbGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3NodWZmbGUoWzEsIDIsIDMsIDQsIDUgLDZdKTtcbiAqIC8vID0+IFsyLCAzLCAxLCA0LCA2LCA1XVxuICovXG5mdW5jdGlvbiBhcnJheV9zaHVmZmxlKGFycmF5KSB7XG4gICAgaWYgKCFULmlzX2FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IGluZGV4LCB0ZW1wLCByYW5kb21JbmRleDtcbiAgICBjb25zdCBhcnJheUNsb25lID0gW10uY29uY2F0KGFycmF5KTtcbiAgICBjb25zdCBhcnJheUxlbmd0aCA9IFUubGVuZ3RoKGFycmF5Q2xvbmUpO1xuXG4gICAgZm9yIChpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPiAwOyBpbmRleC0tKSB7XG4gICAgICAgIHJhbmRvbUluZGV4ID0gVS5yYW5kb21fbnVtYmVyKGFycmF5TGVuZ3RoKTtcbiAgICAgICAgdGVtcCA9IGFycmF5Q2xvbmVbaW5kZXhdO1xuICAgICAgICBhcnJheUNsb25lW2luZGV4XSA9IGFycmF5Q2xvbmVbcmFuZG9tSW5kZXhdO1xuICAgICAgICBhcnJheUNsb25lW3JhbmRvbUluZGV4XSA9IHRlbXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5Q2xvbmU7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSB2YWx1ZXMgb2YgYSBzcGVjaWZpZWQgcHJvcGVydHkgZnJvbSBhbGwgb2JqZWN0cyBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IE9iamVjdCBrZXkgb3IgbmVzdGVkIG9iamVjdCBrZXkgcGF0aC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IG9mIG9iamVjdHMgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSB3aXRoIHBsdWNrZWQgdmFsdWVzIGZyb20gb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3BsdWNrKCdpZCcsIFt7aWQ6IDF9LCB7aWQ6Mn0sIHtpZDozfV0pO1xuICogLy8gPT4gWzEsIDIsIDNdXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3BsdWNrKGtleSwgYXJyYXkpIHtcbiAgICBpZiAoVC5pc19zdHJpbmcoa2V5KSAmJiBULmlzX2FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gX2NvbXB1dGVQbHVja2luZyhrZXksIGFycmF5KTtcbiAgICB9XG5cbiAgICBpZiAoVS5sZW5ndGgoYXJndW1lbnRzKSA9PT0gMSAmJiBULmlzX3N0cmluZyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB0YWtlQXJyYXkoX2FycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gVC5pc19hcnJheShfYXJyYXkpID8gX2NvbXB1dGVQbHVja2luZyhrZXksIF9hcnJheSkgOiBbXTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGFsbCBwcm9wZXJ0aWVzIGZyb20gYW4gb2JqZWN0cyBpbnNpZGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgT2JqZWN0IGtleSBvciBuZXN0ZWQgb2JqZWN0IGtleSBwYXRoLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3MuXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHBsdWNrZWQgdmFsdWVzIGZyb20gb2JqZWN0cy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jb21wdXRlUGx1Y2tpbmcoa2V5LCBhcnJheSkge1xuICAgICAgICBsZXQgcGx1Y2tlZEFycmF5ID0gW107XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IG51bWJlck9mSXRlbXMgPSBVLmxlbmd0aChhcnJheSk7XG4gICAgICAgIGZvciAoaW5kZXg7IGluZGV4IDwgbnVtYmVyT2ZJdGVtczsgaW5kZXgrKykge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIGlmIChULmlzX29iamVjdChhcnJheVtpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3RfcGx1Y2soa2V5LCBhcnJheVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmIChULmlzX2RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWNrZWRBcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGx1Y2tlZEFycmF5O1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgb25lIG9yIG1vcmUgZWxlbWVudHMgdG8gdGhlIGVuZCBvZiBhbiBhcnJheSBhbmRcbiAqIHJldHVybiBuZXcgYXJyYXkgd2l0aCBhbGwgdmFsdWVzIGluY2x1ZGVkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IE9yaWdpbmFsIGFycmF5LlxuICogQHBhcmFtIHttaXh9IFsuLi5hcmdzXSBWYWx1ZXMgdG8gYWRkIHRvIGFycmF5LlxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgbmV3IGFycmF5IHdpdGggdmFsdWVzIGFwcGVuZGVkIHRvIG9yaWdpbmFsLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3B1c2goW10sIDEsIDIsIDMsIDQpO1xuICogLy8gPT4gWzEsIDIsIDMsIDRdXG4gKiBAZXhhbXBsZVxuICogYXJyYXlfcHVzaChbMSwgMiwgM10sIFs0LCA1LCA2XSk7XG4gKiAvLyA9PiBbMSwgMiwgMywgWzQsIDUsIDZdXVxuICovXG5mdW5jdGlvbiBhcnJheV9wdXNoKGFycmF5KSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXkuY29uY2F0KGFycmF5X3Jlc3QoVS50b19hcnJheShhcmd1bWVudHMpKSkgOiBbXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gbGFzdCBlbGVtZW50IGZyb20gYSBjb2xsZWN0aW9uLlxuICogVW5saWtlIGFycmF5X2xhc3Qgd2hlcmUgZnVuY3Rpb24gYWx3YXlzIHJldHVybiBlbXB0eSBjb2xsZWN0aW9uIChbXSlcbiAqIGlmIG5vdGhpbmcgaXMgZm91bmQgb3IgaW5wdXQgaXMgaW52YWxpZCwgYXJyYXlfcG9wIHJldHVybnMgdW5kZWZpbmVkIGFzIGEgcmVzdWx0LlxuICpcbiAqIE5PVEU6IGFycmF5X2xhc3QgZG9lcyBub3QgbXV0YXRlIG9yaWdpbmFsIGFycmF5IGxpa2UgbmF0aXZlIGpzIGFycmF5LnBvcCgpXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm4geyp9IExhc3QgdmFsdWUgZnJvbSBhbiBhcnJheS5cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9wb3AoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IDRcbiAqIEBleGFtcGxlXG4gKiBhcnJheV9wb3AoXCJoZWxsb1wiKVxuICogLy8gPT4gdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3BvcChhcnJheSkge1xuICAgIHJldHVybiBULmlzX2FycmF5KGFycmF5KSA/IGFycmF5W1UubGVuZ3RoKGFycmF5KSAtIDFdIDogdm9pZCAwO1xufVxuXG4vKipcbiAqIEFkZCBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgYmVnaW5uaW5nIG9mIGFuIGFycmF5IGFuZFxuICogcmV0dXJuIG5ldyBhcnJheSB3aXRoIGFsbCB2YWx1ZXMgaW5jbHVkZWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7Li4uKn0gZWxlbWVudHMgRWxlbWVudHMgdG8gYWRkIGF0IHRoZSBiZWdpbmluZyBvZiBhcnJheS5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFycmF5IHdpdGggbmV3IHZhbHVlcyB2YWx1ZXMgYXQgdGhlIGJlZ2luaW5nLlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3Vuc2hpZnQoWzEsIDIsIDNdLCA0LCA1KTtcbiAqIC8vID0+IFs0LCA1LCAxLCAyLCAzXVxuICovXG5mdW5jdGlvbiBhcnJheV91bnNoaWZ0KGFycmF5KSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXlfcmVzdChVLnRvX2FycmF5KGFyZ3VtZW50cykpLmNvbmNhdChhcnJheSkgOiBbXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gZmlyc3QgZWxlbWVudCBmcm9tIGEgY29sbGVjdGlvbi5cbiAqIFVubGlrZSBhcnJheV9maXJzdCB3aGVyZSBmdW5jdGlvbiBhbHdheXMgcmV0dXJuIGVtcHR5IGNvbGxlY3Rpb24gKFtdKVxuICogaWYgbm90aGluZyBpcyBmb3VuZCBvciBpbnB1dCBpcyBpbnZhbGlkLCBhcnJheV9zaGlmdCByZXR1cm5zIHVuZGVmaW5lZCBhcyBhIHJlc3VsdC5cbiAqXG4gKiBOT1RFOiBhcnJheV9zaGlmdCBkb2VzIG5vdCBtdXRhdGUgb3JpZ2luYWwgYXJyYXkgbGlrZSBuYXRpdmUganMgYXJyYXkuc2hpZnQoKVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHsqfSBSZXR1cm5zIGZpcnN0IGVsZW1lbnQgZnJvbSBhbiBhcnJheS5cbiAqIEBleGFtcGxlXG4gKiBhcnJheV9zaGlmdChbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gMVxuICogQGV4YW1wbGVcbiAqIGFycmF5X3NoaWZ0KHtuYW1lOiAnU3RlZmFuJ30pO1xuICogLy8gPT4gdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3NoaWZ0KGFycmF5KSB7XG4gICAgcmV0dXJuIFQuaXNfYXJyYXkoYXJyYXkpID8gYXJyYXlbMF0gOiB2b2lkIDA7XG59XG5cbi8qKlxuICogUmV2ZXJzZXMgYW4gYXJyYXkgaW4gcGxhY2UuIFRoZSBmaXJzdCBhcnJheSBlbGVtZW50IGJlY29tZXMgdGhlIGxhc3QsXG4gKiBhbmQgdGhlIGxhc3QgYXJyYXkgZWxlbWVudCBiZWNvbWVzIHRoZSBmaXJzdC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHJldmVyc2VkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqIGFycmF5X3JldmVyc2UoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IFs0LCAzLCAyLCAxXVxuICovXG5mdW5jdGlvbiBhcnJheV9yZXZlcnNlKGFycmF5KSB7XG4gICAgaWYgKFQuaXNfYXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIGxldCBudW1iZXJPZkVsZW1lbnRzID0gVS5sZW5ndGgoYXJyYXkpO1xuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIG1hcEVsZW1lbnRSZXZlcnNlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheVtudW1iZXJPZkVsZW1lbnRzIC0gKGluZGV4ICsgMSldO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFycmF5X2ZpcnN0LFxuICAgIGFycmF5X2luaXRpYWwsXG4gICAgYXJyYXlfbGFzdCxcbiAgICBhcnJheV9yZXN0LFxuICAgIGFycmF5X2NvbXBhY3QsXG4gICAgYXJyYXlfZmxhdHRlbixcbiAgICBhcnJheV93aXRob3V0LFxuICAgIGFycmF5X3VuaXF1ZSxcbiAgICBhcnJheV91bmlvbixcbiAgICBhcnJheV9pbnRlcnNlY3Rpb24sXG4gICAgYXJyYXlfc2h1ZmZsZSxcbiAgICBhcnJheV9wbHVjayxcbiAgICBhcnJheV9wdXNoLFxuICAgIGFycmF5X3BvcCxcbiAgICBhcnJheV91bnNoaWZ0LFxuICAgIGFycmF5X3NoaWZ0LFxuICAgIGFycmF5X3JldmVyc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXJyYXkvYXJyYXkuanMiLCJyZXF1aXJlKCcuLi9qc2RvY3MvanNkb2NzJyk7XG5jb25zdCBUID0gcmVxdWlyZSgnLi4vdHlwZXMvdHlwZXMnKTtcbmNvbnN0IEUgPSByZXF1aXJlKCcuLi9lcnJvcnMvZXJyb3JzJyk7XG5jb25zdCB7IGxlbmd0aCB9ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS91dGlsaXR5Jyk7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIG9iamVjdCBtYW5pcHVsYXRpbmcgZnVuY3Rpb25zLlxuICogQG1vZHVsZSBPYmplY3RcbiAqL1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgdmFsdWUgb2YgYSBzcGVjaWZpZWQgcHJvcGVydHkgZnJvbSBwcm92aWRlZCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHBlcnNvbiA9IHtcbiAqICAgICBuYW1lOiAnU3RlZmFuJyxcbiAqICAgICBhZGRyZXNzOiB7XG4gKiAgICAgICAgIGNpdHk6ICdCZWxncmFkZScsXG4gKiAgICAgICAgIGFyZWE6IHtcbiAqICAgICAgICAgICAgIG5hbWU6ICdDdWthcmljYScsXG4gKiAgICAgICAgIH1cbiAqICAgICB9XG4gKiB9O1xuICpcbiAqIG9iamVjdF9wbHVjaygnYWRkcmVzcy5hcmVhLm5hbWUnLCBwZXJzb24pO1xuICogLy8gPT4gJ0N1a2FyaWNhJ1xuICpcbiAqIG9iamVjdF9wbHVjaygnYWRkcmVzcy5uYW1lLmFyZWEnLCBwZXJzb24pO1xuICogLy8gPT4gdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIG9iamVjdF9wbHVjayhrZXksIG9iamVjdCkge1xuICAgIGNvbnN0IG51bWJlck9mQXJndW1lbnRzID0gbGVuZ3RoKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIVQuaXNfc3RyaW5nKGtleSkpIHtcbiAgICAgICAgRS50aHJvd1N0cmluZ1R5cGVFcnJvcihrZXkpO1xuICAgIH1cblxuICAgIGlmIChudW1iZXJPZkFyZ3VtZW50cyA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0T2JqZWN0KF9vYmplY3QpIHtcbiAgICAgICAgICAgIGlmICghVC5pc19vYmplY3QoX29iamVjdCkpIHtcbiAgICAgICAgICAgICAgICBFLnRocm93T2JqZWN0VHlwZUVycm9yKF9vYmplY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2RlZXBBY2Nlc3NQbHVjayhfb2JqZWN0LCBrZXkpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmICghVC5pc19vYmplY3Qob2JqZWN0KSkge1xuICAgICAgICBFLnRocm93T2JqZWN0VHlwZUVycm9yKG9iamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9kZWVwQWNjZXNzUGx1Y2sob2JqZWN0LCBrZXkpO1xuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB2YWx1ZSBmcm9tIGFuIGRlZXAgbmVzdGVkIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgS2V5IG9yIG5lc3RlZCBrZXkgcGF0aCBpbiB0aGUgb2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3QgcGVyc29uID0ge1xuICAgICAqICAgICBuYW1lOiAnU3RlZmFuJyxcbiAgICAgKiAgICAgYWRkcmVzczoge1xuICAgICAqICAgICAgICAgY2l0eTogJ0JlbGdyYWRlJyxcbiAgICAgKiAgICAgICAgIGFyZWE6IHtcbiAgICAgKiAgICAgICAgICAgICBuYW1lOiAnQ3VrYXJpY2EnLFxuICAgICAqICAgICAgICAgfVxuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKiBfZGVlcEFjY2Vzc1BsdWNrKHBlcnNvbiwgJ2FkZHJlc3MuYXJlYS5uYW1lJylcbiAgICAgKiAvLyA9PiAnQ3VrYXJpY2EnXG4gICAgICogX2RlZXBBY2Nlc3NQbHVjayhwZXJzb24sICdhZGRyZXNzLmNpdHkuYXJlYS5uYW1lJylcbiAgICAgKiAvLyA9PiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZGVlcEFjY2Vzc1BsdWNrKG9iamVjdCwga2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkuc3BsaXQoJy4nKS5yZWR1Y2UoZnVuY3Rpb24gY2hlY2tFeGlzdGVuY2UoZGVlcE9iamVjdCwga2V5KSB7XG4gICAgICAgICAgICBpZiAoZGVlcE9iamVjdCAmJiBrZXkgaW4gZGVlcE9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWVwT2JqZWN0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG9iamVjdCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBvYmplY3Rfa2V5cyBmdW5jdGlvbiByZXR1cm5zIGFuIGFycmF5IG9mIGEgZ2l2ZW4gb2JqZWN0J3Mgb3duIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcGVyc29uID0ge1xuICogICAgIGZuYW1lOiAnU3RlZmFuJyxcbiAqICAgICBsbmFtZTogJ0xhemFyZXZpYycsXG4gKiB9O1xuICpcbiAqIG9iamVjdF9rZXlzKHBlcnNvbik7XG4gKiAvLyA9PiBbJ2ZuYW1lJywgJ2xuYW1lJ11cbiAqL1xuZnVuY3Rpb24gb2JqZWN0X2tleXMob2JqZWN0KSB7XG4gICAgaWYgKFQuaXNfb2JqZWN0KG9iamVjdCkgfHwgVC5pc19hcnJheShvYmplY3QpIHx8IFQuaXNfc3RyaW5nKG9iamVjdCkpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSB2YWx1ZXMgb2Ygb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgdmFsdWVzLlxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHBlcnNvbiA9IHtcbiAqICAgICBmbmFtZTogJ1N0ZWZhbicsXG4gKiAgICAgbG5hbWU6ICdMYXphcmV2aWMnLFxuICogfTtcbiAqXG4gKiBvYmplY3RfdmFsdWVzKHBlcnNvbik7XG4gKiAvLyA9PiBbJ1N0ZWZhbicsICdMYXphcmV2aWMnXVxuICovXG5mdW5jdGlvbiBvYmplY3RfdmFsdWVzKG9iamVjdCkge1xuICAgIGlmIChULmlzX29iamVjdChvYmplY3QpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgRS50aHJvd09iamVjdFR5cGVFcnJvcihvYmplY3QpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IGNvbXBvc2VkIG9mIHRoZSBpbnZlcnRlZCBrZXlzIGFuZCB2YWx1ZXMgb2Ygb2JqZWN0LlxuICogSWYgb2JqZWN0IGNvbnRhaW5zIGR1cGxpY2F0ZSB2YWx1ZXMsIGFuZCBzdWJzZXF1ZW50IHZhbHVlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnZlcnQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgaW52ZXJ0ZWQgb2JqZWN0LlxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHBlcnNvbiA9IHtcbiAqICAgICBmbmFtZTogJ1N0ZWZhbicsXG4gKiAgICAgbG5hbWU6ICdMYXphcmV2aWMnLFxuICogfTtcbiAqXG4gKiBvYmplY3RfaW52ZXJ0KHBlcnNvbik7XG4gKiAvLyA9PiB7XG4gKiAvLyAgICAgICAgU3RlZmFuOiAnZm5hbWUnLFxuICogLy8gICAgICAgIExhemFyZXZpYzogJ2xuYW1lJyxcbiAqIC8vICAgIH1cbiAqL1xuZnVuY3Rpb24gb2JqZWN0X2ludmVydChvYmplY3QpIHtcbiAgICBpZiAoVC5pc19vYmplY3Qob2JqZWN0KSkge1xuICAgICAgICBjb25zdCBpbnZlcnRlZE9iamVjdCA9IHt9O1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChULmlzX2RlZmluZWQodmFsdWUpICYmICFULmlzX2Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZE9iamVjdFt2YWx1ZV0gPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGludmVydGVkT2JqZWN0O1xuICAgIH1cblxuICAgIEUudGhyb3dPYmplY3RUeXBlRXJyb3Iob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb2JqZWN0X3BsdWNrLFxuICAgIG9iamVjdF9rZXlzLFxuICAgIG9iamVjdF92YWx1ZXMsXG4gICAgb2JqZWN0X2ludmVydFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3Qvb2JqZWN0LmpzIiwiY29uc3QgQSA9IHJlcXVpcmUoJy4vYXJyYXkvYXJyYXknKTtcbmNvbnN0IEQgPSByZXF1aXJlKCcuL2RhdGUvZGF0ZScpO1xuY29uc3QgRSA9IHJlcXVpcmUoJy4vZXJyb3JzL2Vycm9ycycpO1xuY29uc3QgRiA9IHJlcXVpcmUoJy4vZnVuY3Rpb24vZnVuY3Rpb24nKTtcbmNvbnN0IE8gPSByZXF1aXJlKCcuL29iamVjdC9vYmplY3QnKTtcbmNvbnN0IFMgPSByZXF1aXJlKCcuL3N0cmluZy9zdHJpbmcnKTtcbmNvbnN0IFQgPSByZXF1aXJlKCcuL3R5cGVzL3R5cGVzJyk7XG5jb25zdCBVID0gcmVxdWlyZSgnLi91dGlsaXR5L3V0aWxpdHknKTtcblxud2luZG93LkEgPSBBO1xud2luZG93LkQgPSBEO1xud2luZG93LkUgPSBFO1xud2luZG93LkYgPSBGO1xud2luZG93Lk8gPSBPO1xud2luZG93LlMgPSBTO1xud2luZG93LkUgPSBFO1xud2luZG93LlQgPSBUO1xud2luZG93LlUgPSBVO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIiwiY29uc3QgQSA9IHJlcXVpcmUoJy4uL2FycmF5L2FycmF5Jyk7XG5jb25zdCB7IGlzX2Z1bmN0aW9uIH0gPSByZXF1aXJlKCcuLi90eXBlcy90eXBlcycpO1xuY29uc3QgVSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvdXRpbGl0eScpO1xuY29uc3QgeyB0aHJvd0Z1bmN0aW9uVHlwZUVycm9yIH0gPSByZXF1aXJlKCcuLi9lcnJvcnMvZXJyb3JzJyk7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIEZQIHN0eWxlIGZ1bmN0aW9ucy5cbiAqIEBtb2R1bGUgRnVuY3Rpb25cbiAqL1xuXG4vKipcbiAqIFdyYXBzIGEgZnVuY3Rpb24gY2FsbCBvZiBhbnkgYXJpdHkgdG8gZW5zdXJlIHRoYXQgb25seSBvbmUgYXJndW1lbnQgaXMgYWNjZXB0ZWQuXG4gKlxuICogQXQgZmlyc3Qgc2lnbiB1bmFyeSBmdW5jdGlvbiBzZWVtcyB1c2VsZXNzLCBidXQgaGVyZSdzIHRoZSBwaXRmYWxsIGV4YW1wbGVcbiAqIHRoYXQgY2FuIGJlIHByZXZlbnRlZCB1c2luZyB1bmFyeSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gd3JhcHBpbmcgYGZuYC4gVGhlIG5ldyBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIGJlIG9mIGFyaXR5IDEuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKiBAZXhhbXBsZVxuICogLy8gRmFpbGluZyBleGFtcGxlIHdpdGhvdXQgdXNpbmcgdW5hcnkgZnVuY3Rpb24uXG4gKiBjb25zdCBzdHJOdW1iZXJzID0gW1wiMVwiLCBcIjJcIiwgXCIzXCJdO1xuICogY29uc3QgbnVtYmVycyA9IHN0ck51bWJlcnMubWFwKHBhcnNlSW50KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhudW1iZXJzKTsgLy8gPT4gWzEsIE5hTiwgTmFOXVxuICogQGV4YW1wbGVcbiAqIC8vIFBhc3NpbmcgZXhhbXBsZSB1c2luZyB1bmFyeSBmdW5jdGlvbi5cbiAqIGNvbnN0IHN0ck51bWJlcnMgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIl07XG4gKiBjb25zdCBudW1iZXJzID0gc3RyTnVtYmVycy5tYXAodW5hcnkocGFyc2VJbnQpKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhudW1iZXJzKTsgLy8gPT4gWzEsIDIsIDNdXG4gKi9cbmZ1bmN0aW9uIHVuYXJ5KGZuKSB7XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGZuKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gdGFrZUFyZ3VtZW50KGFyZykge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgYXJnKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0aHJvd0Z1bmN0aW9uVHlwZUVycm9yKGZuKTtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHRha2VzIG9uZSBhcmd1bWVudCBhbmQgZG9lcyBub3RoaW5nIGJ1dCByZXR1cm4gdGhlIHZhbHVlIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIGJlIHJldHVybmVkLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgcGFzc2VkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqIGlkZW50aXR5KDEwKTsgLy8gPT4gMTBcbiAqIGlkZW50aXR5KHVuZGVmaW5lZCk7IC8vID0+IHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDdXJyeWluZyByZWZlcnMgdG8gdGhlIHByb2Nlc3Mgb2YgdHJhbnNmb3JtaW5nIGEgZnVuY3Rpb24gd2l0aCBtdWx0aXBsZSBhcml0eVxuICogaW50byB0aGUgc2FtZSBmdW5jdGlvbiB3aXRoIGxlc3MgYXJpdHkuXG4gKlxuICogVGhlIGN1cnJpZWQgZWZmZWN0IGlzIGFjaGlldmVkIGJ5IGJpbmRpbmcgc29tZSBvZiB0aGUgYXJndW1lbnRzIHRvIHRoZSBmaXJzdCBmdW5jdGlvbiBpbnZva2UsXG4gKiBzbyB0aGF0IHRob3NlIHZhbHVlcyBhcmUgZml4ZWQgZm9yIHRoZSBuZXh0IGludm9jYXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IEN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKiBAc2VlIHtAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DdXJyeWluZ3xDdXJyeWluZ31cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBzdW0gPSAoYSwgYiwgYykgPT4gYSArIGIgKyBjO1xuICogY29uc3Qgc3VtQnk1ID0gY3Vycnkoc3VtLCA1KTtcbiAqIGNvbnN0IHN1bUJ5OCA9IGN1cnJ5KHN1bSkoMikoNik7XG4gKlxuICogc3VtQnk1KDMsIDUpOyAvLyA9PiAxM1xuICogc3VtQnk4KDYpOyAvLyA9PiAxNFxuICovXG5mdW5jdGlvbiBjdXJyeShmbikge1xuICAgIGlmICghaXNfZnVuY3Rpb24oZm4pKSB0aHJvd0Z1bmN0aW9uVHlwZUVycm9yKGZuKTtcblxuICAgIGNvbnN0IGFyaXR5ID0gZm4ubGVuZ3RoO1xuXG4gICAgcmV0dXJuIChmdW5jdGlvbiB0YWtlQXJndW1lbnRzKGluaXRpYWxBcmd1bWVudHMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VDdXJyaWVkQXJndW1lbnRzKCkge1xuICAgICAgICAgICAgdmFyIGFsbEFyZ3VtZW50cyA9IGluaXRpYWxBcmd1bWVudHMuY29uY2F0KFUudG9fYXJyYXkoYXJndW1lbnRzKSk7XG4gICAgICAgICAgICByZXR1cm4gVS5sZW5ndGgoYWxsQXJndW1lbnRzKSA+PSBhcml0eSA/IGZuLmFwcGx5KHRoaXMsIGFsbEFyZ3VtZW50cykgOiB0YWtlQXJndW1lbnRzKGFsbEFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfSkoQS5hcnJheV9yZXN0KFUudG9fYXJyYXkoYXJndW1lbnRzKSkpO1xufVxuXG4vKipcbiAqIFRoZSBwcm9jZXNzIG9mIGFwcGx5aW5nIGEgZnVuY3Rpb24gdG8gc29tZSBvZiBpdHMgYXJndW1lbnRzLiBUaGUgcGFydGlhbGx5IGFwcGxpZWQgZnVuY3Rpb24gZ2V0cyByZXR1cm5lZCBmb3IgbGF0ZXIgKiB1c2UuIEluIG90aGVyIHdvcmRzLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBmdW5jdGlvbiB3aXRoIG11bHRpcGxlIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGZld2VyXG4gKiBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge0FyZ3VtZW50c30gYXJncyBhcmd1bWVudHMgdG8gYXBwbHkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gRnVuY3Rpb24gdGhhdCB0YWtlcyByZXN0IG9mIHRoZSBhcmd1bWVudHMuXG4gKiBAZXhhbXBsZVxuICogY29uc3QgbXVsdGlwbHkgPSAoYSwgYikgPT4gYSAqIGI7XG4gKiBjb25zdCBkb3VibGUgPSBwYXJ0aWFsKG11bHRpcGx5LCAyKTtcbiAqXG4gKiBkb3VibGUoNSk7IC8vID0+IDEwXG4gKi9cbmZ1bmN0aW9uIHBhcnRpYWwoZm4pIHtcbiAgICBpZiAoIWlzX2Z1bmN0aW9uKGZuKSkge1xuICAgICAgICB0aHJvd0Z1bmN0aW9uVHlwZUVycm9yKGZuKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdEFyZ3VtZW50cyA9IEEuYXJyYXlfcmVzdChVLnRvX2FycmF5KGFyZ3VtZW50cykpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VSZXN0T2ZUaGVBcmd1bWVudHMoKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBmaXJzdEFyZ3VtZW50cy5jb25jYXQoVS50b19hcnJheShhcmd1bWVudHMpKSk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBjb21wb3NpdGlvbiBpcyB0aGUgcHJvY2VzcyBvZiBjb21iaW5pbmcgdHdvIG9yIG1vcmUgZnVuY3Rpb25zXG4gKiB0byBwcm9kdWNlIG5ldyBmdW5jdGlvbi5cbiAqXG4gKiBDb21wb3NlZCBmdW5jdGlvbiB0YWtlIGRhdGEgYW5kIHByb2Nlc3MgaXQgdGhyb3VnaCBhbGwgcGlwZXMgZnJvbSByaWdodCB0byBsZWZ0XG4gKiBwcm9kdWNpbmcgbmV3IGRhdGEuIChmIG8gZykgPT4gZihnKG8pKTtcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uc30gLSBMaXN0IG9mIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybiB7RnVuY3Rpb259IC0gRnVuY3Rpb24gdGhhdCBleHBlY3QgYSB2YWx1ZSB0byBjb21wdXRlLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRnVuY3Rpb25fY29tcG9zaXRpb25fKGNvbXB1dGVyX3NjaWVuY2UpfEZ1bmN0aW9uIGNvbXBvc2l0aW9ufVxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGdyZWV0ID0gbmFtZSA9PiBgSGVsbG8gJHtuYW1lfWA7XG4gKiBjb25zdCBncmVldE5hbWUgPSBjb21wb3NlKGdyZWV0LCBzdHJpbmdfY2FwaXRhbGl6ZSk7XG4gKlxuICogZ3JlZXROYW1lKCdzdGVmYW4nKTsgLy8gPT4gSGVsbG8gU3RlZmFuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gICAgY29uc3QgZnVuY3Rpb25zID0gYXJndW1lbnRzO1xuICAgIGxldCBpbmRleCA9IGZ1bmN0aW9ucy5sZW5ndGg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAtLWluZGV4O1xuICAgICAgICByZXR1cm4gKGluZGV4ID4gLTEpID8gY29tcG9zZVZhbHVlKGZ1bmN0aW9uc1tpbmRleF0odmFsdWUpKSA6IHZhbHVlO1xuICAgIH07XG59XG5cbi8qKlxuICogUGlwZSBwZXJmb3JtIGZ1bmN0aW9uIGNvbXBvc2l0aW9uIGxpa2UgY29tcG9zZS5cbiAqXG4gKiBUaGUgb25seSBkaWZmZXJlbmNlIGJldHdlZW4gcGlwZSBhbmQgY29tcG9zZSBpZiB0aGF0IHBpcGUgdGFrZXMgZnVuY3Rpb24gYXJndW1lbnRzIGZyb20gbGVmdCB0byByaWdodCxcbiAqIGFuZCBieSB0aGF0IHByb3ZpZGVzIGFkZGl0aW9uYWwgcmVhZGFiaWxpdHkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnN9IC0gTGlzdCBvZiBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAtIEZ1bmN0aW9uIHRoYXQgZXhwZWN0IGEgdmFsdWUgdG8gY29tcHV0ZS5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Z1bmN0aW9uX2NvbXBvc2l0aW9uXyhjb21wdXRlcl9zY2llbmNlKXxGdW5jdGlvbiBjb21wb3NpdGlvbn1cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBncmVldCA9IG5hbWUgPT4gYEhlbGxvICR7bmFtZX1gO1xuICogY29uc3QgZ3JlZXROYW1lID0gY29tcG9zZShzdHJpbmdfY2FwaXRhbGl6ZSwgZ3JlZXQpO1xuICpcbiAqIGdyZWV0TmFtZSgnc3RlZmFuJyk7IC8vID0+IEhlbGxvIFN0ZWZhblxuICovXG5mdW5jdGlvbiBwaXBlKCkge1xuICAgIGNvbnN0IGZ1bmN0aW9ucyA9IGFyZ3VtZW50cztcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIHJldHVybiAoaW5kZXggPCBmdW5jdGlvbnMubGVuZ3RoKSA/IGNvbXBvc2VWYWx1ZShmdW5jdGlvbnNbaW5kZXhdKHZhbHVlKSkgOiB2YWx1ZTtcbiAgICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGNhbiBvbmx5IGJlIGNhbGxlZCBvbmUgdGltZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAZXhhbXBsZVxuICogZnVuY3Rpb24gcmV0dXJuTXlOYW1lKCkge1xuICogICAgICByZXR1cm4gXCJTdGVmYW4gTGF6YXJldmljXCI7XG4gKiB9XG4gKlxuICogY29uc3QgY2FsbE15TmFtZU9uY2UgPSBvbmNlKHJldHVybk15TmFtZSk7XG4gKiBjYWxsTXlOYW1lT25jZSgpIC8vID0+IFwiU3RlZmFuIExhemFyZXZpY1wiXG4gKiBjYWxsTXlOYW1lT25jZSgpIC8vID0+IHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGZuKSkge1xuICAgICAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbmUgPyB2b2lkIDAgOiAoZG9uZSA9IHRydWUsIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRocm93RnVuY3Rpb25UeXBlRXJyb3IoZm4pO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBtZW1vaXplLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBNZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICAgIGNvbnN0IGNhY2hlID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VBcmd1bWVudHMoKSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBVLnRvX2FycmF5KGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChhcmdzIGluIGNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVbYXJnc107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGNhY2hlW2FyZ3NdID0gZm4uYXBwbHkodGhpcywgYXJncykpO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHVuYXJ5LFxuICAgIGlkZW50aXR5LFxuICAgIGN1cnJ5LFxuICAgIHBhcnRpYWwsXG4gICAgY29tcG9zZSxcbiAgICBwaXBlLFxuICAgIG9uY2UsXG4gICAgbWVtb2l6ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9mdW5jdGlvbi9mdW5jdGlvbi5qcyIsImNvbnN0IFQgPSByZXF1aXJlKCcuLi90eXBlcy90eXBlcycpO1xuY29uc3QgRSA9IHJlcXVpcmUoJy4uL2Vycm9ycy9lcnJvcnMnKTtcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc3RyaW5nIG1hbmlwdWxhdGluZyBmdW5jdGlvbnMuXG4gKiBAbW9kdWxlIFN0cmluZ1xuICovXG5cbi8qKlxuICogVGhlIHN0cmluZ190cmltKCkgbWV0aG9kIHJldHVybnMgdGhlIHN0cmluZyBzdHJpcHBlZCBvZiB3aGl0ZXNwYWNlIGZyb20gYm90aCBlbmRzLlxuICogc3RyaW5nX3RyaW0oKSBkb2VzIG5vdCBhZmZlY3QgdGhlIHZhbHVlIG9mIHRoZSAqIHN0cmluZyBpdHNlbGYuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBzdHJpbmdfdHJpbShcIiAgU3RlZmFuIExhemFyZXZpYyAgIFwiKSA9PiBcIlN0ZWZhbiBMYXphcmV2aWNcIlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBzdHJpbmdfdHJpbSh2YWx1ZSkge1xuICAgIGlmIChULmlzX3N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgICB9XG5cbiAgICBFLnRocm93U3RyaW5nVHlwZUVycm9yKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gcmVjZWl2ZWQgc3RyaW5nIHdpdGggZmlyc3QgbGV0dGVyIGluIHVwcGVyY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc3RyaW5nX2NhcGl0YWxpemUodmFsdWUpIHtcbiAgICBpZiAoVC5pc19zdHJpbmcodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnRvTG93ZXJDYXNlKCkuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBFLnRocm93U3RyaW5nVHlwZUVycm9yKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIG5ldyBzdHJpbmcgdXNpbmcgcHJvdmlkZWQgcGF0dGVybiB3aXRoICd4JyBtYXJrIHJlcHJlc2VudGluZ1xuICogZWFjaCB2YWx1ZSBwbGFjZWhvbGRlci4gQWNjZXB0cyAzIGRpZmZlcmVudCB0eXBlIG9mIHZhbHVlIGNvbnRhaW5lcnM6XG4gKiBBcnJheSwgU3RyaW5nIGFuZCBOdW1iZXIuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdHRlcm4gQSBwYXR0ZXJuIHRoYXQgd2lsbCBiZSBmdWxsZmlsbGVkLlxuICogQHBhcmFtIHtBcnJheXxOdW1iZXJ8U3RyaW5nfSB0b1JlcGxhY2VcbiAqIEByZXR1cm5zIHtTdHJpbmd9IE5ldyBzdHJpbmcgd2l0aCBmdWxsZmlsbGVkIHBhdHRlcm4gcGxhY2Vob2xkZXJzLlxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICogQGV4YW1wbGVcbiAqIHN0cmluZ19wYXR0ZXJuKCcreCAoeCkgeC14JywgWyczODEnLCAnNjInLCAnNTU1JywgJzMzMyddKVxuICogLy8gPT4gJyszODEgKDYyKSA1NTUtMzMzJ1xuICogQGV4YW1wbGVcbiAqIHN0cmluZ19wYXR0ZXJuKCd4eHh4LXh4eHgteHh4eC14eHh4JywgNDI0MjQyNDI0MjQyNDI0Mik7XG4gKiAvLyA9PiAnNDI0Mi00MjQyLTQyNDItNDI0MidcbiAqIEBleGFtcGxlXG4gKiBzdHJpbmdfcGF0dGVybigneHh4LXh4eCcpKCcxMjM0NTYnKTtcbiAqIC8vID0+ICcxMjMtNDU2J1xuICovXG5mdW5jdGlvbiBzdHJpbmdfcGF0dGVybihwYXR0ZXJuLCByZXBsYWNlbWVudCkge1xuICAgIGlmIChULmlzX3N0cmluZyhwYXR0ZXJuKSkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuVG9rZW5zID0gcGF0dGVybi5zcGxpdCgnJyk7XG5cbiAgICAgICAgaWYgKCFULmlzX2RlZmluZWQocmVwbGFjZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gdGFrZVJlcGxhY2VtZW50KF9yZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZm9ybWF0UGF0dGVybihwYXR0ZXJuVG9rZW5zLCBfcmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfZm9ybWF0UGF0dGVybihwYXR0ZXJuVG9rZW5zLCByZXBsYWNlbWVudCk7XG4gICAgfVxuXG4gICAgRS50aHJvd1N0cmluZ1R5cGVFcnJvcihwYXR0ZXJuKTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdHRlcm5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2Zvcm1hdFBhdHRlcm4ocGF0dGVyblRva2VucywgX3JlcGxhY2VtZW50KSB7XG4gICAgICAgIGxldCB4VG9rZW5JbmRleCA9IDA7XG4gICAgICAgIGxldCByZXBsYWNlbWVudCA9IEFycmF5KDApO1xuXG4gICAgICAgIGlmIChULmlzX251bWJlcihfcmVwbGFjZW1lbnQpKSB7XG4gICAgICAgICAgICByZXBsYWNlbWVudCA9IF9yZXBsYWNlbWVudC50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChULmlzX3N0cmluZyhfcmVwbGFjZW1lbnQpKSB7XG4gICAgICAgICAgICByZXBsYWNlbWVudCA9IF9yZXBsYWNlbWVudC5zcGxpdCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVC5pc19hcnJheShfcmVwbGFjZW1lbnQpKSB7XG4gICAgICAgICAgICByZXBsYWNlbWVudCA9IF9yZXBsYWNlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuVG9rZW5zLnJlZHVjZShmdW5jdGlvbiAocGF0dGVyblN0cmluZywgdG9rZW4pIHtcbiAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZVZhbHVlID0gcmVwbGFjZW1lbnRbeFRva2VuSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChULmlzX2RlZmluZWQocmVwbGFjZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuU3RyaW5nICs9IHJlcGxhY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgeFRva2VuSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5TdHJpbmc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5TdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuU3RyaW5nICs9IHRva2VuO1xuICAgICAgICB9LCAnJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgZXF1YWwgaW4gbGVuZ3RoIHRvIHRoZSBsZW5ndGggb2YgdGhlIHJlc3VsdCBvZiBjb252ZXJ0aW5nIHRoaXMgb2JqZWN0IHRvIGEgc3RyaW5nLlxuICogVGhlIHJlc3VsdCBpcyBhIHN0cmluZyB2YWx1ZSwgbm90IGEgU3RyaW5nIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFN0cmluZyB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBVcHBlcmNhc2VkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nX3VwcGVyY2FzZShzdHIpIHtcbiAgICBpZiAoVC5pc19zdHJpbmcoc3RyKSkge1xuICAgICAgICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgRS50aHJvd1N0cmluZ1R5cGVFcnJvcihzdHIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgZXF1YWwgaW4gbGVuZ3RoIHRvIHRoZSBsZW5ndGggb2YgdGhlIHJlc3VsdCBvZiBjb252ZXJ0aW5nIHRoaXMgb2JqZWN0IHRvIGEgc3RyaW5nLlxuICogVGhlIHJlc3VsdCBpcyBhIHN0cmluZyB2YWx1ZSwgbm90IGEgU3RyaW5nIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFN0cmluZyB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBMb3dlcmNhc2VkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nX2xvd2VyY2FzZShzdHIpIHtcbiAgICBpZiAoVC5pc19zdHJpbmcoc3RyKSkge1xuICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgRS50aHJvd1N0cmluZ1R5cGVFcnJvcihzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdHJpbmdfdHJpbSxcbiAgICBzdHJpbmdfY2FwaXRhbGl6ZSxcbiAgICBzdHJpbmdfcGF0dGVybixcbiAgICBzdHJpbmdfdXBwZXJjYXNlLFxuICAgIHN0cmluZ19sb3dlcmNhc2UsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3N0cmluZy9zdHJpbmcuanMiXSwic291cmNlUm9vdCI6IiJ9