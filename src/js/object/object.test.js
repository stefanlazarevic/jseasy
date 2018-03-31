const O = require('./object');

describe('Testing object manipulation functions', () => {
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

    it('Should return value of object', () => {
        expect(O.object_pluck('name', person)).toBe('Stefan');
        expect(() => O.object_pluck()).toThrowError(TypeError);
        expect(() => O.object_pluck(12, person)).toThrowError(TypeError);
        expect(O.object_pluck('name')(person)).toBe('Stefan');
        expect(() => O.object_pluck('name')(12)).toThrowError(TypeError);
        expect(() => O.object_pluck('name', null)).toThrowError(TypeError);
        expect(O.object_pluck('name', {})).toBe(undefined);

        expect(O.object_pluck('address.area.postal', person)).toBe(11250);
        expect(O.object_pluck('address.country.code', person)).toBe(undefined);
    });

    it('Should return all object own keys', () => {
        const obj = {
            href: '#',
            open: false
        }
        expect(O.object_keys(obj)).toEqual(['href', 'open']);
        expect(O.object_keys([4, 3, 2])).toEqual(['0', '1', '2']);
        expect(O.object_keys("Stefan")).toEqual(['0', '1', '2', '3', '4', '5']);
        expect(O.object_keys()).toEqual([]);
    });

    it('Should return all object values', () => {
        const obj = {
            href: '#',
            open: false
        }
        expect(() => O.object_values()).toThrowError(TypeError);
        expect(() => O.object_values(12)).toThrowError(TypeError);
        expect(() => O.object_values([1, 2, 3])).toThrowError(TypeError);
        expect(() => O.object_values("Hello")).toThrowError(TypeError);
        expect(O.object_values(obj)).toEqual(['#', false]);
    });

    it('Should return new object with inverted properties and values.', () => {
        const person = {
            fname: 'Stefan',
            lname: 'Lazarevic',
            click: function() { console.log('ok'); },
            next: undefined
        };

        expect(() => O.object_invert()).toThrowError(TypeError);
        expect(O.object_invert(person)).toEqual({
            Stefan: 'fname',
            Lazarevic: 'lname',
        });
    });

});
