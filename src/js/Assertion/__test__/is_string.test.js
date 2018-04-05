const is_string = require('../is_string');

describe('Testing String object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_string()).toBe(false);
    });

    it('Returns true if a value is a string.', () => {
        expect(is_string([].toString())).toBe(true);
        expect(is_string("Hello World")).toBe(true);
        expect(is_string(String('ok'))).toBe(true);
    });

    it('Returns false if a value is not a string.', () => {
        expect(is_string(10)).toBe(false);
        expect(is_string(new String(10))).toBe(false);
    });
});
