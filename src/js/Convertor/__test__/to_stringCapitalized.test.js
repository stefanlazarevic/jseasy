const to_stringCapitalized = require('../to_stringCapitalized');

describe('', () => {
    it('Should return empty string if no arguments provided.', () => {
        expect(to_stringCapitalized()).toBe('');
    });

    it('Should return capitalized string when passed.', () => {
        expect(to_stringCapitalized('stefan')).toBe('Stefan');
    });

    it('Should convert to string and capitalize if argument is not a string', () => {
        expect(to_stringCapitalized(true)).toBe('True');
        expect(to_stringCapitalized(null)).toBe('Null');
        expect(to_stringCapitalized(undefined)).toBe('Undefined');
    });
});
