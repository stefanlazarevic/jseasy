const trim = require('../trim');

describe('', () => {
    it('Throws an error if no or invalid argument passed', () => {
        expect(() => trim()).toThrowError(TypeError);
        expect(() => trim(124)).toThrowError(TypeError);
    });

    it('Returns trimmed string', () => {
        expect(trim('  Stefan Lazarevic   ')).toBe('Stefan Lazarevic');
    });
});
