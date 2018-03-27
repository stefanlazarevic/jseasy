const type = require('./types');

describe('Testing type checkers', () => {
    const _array = [1, 2, 3, 4, 5];
    const _string = "Hello World";
    const _object = {first: "Stefan", last: "Lazarevic"};
    const _function = function () { return {} };
    const _number = 10;
    const _json = '{"name": "Stefan", "last": "Lazarevic"}';
    const _boolean = true;
    const _null = null;
    const _undefined = undefined;
    const _NaN = NaN;
    const _date = new Date();

    describe('Test array type validator.', () => {
        it('Should return true if value is an array', () => {
            expect(type.is_array(_array)).toBe(true);
        });

        it('Should return false if value is not an array', () => {
            expect(type.is_array(_object)).toBe(false);
            expect(type.is_array(_number)).toBe(false);
            expect(type.is_array(_function)).toBe(false);
        });
    });

    describe('Test object type validator.', () => {
        it('Should return true if value is an object', () => {
            expect(type.is_object(_object)).toBe(true);
            expect(type.is_object(new _function())).toBe(true);
            expect(type.is_object(_function)).toBe(true); // Edge case -> Functions are first class objects.
            expect(type.is_object(_date)).toBe(true);
        });

        it('Should return false if value is not an object', () => {
            expect(type.is_object(_json)).toBe(false);
            expect(type.is_object(_boolean)).toBe(false);
            expect(type.is_object(_number)).toBe(false);
            expect(type.is_object(_NaN)).toBe(false);
            expect(type.is_object(_null)).toBe(false);
        });
    });

    describe('Test string type validator.', () => {
        it('Should return true if value is a string', () => {
            expect(type.is_string(_string)).toBe(true);
            expect(type.is_string(_json)).toBe(true);
        });
        it('Should return false if value is not a string', () => {
            expect(type.is_string(_number)).toBe(false);
            expect(type.is_string(_array)).toBe(false);
        });
    });

    describe('Test number type validator.', () => {
        it('Should return true if value is a number', () => {
            expect(type.is_number(_number)).toBe(true);
        });
        it('Should return false if value is not a number', () => {
            expect(type.is_number("4")).toBe(false);
            expect(type.is_number(_array)).toBe(false);
            expect(type.is_number(_function)).toBe(false);
            expect(type.is_number(_NaN)).toBe(false);
        });
    });

    describe('Test boolean type validator.', () => {
        it('Should return true if value is a boolean', () => {
            expect(type.is_boolean(_boolean)).toBe(true);
        });
        it('Should return false if value is not a boolean', () => {
            expect(type.is_boolean(_function)).toBe(false);
            expect(type.is_boolean(_json)).toBe(false);
            expect(type.is_boolean(_string)).toBe(false);
            expect(type.is_boolean(_array)).toBe(false);
        });
    });

    describe('Test function type validator.', () => {
        it('Should return true if value is a function', () => {
            expect(type.is_function(_function)).toBe(true);
        });
        it('Should return false if value is not a function', () => {
            expect(type.is_function(new _function())).toBe(false);
            expect(type.is_function(_string)).toBe(false);
            expect(type.is_function(_undefined)).toBe(false);
            expect(type.is_function(_array)).toBe(false);
            expect(type.is_function(_NaN)).toBe(false);
        });
    });

    describe('Test null type validator.', () => {
        it('Should return true if value is a null', () => {
            expect(type.is_null(_null)).toBe(true);
        });
        it('Should return false if value is not a null', () => {
            expect(type.is_null(_undefined)).toBe(false);
            expect(type.is_null(_string)).toBe(false);
            expect(type.is_null(_number)).toBe(false);
        });
    });

    describe('Test undefined type validator.', () => {
        it('Should return true if value is a undefined', () => {
            expect(type.is_undefined(_undefined)).toBe(true);
            expect(type.is_undefined(void 0)).toBe(true);
        });
        it('Should return false if value is not a undefined', () => {
            expect(type.is_undefined(_string)).toBe(false);
            expect(type.is_undefined(_null)).toBe(false);
            expect(type.is_undefined(_function)).toBe(false);
        });
    });

    describe('Test defined type validator.', () => {
        it('Should return true if value is defined', () => {
            expect(type.is_defined(_number)).toBe(true);
            expect(type.is_defined(_array)).toBe(true);
            expect(type.is_defined(_date)).toBe(true);
            expect(type.is_defined(_object)).toBe(true);
        });
        it('Should return false if value is not defined ', () => {
            expect(type.is_defined(_undefined)).toBe(false);
            expect(type.is_defined(_null)).toBe(false);
            expect(type.is_defined(_NaN)).toBe(false);
        });
    });

    describe('Test NaN type validator.', () => {
        it('Should return true if value is a NaN', () => {
            expect(type.is_NaN(_NaN)).toBe(true);
        });
        it('Should return false if value is not a NaN', () => {
            expect(type.is_NaN(_array)).toBe(false);
            expect(type.is_NaN(_number)).toBe(false);
            expect(type.is_NaN("0")).toBe(false);
            expect(type.is_NaN(_function)).toBe(false);
        });
    });

    describe('Test Date type validator.', () => {
        it('Should return true if value is a date', () => {
            expect(type.is_date(_date)).toBe(true);
        });
        it('Should return false if value is not a date', () => {
            expect(type.is_date(_number)).toBe(false);
            expect(type.is_date(_string)).toBe(false);
        });
    });

    describe('Test JSON type validator.', () => {
        it('Should return true if value is a json', () => {
            expect(type.is_json(_json)).toBe(true);
            expect(type.is_json(JSON.stringify(_object))).toBe(true);
        });
        it('Should return false if value is not a json', () => {
            expect(type.is_json(_object)).toBe(false);
            expect(type.is_json(_string)).toBe(false);
        });
    });

    describe('Test symbol type validator', () => {
        it('Should return true if value is a symbol.', () => {
            expect(type.is_symbol(Symbol('x'))).toBe(true);
        });
    });
});
