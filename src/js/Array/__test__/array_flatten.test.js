const array_flatten = require('../array_flatten');

describe('Testing array shuffle functionality.', () => {
    const arr = [1, [2], [3, [[4]]]];

    it('Returns empty array if non array is provided.', () => {
        expect(array_flatten()).toEqual([]);
    });

    it('Returns deeply flatten array if there is no flag provided.', () => {
        expect(array_flatten(arr)).toEqual([1, 2, 3, 4]);
    });

    it('Returns one level flatten array if true flag is provided.', () => {
        expect(array_flatten(arr, true)).toEqual([1, 2, 3, [[4]]]);
    });
});
