const array_unique = require('../array_unique');

describe('Testing array unique functionality.', () => {
    it('Returns empty array if no arguments provided.', () => {
        expect(array_unique()).toEqual([]);
    });

    it('Returns new array with unique values.', () => {
        expect(array_unique([1, 2, 3, 2, 3, 4, 1, 5, 2])).toEqual([1, 2, 3, 4, 5]);
    });
});
