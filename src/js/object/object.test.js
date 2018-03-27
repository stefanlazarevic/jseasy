const O = require('./object');

describe('Testing object manipulation functions', () => {
    const person = {
        name: 'stefan',
    };

    it('Should return value of object', () => {
        expect(O.object_pluck('name', person)).toBe('stefan');
        expect(() => O.object_pluck()).toThrowError(TypeError);
        expect(() => O.object_pluck(12, person)).toThrowError(TypeError);
        expect(O.object_pluck('name')(person)).toBe('stefan');
        expect(() => O.object_pluck('name')(12)).toThrowError(TypeError);
        expect(() => O.object_pluck('name', null)).toThrowError(TypeError);
        expect(O.object_pluck('name', {})).toBe(undefined);
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

});
