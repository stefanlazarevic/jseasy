const is_nan = require('../is_nan');

describe('Testing NaN object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_nan()).toBe(false);
    });

    it('Returns false if a value is not `NaN`.', () => {
        expect(is_nan(10)).toBe(false);
    });

    it('Returns true if a value is `NaN`.', () => {
        expect(is_nan(1 / 'a')).toBe(true);
    });
});
