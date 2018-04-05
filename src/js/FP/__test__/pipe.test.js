const pipe = require('../pipe');
const to_stringCapitalized = require('../../Convertor/to_stringCapitalized');

describe('', () => {
    const greet = name => `Hello ${name}`;
    const greetName = pipe(to_stringCapitalized, greet);

    it('Should create composed function.', () => {
        expect(typeof pipe()).toBe('function');
        expect(greetName('stefan')).toBe('Hello Stefan');
    });
});
