const is_json = require('../is_json');

describe('Testing JSON string object assertion.', () => {
    const me = { first: "Stefan", last: "Lazarevic" };

    it('Returns false if no value provided.', () => {
        expect(is_json()).toBe(false);
    });

    it('Returns true if a value is a JSON string.', () => {
        expect(is_json(JSON.stringify(me))).toBe(true);
    });

    it('Returns false if a value is not a string.', () => {
        expect(is_json(10)).toBe(false);
    });

    it('Returns false if a value is not a valid JSON string.', () => {
        expect(is_json("{a: 10, b: '12'}")).toBe(false);
    });
});
