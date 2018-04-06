const random_number = require('./random_number');
const is_number = require('../Assertion/is_number');

/**
 * Generate random string n characters long. If string length is not provided default string length will be 20.
 *
 * @memberof module:Utility
 * @param {Number} [length = 20] String length.
 * @returns {String} Generated string of n characters.
 * @since 0.1.0
 * @example
 * random_string(); // => BTe29*4_tPk90+mmSj%@
 * random_string(5); // => Fe9!o
 */
function random_string(length) {
    const _length = is_number(length) ? length : 20;
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^*()-+_';
    let generatedString = '';
    const possibleCharactersCount = possibleCharacters.length - 1;
    let index = 0;

    for (index; index < _length; index++) {
        generatedString += possibleCharacters.charAt(random_number(possibleCharactersCount));
    }

    return generatedString;
}

module.exports = random_string;
