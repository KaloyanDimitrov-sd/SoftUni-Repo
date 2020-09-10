function schoolGrades(inputArray) {

    let studentGrades = {};

    for (let element of inputArray) {
        let arr = element.split(" ");
        let name = arr.shift();

        if (studentGrades[name]) {
            studentGrades[name] = studentGrades[name].concat(arr);
        } else {
            studentGrades[name] = arr;
        }
    }

    let studentGradesArr = Object.entries(studentGrades);

    for (let element of studentGradesArr) {
        element[1] = element[1].map(Number);
    }

    studentGradesArr.sort((a, b) => {
        let sumA = 0;
        let sumB = 0;
        for (let x of a[1]) {
            sumA += x;
        }
        for (let x of b[1]) {
            sumB += x;
        }
        return sumA/a[1].length - sumB/b[1].length;
    });

    studentGrades = {};

    for (let element of studentGradesArr) {
        let [name, arr] = [element[0], element[1]];
        studentGrades[name] = arr;
    }

    for (let key in studentGrades) {
        console.log(`${key}: ${studentGrades[key].join(", ")}`);
    }

}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);