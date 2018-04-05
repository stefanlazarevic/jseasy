const is_integer = require('../is_integer');

describe('Testing integer number assertion.', () => {
    it('Returns false if no argument is passed.', () => {
        expect(is_integer()).toBe(false);
    });

    it('Returns true if number is integer', () => {
        expect(is_integer(0)).toBe(true);
        expect(is_integer(4)).toBe(true);
        expect(is_integer(-44)).toBe(true);
        expect(is_integer(4.0)).toBe(true);
    });

    it('Returns false if number is not an integer', () => {
        expect(is_integer(4.0001)).toBe(false);
        expect(is_integer(-41.22)).toBe(false);
    });
});
