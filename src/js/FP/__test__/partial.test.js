const partial = require('../partial');

describe('', () => {
    const formatName = (fname, mname, lname) => `${fname} ${mname} ${lname}`;

    it('Throws an TypeError if function is not provided.', () => {
        expect(() => partial(10)).toThrowError(TypeError);
    });

    it('Returns function if not enought arguments are provided.', () => {
        expect(typeof partial(formatName, 'Stefan')).toBe('function');
        expect(typeof partial(formatName, 'Stefan', 'M')).toBe('function');
    });

    it('Returns value produced by partial applied function when all arguments are provided.', () => {
        expect(partial(formatName, 'Stefan')('M.', 'Lazarevic')).toBe('Stefan M. Lazarevic');
    });

    it('Execute function if called after partial apply but without enought arguments.', () => {
        expect(partial(formatName, 'Stefan')('M.')).toBe('Stefan M. undefined');
    });
});
