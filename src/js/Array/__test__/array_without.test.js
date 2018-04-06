const array_without = require('../array_without');

describe('Testing array without functionality.', () => {
    it('Returns empty array when there are no arguments.', () => {
        expect(array_without()).toEqual([]);
    });

    it('Returns copy of initial array if no value is provided.', () => {
        const arr = [1, 2, 3];
        const without = array_without(arr);

        expect(without).toEqual(arr);
        expect(arr === without).toBe(false);
    });

    it('Returns array without provided values to exclude.', () => {
        const arr = [1, 2, 3];
        expect(array_without(arr, 1, 2)).toEqual([3]);
        expect(array_without(arr, 1, 2, 3)).toEqual([]);
    });
});
