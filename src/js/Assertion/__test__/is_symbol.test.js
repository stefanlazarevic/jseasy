const is_symbol = require('../is_symbol');

describe('Testing Symbol object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_symbol()).toBe(false);
    });

    it('Returns true if a value is a symbol.', () => {
        expect(is_symbol(Symbol('x'))).toBe(true);
    });

    it('Returns false if a value is not a symbol.', () => {
        expect(is_symbol(true)).toBe(false);
        expect(is_symbol('x')).toBe(false);
    });
});
