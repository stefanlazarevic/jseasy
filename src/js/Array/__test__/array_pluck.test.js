const array_pluck = require('../array_pluck');

describe('Testing array pluck functionality.', () => {
    it('Returns an empty array if no arguments are provided.', () => {
        expect(array_pluck()).toEqual([]);
    });

    it('Returns empty array if first argument is not a string. ', () => {
        expect(array_pluck([], [])).toEqual([]);
    });

    it('Returns a empty array if second argument is not an array.', () => {
        expect(array_pluck('name', {})).toEqual([]);
    });

    it('Returns a function if only key is provided.', () => {
        expect(typeof array_pluck('name')).toBe('function');
    });

    it('Returns all plucked values from objects in array at provided key path.', () => {
        const names = [{name: 'Stefan'}, {name: 'Milica'}, {deep: {name: 'Andjela'}}];

        expect(array_pluck('name', names)).toEqual(['Stefan', 'Milica']);
        expect(array_pluck('name')(names)).toEqual(['Stefan', 'Milica']);
        expect(array_pluck('deep.name')(names)).toEqual(['Andjela']);
        expect(array_pluck('deep.name')()).toEqual([]);
    });


});
