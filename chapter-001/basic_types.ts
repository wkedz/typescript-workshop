const value = 1234;
console.log(value, typeof value);

const str = "Alice";
console.log(str, typeof str);

const bool = true;
console.log(bool, typeof bool);

const days = {
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6,
    "sunday": 7
};
console.log(days, typeof days);

const arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr);

function add (a: number, b: number): number {
    return a + b;
}
console.log(add(2, 3), typeof add);

const everything = [value, str, bool, days, add, arr];

for (const item of everything) {
    console.log(item, typeof item);
}   


for (let i = 0; i < everything.length; i++) {
    const item = everything[i];
    console.log(item, typeof item);
}


const number1: number[] = [1, 2, 3];
const number2: Array<number> = [4, 5, 6];


const tuple: [string, number] = ["Alice", 30];
console.log(tuple, typeof tuple);

interface Person {
    firstName: string;
    lastName: string;
};

function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`
};

const persons: Person[] = []

persons.sort((first, second) => {
    const firstName = getFullName(first);
    const secondName = getFullName(second);
    return firstName.localeCompare(secondName);
});

enum Suit {
    Hearts,
    Diamonds,
    Clubs,
    Spades
};

let trumpSuit = Suit.Hearts;