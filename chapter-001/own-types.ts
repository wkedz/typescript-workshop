class Person {
    constructor(public firstName: string, public lastName: string, public age?: number) {}


    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person("Alice", "Smith", 30);
console.log(person.getFullName());

interface PersonInterface {
    firstName: string;
    lastName: string;
    age?: number;
    getFullName(): string;
}

type integer = number;

type PersonType = [string, string, number?];

type Person3 = {
    firstName: string;
    lastName: string;
    age?: number;
    getFullName(): string;
}