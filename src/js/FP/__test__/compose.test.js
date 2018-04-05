const compose = require('../compose');
const to_stringCapitalized = require('../../Convertor/to_stringCapitalized');

describe('', () => {
    const greet = name => `Hello ${name}`;
    const greetName = compose(greet, to_stringCapitalized);

    it('Should create composed function.', () => {
        expect(typeof compose()).toBe('function');
        expect(greetName('stefan')).toBe('Hello Stefan');
    });
});
