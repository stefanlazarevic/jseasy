const curry = require('../curry');

describe('', () => {
    const sum = (a, b) => a + b;

    it('Throws an TypeError if function is not provided.', () => {
        expect(() => curry(10)).toThrowError(TypeError);
    });

    it('Returns function if not enough arguments provided.', () => {
        expect(typeof curry(sum)).toBe('function');
        expect(typeof curry(sum, 2)).toBe('function');
    });

    it('Returns value after all arguments provided in each function call.', () => {
        expect(curry(sum)(2)(3)).toBe(5);
    });
});
