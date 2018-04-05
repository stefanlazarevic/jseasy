const is_regexp = require('../is_regexp');

describe('Testing RegExp object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_regexp()).toBe(false);
    });

    it('Returns true if a value is a regexp.', () => {
        expect(is_regexp(/abc/g)).toBe(true);
        expect(is_regexp(new RegExp('abc', 'g'))).toBe(true);
    });

    it('Returns false if a value is not a regexp.', () => {
        expect(is_regexp('abc')).toBe(false);
    });
});
