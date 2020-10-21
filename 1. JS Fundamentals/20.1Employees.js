function employees(inputArray) {

    let employeesArray = [];

    class Employee {
        constructor(name, num) {
            this.name = name;
            this.num = num;
            this.print = () => console.log(`Name: ${name} -- Personal Number: ${num}`)
        }
    }

    for (let element of inputArray) {
        let [name, num] = [element, element.length];
        let person = new Employee(name, num);
        employeesArray.push(person);
    }

    employeesArray.forEach(x => x.print());

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);