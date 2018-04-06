/**
 * Function composition is the process of combining two or more functions
 * to produce new function.
 *
 * Composed function take data and process it through all pipes from right to left
 * producing new data. (f o g) => f(g(o));
 *
 * @memberof module:FP
 * @param {Functions} - List of functions to compose.
 * @return {Function} - Function that expect a value to compute.
 * @since 0.1.0
 * @see {@link https://en.wikipedia.org/wiki/Function_composition_(computer_science)|Function composition}
 * @example
 * const greet = name => `Hello ${name}`;
 * const greetName = compose(greet, string_capitalize);
 *
 * greetName('stefan'); // => Hello Stefan
 */
function compose() {
    const functions = arguments;
    let index = functions.length;
    return function composeValue(value) {
        --index;
        return (index > -1) ? composeValue(functions[index](value)) : value;
    };
}

module.exports = compose;
