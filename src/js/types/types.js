/**
 * Determines whether the passed value is an array.
 *
 * @param {mix} value
 * @return {Boolean}
 */
function is_array(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

/**
 * Determines whether the passed value is an object.
 *
 * @param {mix} value
 * @return {Boolean}
 */
function is_object(value) {
    return value === Object(value) && !is_array(value);
}

/**
 * Determines whether the passed value is an strict string.
 *
 * @param {mix} value
 * @return {Boolean}
 */
function is_string(value) {
    return Object.prototype.toString.call(value) === '[object String]' && typeof value === 'string';
}

/**
 * Determines whether the passed value is a number.
 *
 * @param {mix} value
 * @return {Boolean}
 */
function is_number(value) {
    return Object.prototype.toString.call(value) === '[object Number]' && !is_NaN(value);
}

/**
 * Determines whether the passed value is an boolean.
 *
 * @param {mix} value
 * @returns {Boolean}
 */
function is_boolean(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]' && typeof value === 'boolean';
}

/**
 * Determines whether the passed value is an function.
 *
 * @param {mix} value
 * @returns {Boolean}
 */
function is_function(value) {
    return Object.prototype.toString.call(value) === '[object Function]' && typeof value === 'function';
}

/**
 * Determines whether the passed value is an null.
 *
 * @param {mix} value
 * @return {Boolean}
 */
function is_null(value) {
    return value === null;
}

/**
 * Determines whether the passed value is undefined.
 *
 * @param {mix} value
 * @return {Boolean}
 */
function is_undefined(value) {
    return value === void 0;
}

/**
 * Determines whether the passed value is not null or undefined.
 *
 * @param {mix} value
 * @return {Boolean}
 */
function is_defined(value) {
    return !is_null(value) && !is_undefined(value) && !is_NaN(value);
}

/**
 * Determines whether the passed value is not a number. (NaN)
 *
 * @param {mix} value
 * @return {Boolean}
 */
function is_NaN(value) {
    return value !== value;
}

/**
 * Determines whether the passed value is an Date object.
 *
 * @param {mix} value
 * @returns {Boolean}
 */
function is_date(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * Determines if a value is valid JSON string.
 *
 * @param {String} value
 * @return {Boolean}
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
};

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
    is_json
}
