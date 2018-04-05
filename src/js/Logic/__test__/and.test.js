const and = require('../and');

describe('Testing logical operator and.', () => {
    it('Returns true if both arguments are truthy.', () => {
        expect(and(true, true)).toBe(true);
    });

    it('Returns false if one of the arguments is truthy.', () => {
        expect(and(true, false)).toBe(false);
        expect(and(false, true)).toBe(false);
    });

    it('Returns false if both arguments are falsy.', () => {
        expect(and(false, false)).toBe(false);
    });

    it('Returns false if no arguments are provided.', () => {
        expect(and()).toBe(false);
    });
});
