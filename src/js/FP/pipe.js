/**
 * Pipe perform function composition like compose.
 *
 * The only difference between pipe and compose if that pipe takes function arguments from left to right,
 * and by that provides additional readability.
 *
 * @param {Functions} - List of functions to compose.
 * @return {Function} - Function that expect a value to compute.
 * @since 0.1.0
 * @see {@link https://en.wikipedia.org/wiki/Function_composition_(computer_science)|Function composition}
 * @example
 * const greet = name => `Hello ${name}`;
 * const greetName = compose(string_capitalize, greet);
 *
 * greetName('stefan'); // => Hello Stefan
 */
function pipe() {
    const functions = arguments;
    let index = -1;
    return function composeValue(value) {
        index++;
        return (index < functions.length) ? composeValue(functions[index](value)) : value;
    };
}

module.exports = pipe;
