const is_date = require('../is_date');

describe('Testing Date object assertion.', () => {
    const date = new Date();

    it('Returns false if no value provided.', () => {
        expect(is_date()).toBe(false);
    });

    it('Returns true if a value is Date object.', () => {
        expect(is_date(date)).toBe(true);
    });

    it('Returns false if a value is not a Date object.', () => {
        expect(is_date(new Date().getYear())).toBe(false);
    });
});
