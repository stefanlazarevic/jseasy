const throwFunctionTypeError = require('../functionTypeError');

describe('Testing error throwers', () => {
    it('Should compose to new error function', () => {
        expect(typeof throwFunctionTypeError).toBe("function");
    });

    it('Should throw TypeError', () => {
        expect(() => throwFunctionTypeError(10)).toThrowError(TypeError);
    });
});
