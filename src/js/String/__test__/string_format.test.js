const string_format = require('../string_format');

describe('Testing string_format functionality.', () => {
    it('Should return function if only pattern is provided.', () => {
        expect(typeof string_format('xxx-xxx')).toBe('function');
    });

    it('Throws TypeError if pattern is invalid.', () => {
        expect(() => string_format(10, [])).toThrowError(TypeError);
    });

    it('Return replaced string if both arguments are right.', () => {
        expect(string_format('(xxx) xxx-xxxx', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe('(012) 345-6789');
        expect(string_format('+x (x) x-x', ['381', '62', '555', '333'])).toBe('+381 (62) 555-333');
        expect(string_format('+x (x) x-x', ['381', '62', '555', '333'])).toBe('+381 (62) 555-333');
        expect(string_format('x/x/x/x', '1234')).toBe('1/2/3/4');
        expect(string_format('xxx-xxx')(123456)).toBe('123-456');
        expect(string_format('xxxx-xxxx-xxxx-xxxx', 4242424242424242)).toBe('4242-4242-4242-4242');
        expect(string_format('xxx-xxx', [])).toBe("-");
    });
});
