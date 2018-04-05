const to_array = require('../to_array');

describe('Testing to array conversion.', () => {
    it('Returns empty array if no arguments provided.', () => {
        expect(to_array()).toEqual([]);
        expect(to_array(undefined)).toEqual([]);
    });

    it('Returns array clone if array provided.', () => {
        const arr = [1, 2, 3];

        expect(to_array(arr)).toEqual([1, 2, 3]);
        expect(to_array(arr) === arr).toBe(false);
    });

    it('Returns array created from ObjectWithLength', () => {
        function convertArguments() {
            return to_array(arguments);
        }

        expect(to_array({0: 10, 1: 20, length: 2})).toEqual([10, 20]);
        expect(to_array("abc")).toEqual(['a', 'b', 'c']);
        expect(convertArguments(1, 2, 3)).toEqual([1, 2, 3]);
    });
});
