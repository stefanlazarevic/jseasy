const and= require('../Logic/and');
const not = require('../Logic/not');
const is_null = require('../Assertion/is_null');
const is_undefined = require('../Assertion/is_undefined');

/**
 * A function that determines whether the passed value is not null or undefined.
 *
 * @param {*} value The value to check.
 * @return {Boolean} `true` if the value is defined, otherwise `false`.
 * @since 0.1.0
 * @example
 * const Person = {
 *     a: 10
 * };
 *
 * is_defined(Person.a); // => true
 * is_defined(Person.b); // => false
 * is_defined(void 0); // => false
 */
function is_defined(value) {
    return and(not(is_null(value)), not(is_undefined(value)));
}

module.exports = is_defined;
