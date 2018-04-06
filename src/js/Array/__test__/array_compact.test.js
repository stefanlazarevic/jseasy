const array_compact = require('../array_compact');

describe('Testing array compact functionality.', () => {
    it('Returns empty array if non array is provided.', () => {
        expect(array_compact()).toEqual([]);
    });

    it('Returns new array with only truthy values if array is provided.', () => {
        const arr = [0, 1, "Hello", {}, null, [1, 2, 3], void 0];

        expect(array_compact(arr)).toEqual([1, "Hello", {}, [1, 2, 3]]);
    });
});
