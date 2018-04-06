const values = require('../values');

describe('', () => {
    it('Returns empty array if non object is given.', () => {
        expect(values()).toEqual([]);
    });

    it('Returns values from an object when passed.', () => {
        const testObject = {
            href: '#',
            open: false
        };

        expect(values(testObject)).toEqual(['#', false]);
    });
});
