const S = require('./string');

describe('Testing string manipulation functions', () => {

    describe('Testin string_trim function', () => {
        it('Should trim string', () => {
            expect(S.string_trim("   stefan lazarevic ")).toBe("stefan lazarevic");
            expect(() => S.string_trim(10)).toThrowError(TypeError);
        });
    });

    describe('Testing string_capitalize function', () => {
        it('Should return string capitalized', () => {
            expect(S.string_capitalize('stefan')).toBe('Stefan');
            expect(S.string_capitalize('  stefan')).toBe('  stefan');
        });

        it('Should throw error if value is other then string.', () => {
            expect(() => S.string_capitalize(10)).toThrowError(TypeError);
            expect(() => S.string_capitalize([1, 2, 3])).toThrowError(TypeError);
        });
    });
});
