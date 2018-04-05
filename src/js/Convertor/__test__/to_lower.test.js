const to_lower = require('../to_lower');

describe('Testing functional string lowercase', () => {
    it('Throws TypeError if string is not provided.', () => {
        expect(() => to_lower()).toThrowError(TypeError);
    });

    it('Returns lowercased string when provided string.', () => {
        expect(to_lower('STEFAN')).toBe('stefan');
    });
});
