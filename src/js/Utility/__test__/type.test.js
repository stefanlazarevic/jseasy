const typeOf = require('../typeOf');

describe('Testing type getter.', () => {
    it('Should return type of an provided value.', () => {
        expect(typeOf({})).toBe("object");
        expect(typeOf([])).toBe("array");
        expect(typeOf(() => {})).toBe("function");
        expect(typeOf(false)).toBe("boolean");
        expect(typeOf("ok")).toBe("string");
        expect(typeOf(null)).toBe("null");
        expect(typeOf(void 0)).toBe("undefined");
        expect(typeOf(10)).toBe("number");
        expect(typeOf(/abc/)).toBe("regexp");
        expect(typeOf(NaN)).toBe('nan');
    });
});
