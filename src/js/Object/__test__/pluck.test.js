const pluck = require('../pluck');

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

    it('Throws TypeError if string is not provided for key path.', () => {
        expect(() => pluck()).toThrowError(TypeError);
        expect(() => pluck(12, person)).toThrowError(TypeError);
    });

    it('Throws TypeError if object is not provided for extraction.', () => {
        expect(() => pluck('name', null)).toThrowError(TypeError);
        expect(() => pluck('name')(12)).toThrowError(TypeError);
    });

    it('Returns property at given path in object.', () => {
        expect(pluck('name')(person)).toBe('Stefan');
        expect(pluck('address.area.postal', person)).toBe(11250);
    });

    it('Returns undefined if there is no value at given key path.', () => {
        expect(pluck('name', {})).toBe(undefined);
        expect(pluck('address.country.code', person)).toBe(undefined);
    });

    it('Returns a function if there is not enought arguments passed.', () => {
        expect(typeof pluck('key')).toBe('function');
    });
});
