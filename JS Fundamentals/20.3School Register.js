function schoolRegister(inputArray) {

    let registerArr = [];

    for (let element of inputArray) {
        let studentData = element.split(",");
        let nameArr = studentData[0].split(" ");
        let name = nameArr[nameArr.length - 1];
        let gradeArr = studentData[1].split(" ");
        let grade = Number(gradeArr[gradeArr.length - 1]) + 1;
        let scoreArr = studentData[2].split(" ");
        let score = Number(scoreArr[scoreArr.length - 1]);
        if (score >= 3) {
            let studentObj = { name: name, grade: grade, score: score };
            registerArr.push(studentObj);
        }
    }

    registerArr.sort((a, b) => a.grade - b.grade);

    let grade = registerArr[0].grade;
    let listOfStudents = [];
    let count = 0;
    let scoreSum = 0;

    for (let element of registerArr) {
        if (element.grade === grade) {
            listOfStudents.push(element.name);
            count++;
            scoreSum += element.score;
        } else {
            console.log(`${grade} Grade`);
            console.log(`List of students: ${listOfStudents.join(", ")}`);
            console.log(`Average annual grade from last year: ${(scoreSum/count).toFixed(2)}`);
            console.log(" ");
            listOfStudents = [element.name];
            count = 1;
            scoreSum = element.score;
            grade = element.grade;
        }
    }

    console.log(`${grade} Grade`);
    console.log(`List of students: ${listOfStudents.join(", ")}`);
    console.log(`Average annual grade from last year: ${(scoreSum/count).toFixed(2)}`);

}

schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);