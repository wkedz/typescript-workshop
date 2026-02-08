const any_variable : any = "this is any variable";
const unknown_variable : unknown = "this is unknown variable";

console.log(any_variable.toUpperCase()); // this is valid, but can cause runtime error if any_variable is not a string
console.log(unknown_variable.toUpperCase()); // this will cause a compile-time error, as unknown_variable is of type unknown