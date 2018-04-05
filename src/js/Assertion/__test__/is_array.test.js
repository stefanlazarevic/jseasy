const is_array = require('../is_array');

describe('Testing array object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_array()).toBe(false);
    });

    it('Returns true if a value is array.', () => {
        expect(is_array([])).toBe(true);
        expect(is_array([1, 2, 3])).toBe(true);
    });

    it('Returns false if a value is not an array.', () => {
        expect(is_array(10)).toBe(false);
    });

    it('Returns false if a value is `arguments`. (Array like object) ', () => {
        function takeArguments() { return is_array(arguments) }

        expect(takeArguments(1, 2, 3)).toBe(false);
    });
});
