const array_rest = require('../array_rest');

describe('Testing array_rest functionality.', () => {
    const arr = [1, 2, 3, 4];

    it('Returns empty array if nothing is provided.', () => {
        expect(array_rest()).toEqual([]);
    });

    it('Returns everything except first element if no size provided.', () => {
        expect(array_rest([])).toEqual([]);
        expect(array_rest(arr)).toEqual([2, 3, 4]);
    });

    it('Returns every element from n if provided.', () => {
        expect(array_rest(2, arr)).toEqual([3, 4]);
        expect(array_rest(2, [])).toEqual([]);
    });

    it('Returns function if only n is provided.', () => {
        expect(typeof array_rest(2)).toBe('function');
    });
});
