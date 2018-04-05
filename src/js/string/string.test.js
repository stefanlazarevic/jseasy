const S = require('./string');

describe('Testing string manipulation functions', () => {

    describe('Testing string_trim function', () => {
        it('Should trim string', () => {
            expect(() => S.string_trim()).toThrowError(TypeError);
            expect(S.string_trim("   stefan lazarevic ")).toBe("stefan lazarevic");
            expect(() => S.string_trim(10)).toThrowError(TypeError);
        });
    });

    describe('Testing string_capitalize function', () => {
        it('Should return string capitalized', () => {
            expect(S.string_capitalize('stefan')).toBe('Stefan');
            expect(S.string_capitalize('  stefan')).toBe('  stefan');
            expect(S.string_capitalize('STEFAN')).toBe('Stefan');
        });

        it('Should throw error if value is other then string.', () => {
            expect(() => S.string_capitalize(10)).toThrowError(TypeError);
            expect(() => S.string_capitalize([1, 2, 3])).toThrowError(TypeError);
        });
    });

    describe('Testing string_pattern function', () => {
        it('Should fill out given pattern with values from an array.', () => {
            expect(S.string_pattern('(xxx) xxx-xxxx', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe('(012) 345-6789');
            expect(S.string_pattern('+x (x) x-x', ['381', '62', '555', '333'])).toBe('+381 (62) 555-333');
            expect(S.string_pattern('xxxx-xxxx-xxxx-xxxx', 4242424242424242)).toBe('4242-4242-4242-4242');
            expect(S.string_pattern('x/x/x/x', '1234')).toBe('1/2/3/4');
            expect(S.string_pattern('x-x-x-x', ['xxx','xxx','xxx'])).toBe('xxx-xxx-xxx-');
            expect(() => S.string_pattern(10, [])).toThrowError(TypeError);
            expect(S.string_pattern('xxx-xxx', [])).toBe("-");
            expect(typeof S.string_pattern('xxx-xxx')).toBe('function');
            expect(S.string_pattern('xxx-xxx')(123456)).toBe('123-456');
        });
    });

    describe('Testing string uppercase', () => {
        expect(() => S.string_uppercase()).toThrowError(TypeError);
        expect(S.string_uppercase('stefan')).toBe('STEFAN');
    });

    describe('Testing string lowecase', () => {
        expect(() => S.string_lowercase()).toThrowError(TypeError);
        expect(S.string_lowercase('STEFAN')).toBe('stefan');
    });
});
