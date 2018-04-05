const is_number = require('../is_number');

describe('Testing Number object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_number()).toBe(false);
    });

    it('Returns false if a value is `NaN`.', () => {
        expect(is_number(NaN)).toBe(false);
    });

    it('Returns true if a value is a number.', () => {
        expect(is_number(10)).toBe(true);
        expect(is_number(42.22)).toBe(true);
    });

    it('Returns false if a value is not a number.', () => {
        expect(is_number('10')).toBe(false);
    });
});
