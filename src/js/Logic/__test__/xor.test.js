const xor = require('../xor');

describe('Testing logical operator xor.', () => {
    it('Returns false if both arguments are truthy.', () => {
        expect(xor(true, true)).toBe(false);
    });

    it('Returns true if one of the arguments is truthy.', () => {
        expect(xor(true, false)).toBe(true);
        expect(xor(false, true)).toBe(true);
    });

    it('Returns false if both arguments are falsy.', () => {
        expect(xor(false, false)).toBe(false);
    });

    it('Returns false if no arguments are provided.', () => {
        expect(xor()).toBe(false);
    });
});
