class Person {

    constructor(fName, sName) {
        this.firstName = fName;
        this.lastName = sName;
    };

    set fullName(name) {
        let pattern = /(?<n1>[A-Z][a-z]+) (?<n2>[A-Z][a-z]+)/;
        let obj = name.match(pattern);
        if (pattern.test(name)) {
            this.firstName = obj.groups.n1;
            this.lastName = obj.groups.n2;
        };
    };

    get fullName() {
        return this.firstName + " " + this.lastName;
    };
};




let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Peter";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla