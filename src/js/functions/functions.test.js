const F = require('./functions');
const { string_capitalize } = require('../string/string');
const { object_pluck } = require('../object/object');

describe('Testing util functions', () => {
    function sum(numberOne, numberTwo, numberThree) {
        return numberOne + numberTwo + numberThree;
    }

    it('Should curry a function.', () => {
        const sumWithFive = F.curry(sum, 2, 3);

        expect(sumWithFive(5)).toBe(10);
        expect(() => F.curry(10)).toThrowError(TypeError);
    });

    it('Should compose functions', () => {
        const person = {
            name: 'stefan lazarevic',
        };
        const getCapitalizedNameFromObject = F.compose(string_capitalize, F.curry(object_pluck, 'name'));

        expect(getCapitalizedNameFromObject(person)).toBe('Stefan lazarevic');
    });

    it('Should run function only once', () => {
        function returnMyName() {
            return "Stefan Lazarevic";
        }

        const executeOnce = F.once(returnMyName);

        expect(executeOnce()).toBe("Stefan Lazarevic");
        expect(executeOnce()).not.toBe("Stefan Lazarevic");
        expect(executeOnce()).toBe(undefined);
    });
});
