const A = require('./array');

describe('Testing array manipulation functions', () => {
    const numberArray = [1, 2, 3, 4, 5, 6];
    const letterArray = ['s', 't', 'e', 'f', 'a', 'n'];
    const randomArray = [0, "stefan", [1, 2, 3], true, false, {a: 10, b: 15}];

    it('Return the first or the first n elements from the list.', () => {
        const getFirstTwo = A.array_first(2);

        expect(A.array_first()).toEqual([]);
        expect(A.array_first([])).toEqual([]);
        expect(A.array_first(2)).toBeInstanceOf(Function);
        expect(A.array_first(numberArray)).toBe(1);
        expect(A.array_first(letterArray, true)).toEqual(['s']);
        expect(A.array_first(1, randomArray)).toEqual([0]);
        expect(A.array_first(2, randomArray)).toEqual([0, "stefan"]);
        expect(A.array_first(4)(letterArray)).toEqual(['s', 't', 'e', 'f']);
        expect(A.array_first(5)(2)).toEqual([]);
        expect(A.array_first(5)([])).toEqual([]);
        expect(getFirstTwo(numberArray)).toEqual([1, 2]);
    });

    it('Returns everything but the last entry or last n entries of the array.', () => {
        expect(A.array_initial()).toEqual([]);
        expect(A.array_initial([])).toEqual([]);
        expect(A.array_initial(numberArray)).toEqual([1, 2, 3, 4, 5]);
        expect(A.array_initial(-1, numberArray)).toEqual([1, 2, 3, 4, 5]);
        expect(A.array_initial(3, numberArray)).toEqual([1, 2, 3]);
        expect(A.array_initial(3)([])).toEqual([]);
        expect(A.array_initial(3)(randomArray)).toEqual([0, "stefan", [1, 2, 3]]);
    });

    it('Returns the last or last n elements of an array.', () => {
        const getLastThree = A.array_last(3);

        expect(A.array_last()).toEqual([]);
        expect(A.array_last([])).toEqual([]);
        expect(A.array_last(numberArray)).toBe(6);
        expect(A.array_last(numberArray, true)).toEqual([6]);
        expect(A.array_last(1, numberArray)).toEqual([6]);
        expect(A.array_last(2, numberArray)).toEqual([5, 6]);
        expect(A.array_last(2, [])).toEqual([]);
        expect(A.array_last(2)([])).toEqual([]);
        expect(getLastThree(numberArray)).toEqual([4, 5, 6]);
    });

    it('Returns the rest of the elements in an array.', () => {
        expect(A.array_rest()).toEqual([]);
        expect(A.array_rest([])).toEqual([]);
        expect(A.array_rest(2, [])).toEqual([]);
        expect(A.array_rest(numberArray)).toEqual([2, 3, 4, 5, 6]);
        expect(A.array_rest(3, numberArray)).toEqual([4, 5, 6]);
        expect(A.array_rest(3)(numberArray)).toEqual([4, 5, 6]);
    });

    it('Returns a copy of the array with all falsy values removed.', () => {
        expect(A.array_compact()).toEqual([]);
        expect(A.array_compact([])).toEqual([]);
        expect(A.array_compact(randomArray)).toEqual(["stefan", [1, 2, 3], true, {a: 10, b: 15}])
    });

    it('Flattens a nested array, If you pass shallow, the array will only be flattened a single level.', () => {
        expect(A.array_flatten()).toEqual([]);
        expect(A.array_flatten([])).toEqual([]);
        expect(A.array_flatten([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
        expect(A.array_flatten([1, [2], [3, [[4]]]], true)).toEqual([1, 2, 3, [[4]]]);
        expect(A.array_flatten([1, ['s', 't'], [[3]], [[4, 5], 6]])).toEqual([1, 's', 't', 3, 4, 5, 6]);
        expect(A.array_flatten([1, ['s', 't'], [[3]], [[4, 5], 6]], true)).toEqual([1, 's', 't', [3], [4, 5], 6]);
    });

    it('Returns a copy of the array with all instances of the values removed.', () => {
        expect(A.array_without(12)).toEqual([]);
        expect(A.array_without([1, 2, 3, 4, 5], 2, 4)).toEqual([1, 3, 5]);
        expect(A.array_without([1, 2, 2, 4, 3, 5, 5, 6, 7, 6], 2, 4, 5, 6)).toEqual([1, 3, 7]);
    });

    it('Produces a duplicate-free version of the array.', () => {
        expect(A.array_unique([1, 2, 2, 3, 4, 3, 1, 5, 5, 7, 6, 6])).toEqual([1, 2, 3, 4, 5, 7, 6]);
    });

    it('Computes the union of the passed-in arrays or values', () => {
        expect(A.array_union([1, 2, 3], [101, 2, 1, 10], [2, 1])).toEqual([1, 2, 3, 101, 10]);
        expect(A.array_union(1, 2, [3, 2], 4, [2, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('Computes the list of values that are the intersection of all the arrays.', () => {
        expect(A.array_intersection()).toEqual([]);
        expect(A.array_intersection([])).toEqual([]);
        expect(A.array_intersection([1, 2, 3])).toEqual([1, 2, 3]);
        expect(A.array_intersection(12)).toEqual([12]);
        expect(A.array_intersection([1, 2, 3], [101, 2, 1, 10], [2, 1])).toEqual([1, 2]);
    });

    it('Returns a shuffled copy of the list.', () => {
        expect(A.array_shuffle(numberArray)).not.toEqual(numberArray);
        expect(A.array_shuffle(12)).toEqual([]);
    });

    // it('', () => {
    // });
});
