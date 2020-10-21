function graduation(inputArray) {
    let name = inputArray[0];
    let exclude = 0;
    let sumOfGrades = 0;
    let i = 1;
    
    while (i < inputArray.length) {
        if (Number(inputArray[i]) < 4){
            exclude++;
        }
        if (exclude === 2){
            console.log(`${name} has been excluded at ${i-1} grade`);
            break;
        }
        sumOfGrades += Number(inputArray[i]);
        i++
    }

    if (exclude < 2) {
        console.log(`${name} graduated. Average grade: ${(sumOfGrades / (i-1)).toFixed(2)}`)
    }
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])