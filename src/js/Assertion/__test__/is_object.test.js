const is_object = require('../is_object');

describe('Testing Object object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_object()).toBe(false);
    });

    it('Returns false if a value is array.', () => {
        expect(is_object([])).toBe(false);
    });

    it('Returns true if a value is object.', () => {
        function Coordinate(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }

        expect(is_object(new Coordinate(10, 10))).toBe(true);
        expect(is_object({})).toBe(true);
    });

    it('Returns false if a value is not an object.', () => {
        expect(is_object(10)).toBe(false);
        expect(is_object(NaN)).toBe(false);
        expect(is_object(null)).toBe(false);
    });
});
