const in_array = require('../in_array');

describe('Testing existence of an element in array.', () => {
    const arr = [1, 2, 3];

    it('Returns false if non array is passed for computation.', () => {
        expect(in_array()).toBe(false);
    });

    it('Returns false if there is no value passed for computation.', () => {
        expect(in_array(arr)).toBe(false);
    });

    it('Returns true if a value is located inside provided array.', () => {
        expect(in_array(arr, 3)).toBe(true);
    });
});
