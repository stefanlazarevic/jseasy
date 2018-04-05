const is_string = require('./is_string');
/**
 * A function that determines if a value is valid JSON string.
 *
 * @param {*} value The value to check.
 * @return {Boolean} true if the value is a valid JSON string, otherwise false.
 * @since 0.1.0
 * @example
 * const ajaxData = {
 *     url: www.linkedin.com/in/stefan-lazarevic
 * };
 *
 * is_json(JSON.stringify(ajaxData)); // => true
 * is_json("Hello World"); // => false
 * is_json(ajaxData); // => false
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

module.exports = is_json;
