const length = require('../length');

describe('', () => {
    it('Should return 0 if no argument passed or argument does not have length property.', () => {
        expect(length()).toBe(0);
        expect(length({})).toBe(0);
        expect(length(15)).toBe(0);
    });
});
