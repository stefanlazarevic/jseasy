const O = require('./object');

describe('Testing object manipulation functions', () => {
    const person = {
        name: 'stefan',
    };

    it('Should return value of object', () => {
        expect(O.object_pluck('name', person)).toBe('stefan');
        expect(() => O.object_keys()).toThrowError(TypeError);
        expect(() => O.object_pluck(12, person)).toThrowError(TypeError);
        expect(O.object_pluck('name')(person)).toBe('stefan');
        expect(() => O.object_pluck('name')(12)).toThrowError(TypeError);
        expect(() => O.object_pluck('name', null)).toThrowError(TypeError);
        expect(O.object_pluck('name', {})).toBe(undefined);
    });

});
