/**
 * @module Errors
 * @author Stefan Lazarevic <stefanlazarevic.contact@gmail.com>
 * @since 0.1.0
 */
const throwTypeError = require('./typeError');
const throwObjectTypeError = require('./objectTypeError');
const functionTypeError = require('./functionTypeError');
const throwStringTypeError = require('./stringTypeError');

module.exports = {
    throwTypeError,
    throwObjectTypeError,
    functionTypeError,
    throwStringTypeError
};
