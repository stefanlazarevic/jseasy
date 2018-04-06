const array_reverse = require('../array_reverse');

describe('Testing array reversing functionality.', () => {
    it('Returns empty array if no array provided as argument.', () => {
        expect(array_reverse()).toEqual([]);
    });

    it('Returns reversed array when provided.', () => {
        expect(array_reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });
});
