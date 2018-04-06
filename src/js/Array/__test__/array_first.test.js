const array_first = require('../array_first');

describe('Testing array first functionality.', () => {
    it('Returns empty array if no arguments are provided', () => {
        expect(array_first()).toEqual([]);
    });

    it('Returns function if only first argument as number is provided.', () => {
        expect(typeof array_first(4)).toBe('function');
    });

    it('Returns first value as plain if only array is provided.', () => {
        expect(array_first([1, 2, 3])).toBe(1);
        expect(array_first([])).toEqual([]);
    });

    it('Returns first value as array if array and true flag are provided.', () => {
        expect(array_first([1, 2, 3], true)).toEqual([1]);
    });

    it('Returns n values if both number and array are provided.', () => {
        expect(array_first(2, [1, 2, 3])).toEqual([1, 2]);
    });
});
