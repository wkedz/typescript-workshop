let count = 0;

interface Person {
    firstName: string;
    lastName: string;
}

function getFullName(person: Person): string {
    count++;
    return `${person.firstName} ${person.lastName}`;
}


function nauveSortPersons (persons: Person[]): Person[] {
    return persons.slice().sort((first, second) => {
        const firstName = getFullName(first);
        const secondName = getFullName(second);
        return firstName.localeCompare(secondName);
    });
}

function schwartzSortPersons ( persons: Person[]): Person[] {
    const tuples: [Person, string][] = persons.map(person => [person, getFullName(person)]);
    tuples.sort((first, second) => first[1].localeCompare(second[1]));
    return tuples.map(tuple => tuple[0]);
}

const programmers: Person[] = [
{ firstName: 'Donald', lastName: 'Knuth'},
{ firstName: 'Barbara', lastName: 'Liskow'},
{ firstName: 'Lars', lastName: 'Bak'},
{ firstName: 'Guido', lastName: 'Van Rossum'},
{ firstName: 'Anders', lastName: 'Hejslberg'},
{ firstName: 'Edsger', lastName: 'Dijkstra'},
{ firstName: 'Brandon', lastName: 'Eich'},
];

count = 0;
const sortedNaive = nauveSortPersons(programmers);
console.log(count);

count = 0;
const sortedSchwartz = schwartzSortPersons(programmers);
console.log(count);