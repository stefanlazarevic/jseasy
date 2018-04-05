const throwStringTypeError = require('../stringTypeError');

describe('Testing error throwers', () => {
    it('Should compose to new error function', () => {
        expect(typeof throwStringTypeError).toBe("function");
    });

    it('Should throw TypeError', () => {
        expect(() => throwStringTypeError(10)).toThrowError(TypeError);
    });
});
