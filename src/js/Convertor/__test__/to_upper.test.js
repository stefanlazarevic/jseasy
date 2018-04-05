const to_upper = require('../to_upper');

describe('Testing functional string uppercase', () => {
    it('Throws TypeError if string is not provided.', () => {
        expect(() => to_upper()).toThrowError(TypeError);
    });

    it('Returns uppercased string when provided string.', () => {
        expect(to_upper('stefan')).toBe('STEFAN');
    });
});
