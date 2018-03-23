const E = require('./errors');

describe('Testing error throwers', () => {

    it('Should compose to new error function', () => {
        expect(typeof E.throwTypeError('number')).toBe("function");
    });

    it('Should throw TypeError', () => {
        expect(() => E.throwTypeError('number')('stefan')).toThrowError(TypeError);
        expect(() => E.throwStringTypeError('string', 10)).toThrowError(TypeError);
        expect(() => E.throwStringTypeError(10)).toThrowError(TypeError);
    });

});
