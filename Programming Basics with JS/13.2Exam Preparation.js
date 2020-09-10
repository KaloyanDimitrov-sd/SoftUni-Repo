function examPreparation(inputArray) {
    let badRatings = 0;
    let rating = 0;
    let exams = 0;
    let examName = inputArray[1];
    let succeed = true;
    let i = 1;

    while (inputArray[i] !== "Enough") {
        if (i % 2 !== 0) {
            exams++
            examName = inputArray[i];
        } else if (Number(inputArray[i]) > 4) {
            rating += Number(inputArray[i]);
        } else {
            rating += Number(inputArray[i]);
            badRatings++;
        }

        if (badRatings === Number(inputArray[0])){
            console.log(`You need a break, ${badRatings} poor grades.`)
            succeed = false;
            break;
        }

        i++;
    }

    if (succeed) {
        console.log(`Average score: ${(rating/exams).toFixed(2)}`);
        console.log(`Number of problems: ${exams}`);
        console.log(`Last problem: ${examName}`);
    }
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])