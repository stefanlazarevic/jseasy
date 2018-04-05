const is_boolean = require('../is_boolean');

describe('Testing Boolean object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_boolean()).toBe(false);
    });

    it('Returns true if a value is a boolean.', () => {
        expect(is_boolean(true)).toBe(true);
        expect(is_boolean(false)).toBe(true);
    });

    it('Returns false if a value is not a boolean.', () => {
        expect(is_boolean(0)).toBe(false);
        expect(is_boolean(1)).toBe(false);
    });
});
