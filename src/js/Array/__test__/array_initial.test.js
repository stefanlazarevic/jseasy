const array_initial = require('../array_initial');

describe('Testing array initial functionality.', () => {
    it('Returns empty array if no arguments are passed.', () => {
        expect(array_initial()).toEqual([]);
    });

    it('Returns empty new empty array if empty array is passed.', () => {
        expect(array_initial([])).toEqual([]);
    });

    it('Returns function if only number is passed.', () => {
        expect(typeof array_initial(4)).toBe('function');
    });

    it('Returns empty array if second argument is invalid or is empty array.', () => {
        expect(array_initial(3, [])).toEqual([]);
        expect(array_initial(0)([])).toEqual([]);
        expect(array_initial(3, "Hello")).toEqual([]);
    });

    it('Returns copy of an array.', () => {
        const arr = [1, 2, 3];
        const copy1 = array_initial(arr);
        const copy2 = array_initial(arr);

        expect(copy1).toEqual(copy2);
        expect(copy1 === copy2).toBe(false);
    });

    it('Returns every exept last n values in array.', () => {
        expect(array_initial(2, [1, 2, 3, 4])).toEqual([1, 2]);
        expect(array_initial(2)([1, 2, 3, 4])).toEqual([1, 2]);
        expect(array_initial(-1, [1, 2, 3, 4])).toEqual([1, 2, 3]);
    });
});
