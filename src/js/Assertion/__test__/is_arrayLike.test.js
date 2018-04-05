const is_arrayLike = require('../is_arrayLike');

describe('Testing array-like object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_arrayLike()).toBe(false);
    });

    it('Returns true if a value is array-like.', () => {
        const takeArguments = () => arguments;

        expect(is_arrayLike([])).toBe(true);
        expect(is_arrayLike(takeArguments())).toBe(true);
        expect(is_arrayLike({ length: 1 })).toBe(true);
        expect(is_arrayLike("Hello World")).toBe(true);
    });

    it('Returns false if a value is not an array-like.', () => {
        expect(is_arrayLike({a: 10})).toBe(false);
        expect(is_arrayLike({length: -1})).toBe(false);
        expect(is_arrayLike({length: Number.MAX_SAFE_INTEGER + 1})).toBe(false);
    });
});
