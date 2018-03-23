const U = require('./utility');

describe('Testing utility functions', () => {

    it('Should return random number between 0 and 100', () => {
        expect(U.random_number()).not.toBe(U.random_number());
        expect(U.random_number(10)).toBeLessThanOrEqual(10);
        expect(U.random_number(10, 20)).toBeLessThanOrEqual(20);
        expect(U.random_number(10, 20)).toBeGreaterThanOrEqual(10);
    });

    it('Should convert object or string to array.', () => {
        expect(U.to_array("word")).toEqual(['w', 'o', 'r', 'd']);
        expect(U.to_array({0: 10, 1: 20, length: 2})).toEqual([10, 20]);
    });

    it('Should check for value in array', () => {
        expect(U.in_array([1, 2, 3], 1)).toBe(true);
        expect(U.in_array([1, 2, 3], 5)).toBe(false);
        expect(U.in_array(5, 5)).toBe(false);
    });

    it('Should return type of an provided value.', () => {
        expect(U.type("word")).toBe("string");
        expect(U.type({0: 10, 1: 20, length: 2})).toBe("object");
        expect(U.type(10)).toBe("number");
        expect(U.type([1, 2, 3])).toBe("array");
        expect(U.type(NaN)).toBe("NaN");
        expect(U.type(function(){})).toBe("function");
        expect(U.type(null)).toBe("null");
        expect(U.type(void 0)).toBe("undefined");
    });

    it('Should return length of array, string or object', () => {
        expect(U.length()).toBe(0);
        expect(U.length([2, 4, 6])).toBe(3);
        expect(U.length("Hello World")).toBe(11);
        expect(U.length({a: 5})).toBe(1);
        expect(U.length({})).toBe(0);
        expect(U.length(true)).toBe(0);
    });
});
