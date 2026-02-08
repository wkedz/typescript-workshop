Origins and Configuration

Q: What primary limitations of JavaScript led to the creation of TypeScript? 
A: JavaScript was originally designed for small-scale scripting and lacks features needed for large-scale application development, most notably static typing (it is loosely typed) and features for code organization like robust module support,.

Q: What is the role of the tsconfig.json file and how is it generated? 
A: It stores compiler options (like the target ECMAScript version) so they don't have to be typed in the command line every time. It is generated using the command tsc --init,.

Type System Basics

Q: How does Type Inference work in TypeScript? 
A: If an explicit type annotation is not provided, TypeScript "guesses" the type of a variable based on the value assigned to it. If you try to assign a different type later, it will throw an error,.

Q: What is the difference between the any and unknown types? 
A:
• any: Disables type checking completely. It allows you to access any property or method on the variable without safety checks.
• unknown: A safer alternative to any. It can hold any value, but you must perform a type check (narrowing) before performing operations on it,.

Q: What does the never type represent? 
A: It represents a value that never occurs. It is used for functions that never return (e.g., functions that throw an error or contain an infinite loop) or for code paths that are unreachable,.

Q: What is an Enum and when should it be used? 
A: An Enum (Enumeration) allows you to define a set of named constants. It is useful when a variable can only have one of a predefined set of values (e.g., North, South, East, West),.

Data Structures and Interfaces

Q: How does a Tuple differ from a standard Array in TypeScript? 
A: While a standard array typically holds multiple elements of the same type (e.g., number[]), a Tuple has a fixed number of elements where the type of each element at a specific index is known (e.g., [string, number] for a name and age pair),.

Q: What is the purpose of an Interface? 
A: An interface defines the structure (or "shape") of an object. It acts as a contract that enforces that an object has specific properties and types,.

Q: How do you define an optional property in an interface or function? 
A: By adding a question mark (?) after the property or parameter name (e.g., age?: number;). This allows the object or function call to omit that specific value without causing an error.

Q: What is a Type Alias? 
A: It is a way to give a new name to a type. It can be used to name primitives, tuples, unions, or complex object structures (e.g., type StringOrNumber = string | number;),