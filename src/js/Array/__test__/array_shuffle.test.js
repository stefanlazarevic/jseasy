const array_shuffle = require('../array_shuffle');

describe('Testing array shuffle functionality.', () => {
    it('Returns empty array if non array is provided.', () => {
        expect(array_shuffle()).toEqual([]);
    });

    it('Returns shuffled array if array is provided.', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15];
        const shuffled = array_shuffle(arr);

        expect(shuffled).not.toEqual(arr);
        expect(shuffled.length).toBe(arr.length);
    });
});
