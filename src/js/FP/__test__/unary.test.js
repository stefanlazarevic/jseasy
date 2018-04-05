const unary = require('../unary');

describe('', () => {
    it('Throws error if function is not provided.', () => {
        expect(() => unary(10)).toThrowError(TypeError);
    });

    it('Should create unary version of a function.', () => {
        expect(typeof unary(a => a)).toBe('function');
    });

    it('Unary function should accept only first argument.', () => {
        expect(["1", "2", "3"].map(unary(parseInt))).toEqual([1, 2, 3]);
    });
});
