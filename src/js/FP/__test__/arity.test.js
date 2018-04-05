const arity = require('../arity');

describe('', () => {
    it('Returns 0 (zero) if a non function is provided.', () => {
        expect(arity()).toBe(0);
        expect(arity(10)).toBe(0);
        expect(arity([1, 2, 3])).toBe(0);
    });

    it('Returns number of arguments if a function is passed.', () => {
        const sum = (a, b) => a + b;

        expect(arity(sum)).toBe(2);
    });
});
