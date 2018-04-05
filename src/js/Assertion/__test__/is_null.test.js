const is_null = require('../is_null');

describe('Testing Null object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_null()).toBe(false);
    });

    it('Returns false if a value is not null.', () => {
        expect(is_null(10)).toBe(false);
    });

    it('Returns true if a value is null.', () => {
        expect(is_null(null)).toBe(true);
    });
});
