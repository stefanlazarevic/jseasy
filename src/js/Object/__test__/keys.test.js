const keys = require('../keys');

describe('', () => {
    const person = {
        name: 'Stefan',
        address: {
            city: 'Belgrade',
            area: {
                name: 'Cukarica',
                postal: 11250
            }
        }
    };

    it('Returns empty array if object is not provided.', () => {
        expect(keys()).toEqual([]);
    });

    it('Returns array with all letter positions if string is passed.', () => {
        expect(keys('abc')).toEqual(['0', '1', '2']);
    });

    it('Returns array with value positions if array is passed.', () => {
        expect(keys([1, 2, 3])).toEqual(['0', '1', '2']);
    });

    it('Returns array with keys from object when passed.', () => {
        expect(keys(person)).toEqual(['name', 'address']);
    });
});
