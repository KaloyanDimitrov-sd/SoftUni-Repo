class Company {
    constructor() {
        this.departments = [];
        this.addEmployee = (username, salary, position, department) => {
            let isDepartmentNew = true;

            if (username === "" || salary === "" || position === "" || department === "") {
                throw new TypeError("Invalid input!");
            };

            if (username === null || salary === null || position === null || department === null) {
                throw new TypeError("Invalid input!");
            };

            if (username === undefined || salary === undefined || position === undefined || department === undefined) {
                throw new TypeError("Invalid input!");
            };

            if (salary < 0) {
                throw new TypeError("Invalid input!");
            };
            
            for (let element of this.departments) {
                if (element.department === department) {
                    let newEmployee = {username, salary, position};
                    element.employees.push(newEmployee);
                    isDepartmentNew = false;
                };
            };

            if (isDepartmentNew) {
                let obj = {department, employees: [{username, salary, position}]};
                this.departments.push(obj);
            };

            return `New employee is hired. Name: ${username}. Position: ${position}`
        };
        this.bestDepartment = () => {
            let averageSalary, sum;

            for (let element of this.departments) {
                sum = 0;

                for (let empl of element.employees) {
                    sum += empl.salary;
                };

                averageSalary = sum / element.employees.length;
                element.salary = averageSalary;
            };

            this.departments.sort((a,b) => a.averageSalary - b.averageSalary);
            console.log(`Best department is: ${this.departments[0].department}`);
            console.log(`Average salary: ${this.departments[0].salary}`);
            for (let element of this.departments[0].employees) {
                console.log(`${element.username} ${element.salary} ${element.position}`);
            };
        };
    };
};

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
c.bestDepartment();