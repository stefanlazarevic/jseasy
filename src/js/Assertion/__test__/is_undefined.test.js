const is_undefined = require('../is_undefined');

describe('Testing Undefined object assertion.', () => {
    it('Returns true if no value provided.', () => {
        expect(is_undefined()).toBe(true);
    });

    it('Returns true if a value is undefined.', () => {
        expect(is_undefined(void 0)).toBe(true);
    });

    it('Returns false if a value is not undefined.', () => {
        expect(is_undefined(false)).toBe(false);
    });
});
