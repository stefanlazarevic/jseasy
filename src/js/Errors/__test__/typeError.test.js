const throwTypeError = require('../typeError');

describe('Testing error throwers', () => {
    it('Should compose to new error function', () => {
        expect(typeof throwTypeError('number')).toBe("function");
    });

    it('Should throw TypeError', () => {
        expect(() => throwTypeError('number')('stefan')).toThrowError(TypeError);
    });
});
