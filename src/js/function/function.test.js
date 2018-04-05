const F = require('./function');
const { string_capitalize } = require('../string/string');
const { object_pluck } = require('../object/object');

describe('Testing util functions', () => {
    function sum(numberOne, numberTwo, numberThree) {
        return numberOne + numberTwo + numberThree;
    }

    it('Should create unary version of function', () => {
        expect(() => F.unary()).toThrowError(TypeError);
        expect(["1", "2", "3"].map(F.unary(parseInt))).toEqual([1, 2, 3]);
    });

    it('Should return same value', () => {
        const x = 10;
        expect(F.identity(x)).toBe(x);
    });

    it('Testing partial application function.', () => {
        const multiply = (a, b) => a * b;
        const double = F.partial(multiply, 2);

        expect(() => F.partial()).toThrowError(TypeError);
        expect(typeof F.partial(multiply)).toBe('function');
        expect(double(5)).toBe(10);
    });

    it('Should curry a function.', () => {
        const sumWithFive = F.curry(sum, 2, 3);

        expect(sumWithFive(5)).toBe(10);
        expect(() => F.curry(10)).toThrowError(TypeError);
        expect(F.curry(sum, 2)).toBeInstanceOf(Function);

        const curriedSum = F.curry(sum);
        expect(curriedSum(1)(2)(3)).toBe(6);
    });

    it('Should compose functions', () => {
        const person = {
            name: 'stefan lazarevic',
        };
        const getCapitalizedNameFromObject = F.compose(string_capitalize, F.curry(object_pluck, 'name'));

        expect(getCapitalizedNameFromObject(person)).toBe('Stefan lazarevic');
    });

    it('Should pipe functions', () => {
        const person = {
            name: 'stefan lazarevic',
        };
        const getCapitalizedNameFromObject = F.pipe(F.curry(object_pluck, 'name'), string_capitalize);

        expect(getCapitalizedNameFromObject(person)).toBe('Stefan lazarevic');
    });

    it('Should run function only once', () => {
        function returnMyName() {
            return "Stefan Lazarevic";
        }

        const executeOnce = F.once(returnMyName);

        expect(() => F.once()).toThrowError(TypeError);
        expect(executeOnce()).toBe("Stefan Lazarevic");
        expect(executeOnce()).not.toBe("Stefan Lazarevic");
        expect(executeOnce()).toBe(undefined);
    });

    it('Should return memoized function', () => {
        const sum = (a, b) => a + b;
        const memoizedSum = F.memoize(sum);
        const memoizedSumWith5 = F.memoize(F.partial(sum, 5));

        expect(memoizedSum(5, 5)).toBe(10);
        expect(memoizedSum(5, 5)).toBe(10);
        expect(memoizedSumWith5(15)).toBe(20);
        expect(memoizedSumWith5(15)).toBe(20);
    });
});
