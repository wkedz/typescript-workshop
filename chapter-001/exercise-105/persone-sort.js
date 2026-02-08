var count = 0;
function getFullName(person) {
    count++;
    return "".concat(person.firstName, " ").concat(person.lastName);
}
function nauveSortPersons(persons) {
    return persons.slice().sort(function (first, second) {
        var firstName = getFullName(first);
        var secondName = getFullName(second);
        return firstName.localeCompare(secondName);
    });
}
function schwartzSortPersons(persons) {
    var tuples = persons.map(function (person) { return [person, getFullName(person)]; });
    tuples.sort(function (first, second) { return first[1].localeCompare(second[1]); });
    return tuples.map(function (tuple) { return tuple[0]; });
}
var programmers = [
    { firstName: 'Donald', lastName: 'Knuth' },
    { firstName: 'Barbara', lastName: 'Liskow' },
    { firstName: 'Lars', lastName: 'Bak' },
    { firstName: 'Guido', lastName: 'Van Rossum' },
    { firstName: 'Anders', lastName: 'Hejslberg' },
    { firstName: 'Edsger', lastName: 'Dijkstra' },
    { firstName: 'Brandon', lastName: 'Eich' },
];
count = 0;
var sortedNaive = nauveSortPersons(programmers);
console.log(count);
count = 0;
var sortedSchwartz = schwartzSortPersons(programmers);
console.log(count);
