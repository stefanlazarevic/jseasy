const is_objectLike = require('../is_objectLike');

describe('Testing Object object assertion.', () => {
    it('Returns false if no value provided.', () => {
        expect(is_objectLike()).toBe(false);
    });

    it('Returns true if a value is array.', () => {
        expect(is_objectLike([])).toBe(true);
    });

    it('Returns true if a value is object.', () => {
        function Coordinate(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }

        function takeArguments() {
            return arguments;
        }

        expect(is_objectLike(new Coordinate(10, 10))).toBe(true);
        expect(is_objectLike({})).toBe(true);
        expect(is_objectLike(takeArguments())).toBe(true);
    });

    it('Returns false if a value is not an object.', () => {
        expect(is_objectLike(10)).toBe(false);
        expect(is_objectLike(NaN)).toBe(false);
        expect(is_objectLike(null)).toBe(false);
    });
});
