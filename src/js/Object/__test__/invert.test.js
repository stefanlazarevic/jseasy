const invert = require('../invert');

describe('', () => {
    const person = {
        fname: 'Stefan',
        lname: 'Lazarevic',
        click: function() { console.log('ok'); },
        next: undefined
    };

    it('Throws TypeError if non object is passed.', () => {
        expect(() => invert()).toThrowError(TypeError);
    });

    it('Returns object with inverted key value pairs when array is passed.', () => {
        expect(invert(['a', 'b', 'c'])).toEqual({
            'a': '0',
            'b': '1',
            'c': '2',
        });
    });

    it('Returns object with inverted key value pairs when object is passed.', () => {
        expect(invert(person)).toEqual({
            'Stefan': 'fname',
            'Lazarevic': 'lname',
        });
    });
});
