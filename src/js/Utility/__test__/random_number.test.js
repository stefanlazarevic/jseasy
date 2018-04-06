const random_number = require('../random_number');

describe('Testing random number generator.', () => {
    it('Returns number between 0 and 100 when no arguments are passed.', () => {
        const n = random_number();
        expect(n).toBeGreaterThanOrEqual(0);
        expect(n).toBeLessThanOrEqual(100);
    });

    it('Returns number between 0 and n when only one argument is passed.', () => {
        const n = random_number(10);
        expect(n).toBeGreaterThanOrEqual(0);
        expect(n).toBeLessThanOrEqual(10);
    });

    it('Returns number between n and m when both arguments are passed.', () => {
        const n = random_number(10, 12);
        expect(n).toBeGreaterThanOrEqual(10);
        expect(n).toBeLessThanOrEqual(12);
    });

    it('Returns different numbers on each function call.', () => {
        const n = random_number(500);
        expect(n).not.toBe(random_number(500));
    });
});
