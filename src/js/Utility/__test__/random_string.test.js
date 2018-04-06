const random_string = require('../random_string');

describe('Testing random string generator.', () => {
    it('Returns random string of 20 characters if n is not passed.', () => {
        expect(random_string().length).toBe(20);
    });

    it('Returns random string of n characters if n is passed.', () => {
        expect(random_string(5).length).toBe(5);
    });

    it('Returns random string of 20 characters if n is not valid number.', () => {
        expect(random_string('5').length).toBe(20);
    });
});
