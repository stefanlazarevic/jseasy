const not = require('../not');

describe("Testing logical operator 'not'.", () => {
    it('Returns false if value is thruthy.', () => {
        expect(not(true)).toBe(false);
        expect(not(1)).toBe(false);
    });

    it('Returns true if value is falsy.', () => {
        expect(not(false)).toBe(true);
        expect(not(0)).toBe(true);
    });

    it('Returns true if no value is provided.', () => {
        expect(not()).toBe(true);
    });
});
