const person = {
    firstName: 'John',
    lastName: 'Doe',
}

// person.age = 30;

interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}


const person2: Person = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
}

const person3: Person = {
    firstName: 'Alice',
    lastName: 'Johnson',
}

console.log(person2.age); // Output: 25
console.log(person3.age); // Output: undefined

function makePerson (name:string, surname: string, age?: number): Person {
    return {
        firstName: name,
        lastName: surname,
        age: age,
    }
}

function shodowPersonInfo(person: Person): void {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
}