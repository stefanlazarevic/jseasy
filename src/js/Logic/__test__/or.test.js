const or = require('../or');

describe('Testing logical operator or.', () => {
    it('Returns true if both arguments are truthy.', () => {
        expect(or(true, true)).toBe(true);
    });

    it('Returns true if one of the arguments is truthy.', () => {
        expect(or(true, false)).toBe(true);
        expect(or(false, true)).toBe(true);
    });

    it('Returns false if both arguments are falsy.', () => {
        expect(or(false, false)).toBe(false);
    });

    it('Returns false if no arguments are provided.', () => {
        expect(or()).toBe(false);
    });
});
