function getPersons() {
    class Person {
        constructor(fName, lName, age, email) {
            this.firstName = fName;
            this.lastName = lName;
            this.age = age;
            this.email = email;
            this.toString = function() {
                return(`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`);
            }

        }
    }

    let arr = [
        {"firstName": "Anna", "lastName": "Simpson", "age": 22, "email": "anna@yahoo.com"},
        {"firstName": "SoftUni"},
        {"firstName": "Stephan", "lastName": "Johnson", "age": 25},
        {"firstName": "Gabriel", "lastName": "Peterson", "age": 24, "email": "g.p@gmail.com"}
    ];

    let array = [];

    for (let element of arr) {
        let person = new Person(element.firstName, element.lastName, element.age, element.email)
        array.push(person)
    }

    return array;

}

getPersons();