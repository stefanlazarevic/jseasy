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
    return typeof value === 'symbol';
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
    is_array,
    is_object,
    is_string,
    is_number,
    is_boolean,
    is_function,
    is_null,
    is_undefined,
    is_defined,
    is_NaN,
    is_date,
    is_json,
    is_symbol,
    is_regexp
};
