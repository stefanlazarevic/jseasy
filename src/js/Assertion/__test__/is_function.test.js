const is_function = require('../is_function');

describe('Testing Function object assertion.', () => {
    const add = (a, b) => a + b; // Example function.

    function Person (name) {
        this.name = name;
    }

    it('Returns false if no value provided.', () => {
        expect(is_function()).toBe(false);
    });

    it('Returns true if a value is a function.', () => {
        expect(is_function(add)).toBe(true);
        expect(is_function(() => {})).toBe(true);
        expect(is_function(function () {})).toBe(true);
    });

    it('Returns false if a value is not a function.', () => {
        expect(is_function(new Person('Stefan Lazarevic'))).toBe(false);
        expect(is_function(12)).toBe(false);
    });
});
