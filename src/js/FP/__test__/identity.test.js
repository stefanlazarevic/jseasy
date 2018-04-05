const identity = require('../identity');

describe('', () => {
    it('Should return same value as provided.', () => {
        expect(identity()).toBe(undefined);
        expect(identity(10)).toBe(10);
    });
});
