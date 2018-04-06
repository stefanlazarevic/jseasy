const array_last = require('../array_last');

describe('Testing array first functionality.', () => {
    it('Returns empty array if no arguments are provided', () => {
        expect(array_last()).toEqual([]);
    });

    it('Returns function if only first argument as number is provided.', () => {
        expect(typeof array_last(4)).toBe('function');
    });

    it('Returns last value as plain if only array is provided.', () => {
        expect(array_last([1, 2, 3])).toBe(3);
    });

    it('Returns last value as array if array and true flag are provided.', () => {
        expect(array_last([1, 2, 3], true)).toEqual([3]);
    });

    it('Returns n values if both number and array are provided.', () => {
        expect(array_last(2, [1, 2, 3])).toEqual([2, 3]);
    });
});
