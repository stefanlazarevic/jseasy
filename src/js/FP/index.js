/**
 * @module FP
 * @author Stefan Lazarevic <stefanlazarevic.contact@gmail.com>
 * @since 0.1.0
 */
const arity = require('./arity');
const compose = require('./compose');
const curry = require('./curry');
const identity = require('./identity');
const memoize = require('./memoize');
const once = require('./once');
const partial = require('./partial');
const pipe = require('./pipe');
const unary = require('./unary');

module.exports = {
    arity,
    compose,
    curry,
    identity,
    memoize,
    once,
    partial,
    pipe,
    unary,
};
