const is_defined = require('../is_defined');

describe('Testing value existance assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_defined()).toBe(false);
    });

    it('Returns true if a value is defined.', () => {
        expect(is_defined(false)).toBe(true);
        expect(is_defined({})).toBe(true);
        expect(is_defined([])).toBe(true);
    });

    it('Returns false if a value is not defined.', () => {
        expect(is_defined(null)).toBe(false);
        expect(is_defined(undefined)).toBe(false);
    });
});
