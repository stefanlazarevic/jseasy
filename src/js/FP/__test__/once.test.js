const once = require('../once');
const identity = require('../identity');

describe('', () => {
    const getName = (name) => name;

    it('Throws an TypeError if function is not provided.', () => {
        expect(() => once(10)).toThrowError(TypeError);
    });

    it('Returns wrapped function.', () => {
        expect(typeof once(getName)).toBe('function');
    });

    it('Returns value only after first call.', () => {
        const getNameOnce = once(getName);

        expect(getNameOnce('Stefan')).toBe('Stefan');
        expect(getNameOnce('Stefan')).toBe(undefined);
    });
});
