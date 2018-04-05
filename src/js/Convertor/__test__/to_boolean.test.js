const to_boolean = require('../to_boolean');

describe('Testing to boolean conversion.', () => {
    it('Returns false if no arguments provided.', () => {
        expect(to_boolean()).toBe(false);
    });

    it('Returns true for truthy values.', () => {
        expect(to_boolean({})).toBe(true);
        expect(to_boolean([])).toBe(true);
        expect(to_boolean("Hello")).toBe(true);
        expect(to_boolean(true)).toBe(true);
        expect(to_boolean(10)).toBe(true);
    });

    it('Returns false for falsy values.', () => {
        expect(to_boolean(0)).toBe(false);
        expect(to_boolean('')).toBe(false);
        expect(to_boolean(null)).toBe(false);
        expect(to_boolean(void 0)).toBe(false);
        expect(to_boolean(NaN)).toBe(false);
        expect(to_boolean(false)).toBe(false);
    });
});
