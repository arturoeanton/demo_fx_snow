class Person {
    firstName: string;
    lastName: string;
}

function greeter(): Person {
    let person: Person
    person.firstName = "Arturo"
    person.lastName = "Anton"
    return person
}