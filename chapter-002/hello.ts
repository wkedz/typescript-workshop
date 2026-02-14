/**
 * Declares a variable that exists elsewhere (e.g., in a global scope, external library, or JavaScript).
 * The `declare` keyword tells TypeScript that this variable exists at runtime but is not defined in this file.
 * This is useful for type-checking without providing an implementation.
 * @type {string}
 */
declare let firstName: string;

firstName = "Alice";