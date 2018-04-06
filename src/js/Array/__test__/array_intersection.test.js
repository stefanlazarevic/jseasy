const array_intersection = require('../array_intersection');

describe('Testing array intersection functionality.', () => {
    it('Returns empty array if no arguments provided.', () => {
        expect(array_intersection()).toEqual([]);
    });

    it('Returns empty array if one of the provided arguments is not an array.', () => {
        expect(array_intersection([1, 2], [2, 3], 3)).toEqual([]);
    });

    it('Returns values that intersects.', () => {
        expect(array_intersection([1, 2], [2, 3])).toEqual([2]);
    });

    it('Returns empty array if one of the arrays are empty.', () => {
        expect(array_intersection([], [1, 2], [2, 3])).toEqual([]);
    });
});
