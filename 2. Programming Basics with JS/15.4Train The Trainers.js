function trainTheTrainers(inputArray) {
    let n = Number(inputArray[0]);
    let text = inputArray[1];
    let sumOfGrades = 0;
    let avSumOfGrades = 0;
    let num = 0;

    for (let i = 2; i < inputArray.length; i++) {
        if (Number.isNaN(Number(inputArray[i]))) {
            avSumOfGrades += sumOfGrades / n;
            console.log(`${text} - ${(sumOfGrades / n).toFixed(2)}.`)
            text = inputArray[i];
            sumOfGrades = 0;
            num++
            continue;
        }
        sumOfGrades += Number(inputArray[i]);
    }
    
    console.log(`Student's final assessment is ${(avSumOfGrades / num).toFixed(2)}.`)

}

trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])