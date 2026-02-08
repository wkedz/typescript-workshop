# Typescript Workshop

## tsc

`tsc --watch [path_to_file]` - it will watch the changes in code. 

## npm

`npm init -y` - create new project
`npm i lodash` - install lodash
`npm install @types/lodash` - install types lodash

## types 

try to use @types libraties, it provides libraries from DefinutekyTyped - type riche

## Chapter 1: TypeScript Fundamentals 

This chapter introduces the limitations of JavaScript that led to the creation of TypeScript, specifically the lack of static typing and features for large-scale application development,. It covers the setup of the TypeScript compiler (tsc) and the tsconfig.json file to manage compilation options,. The chapter details the core concepts of the type system, explaining primitive types (strings, numbers, booleans), arrays, tuples, enums, and special types like any, unknown, and never,,. It also demonstrates how TypeScript uses type inference to detect errors during development rather than at runtime.

## Chapter 2: Declaration Files 

This chapter focuses on how TypeScript interacts with existing JavaScript code and third-party libraries. It explains the role of declaration files (.d.ts), which describe the shape of code without containing implementation logic, allowing the IDE to provide intellisense and type checking,. The chapter guides you through creating declaration files from scratch using the declare keyword and using the DefinitelyTyped repository to install types for external libraries like Lodash,.

## Chapter 3: Functions 

Functions are presented as the basic building blocks of applications. This chapter explores different ways to define functions, including named functions, function expressions, and arrow functions, while clarifying the behavior of the this keyword in different contexts,,. It covers advanced concepts such as optional and default parameters, rest parameters, closures, and currying,,. The chapter also touches on organizing functions within modules using import and export and testing them using ts-jest,.

## Chapter 4: Classes and Objects 

This chapter transitions into Object-Oriented Programming (OOP) by defining classes as blueprints for creating objects. It explains the instantiation process using constructors and the new keyword,. The chapter demonstrates how to encapsulate data and behavior within a class, use access modifiers, and integrate interfaces to define the shape of data passed to class constructors, ensuring type safety when creating objects,.

## Chapter 5: Interfaces and Inheritance 

Here, the focus shifts to structural contracts and code reuse. Interfaces are described as descriptors that define the structure of objects, classes, and function arguments without dictating implementation,. The chapter explains inheritance (both single-level and multi-level) using the extends keyword, allowing child classes to inherit and override properties and methods from parent classes,. It also covers access modifiers like private and protected to control data visibility.

## Chapter 6: Advanced Types 

This chapter introduces sophisticated type modeling tools. It covers Type Aliases for creating reusable references to types and Type Literals for restricting values to specific strings or numbers,. It delves into Intersection Types (&), which combine multiple types into one, and Union Types (|), which allow a value to be one of several types,. It also introduces Index Types for creating objects with dynamic properties.

## Chapter 7: Decorators 

Decorators are presented as a metaprogramming feature used to modify or annotate classes and their members. The chapter explains the concept of reflection and the need to enable specific compiler flags like experimentalDecorators,. It details the five types of decorators: class, method, accessor, property, and parameter decorators. The chapter demonstrates how to use decorator factories to address cross-cutting concerns like logging, authentication, and performance measurement without cluttering business logic,.

## Chapter 8: Dependency Injection in TypeScript 

This chapter explores the Dependency Injection (DI) design pattern, which separates the creation of objects from their usage to improve modularity and testing,. It contrasts DI with Inversion of Control (IoC) and provides examples of DI implementation in frameworks like Angular and Nest.js,. The chapter also provides a practical guide to using InversifyJS, an IoC container, to manage dependencies using decorators like @injectable and @inject,.

## Chapter 9: Generics and Conditional 

Types Generics are introduced as a way to create reusable code components that work with a variety of types while maintaining type safety,. The chapter covers generic interfaces, classes, and functions, explaining how they act as placeholders for types to be specified later,. It also introduces generic constraints to limit the types that can be used and Conditional Types, which allow for logic within the type system (e.g., T extends U ? X : Y),.

## Chapter 10: Event Loop and Asynchronous Behavior 

This chapter investigates the JavaScript runtime environment, emphasizing its single-threaded nature and the Event Loop. It contrasts multi-threaded server approaches with the asynchronous, non-blocking model of the web,. The chapter explains how the call stack and task queue manage execution order and covers environment APIs like setTimeout and XMLHttpRequest (AJAX) for handling asynchronous tasks,,.

## Chapter 11: Higher-Order Functions and Callbacks 

This chapter focuses on Higher-Order Functions (HOCs)—functions that accept or return other functions,. It explains the necessity of callbacks in Node.js for handling asynchronous operations without blocking the main thread,. The chapter addresses "callback hell" (deeply nested callbacks) and strategies to avoid it, such as modularization and chaining,.

## Chapter 12: Guide to Promises in TypeScript

Promises are introduced as a cleaner alternative to callbacks for managing asynchronous operations. The chapter details the three states of a Promise (pending, fulfilled, rejected) and how to interact with them using .then(), .catch(), and .finally(),,. It explores static methods like Promise.all and Promise.allSettled for handling multiple concurrent operations and discusses how TypeScript enhances promises with generics for return type inference,,.

## Chapter 13: Async/Await in TypeScript

This chapter covers async and await, described as "syntactic sugar" over Promises that allows asynchronous code to be written in a sequential, synchronous style. It explains that the async keyword ensures a function returns a promise, while await pauses execution until a promise resolves,. The chapter also discusses error handling using try/catch blocks and compares the compilation output of async/await for different ECMAScript targets,.

## Chapter 14: TypeScript and React 

The final chapter focuses on building user interfaces with React and TypeScript. It compares functional components (preferred) versus class components and explains how to type props,. It covers state management using React Hooks (useState) and Context API to avoid prop drilling,. The chapter also touches on routing with React Router, styling strategies, and integrating with Firebase for backend services,.