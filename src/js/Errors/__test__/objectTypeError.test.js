const throwObjectTypeError = require('../objectTypeError');

describe('Testing error throwers', () => {
    it('Should compose to new error function', () => {
        expect(typeof throwObjectTypeError).toBe("function");
    });

    it('Should throw TypeError', () => {
        expect(() => throwObjectTypeError(10)).toThrowError(TypeError);
    });
});
