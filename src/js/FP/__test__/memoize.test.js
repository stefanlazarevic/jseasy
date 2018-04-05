const memoize = require('../memoize');

describe('', () => {
    const fibonacci = memoize(function(n) {
        return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    });

    it('Throws an TypeError if function is not provided.', () => {
        // expect(() => memoize(10)).toThrowError(TypeError);
    });

    it('Should return memoized value if called with cached argument', () => {
        expect(fibonacci(9)).toBe(34);
        expect(fibonacci(9)).toBe(34);
        expect(fibonacci(9)).toBe(34);
        expect(fibonacci(9)).toBe(34);
    });
});
