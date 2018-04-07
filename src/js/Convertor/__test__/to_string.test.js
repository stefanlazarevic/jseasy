const to_string = require('../to_string');

describe('Testing to string conversion.', () => {
    it('Returns empty string if no arguments provided.', () => {
        expect(to_string()).toBe('');
    });

    it('Returns string representation of primitive data types.', () => {
        expect(to_string(10)).toBe('10');
        expect(to_string('10')).toBe('10');
        expect(to_string(null)).toBe('null');
        expect(to_string(undefined)).toBe('undefined');
        expect(to_string(true)).toBe('true');
        expect(to_string(Symbol('x'))).toBe('Symbol(x)');
        expect(to_string(/abc/g)).toBe('/abc/g');
    });

    it('Returns array created from ObjectWithLength', () => {
        expect(to_string({a: 10})).toBe("{\"a\":10}");
        expect(to_string([1, 2, 3])).toBe("[1,2,3]");
    });
});
