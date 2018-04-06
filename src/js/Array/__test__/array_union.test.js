const array_union = require('../array_union');

describe('Testing array union functionality.', () => {
    it('Returns empty array if no arguments are provided.', () => {
        expect(array_union()).toEqual([]);
    });

    it('Returns copy of an array if only one is provided.', () => {
        const arr = [1, 2, 3];
        const copy = array_union(arr);

        expect(arr).toEqual(copy);
        expect(arr === copy).toBe(false);
    });

    it('Combines two lists into the set of all their elements.', () => {
        const list = [1, 2, 3];
        const list2 = [2, 3, 4];

        expect(array_union(list, list2)).toEqual([1, 2, 3, 4]);
    });
});
