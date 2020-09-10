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

let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

console.log(p.firstName);
console.log(p.toString());