function maxSequenceOfEqualElements(inputArray) {
    let num = Number(inputArray[0]);
    let repeats = 1;
    let newReps = 1;
    let output = [];


    for (let i = 1; i < inputArray.length; i++) {
        while (Number(inputArray[i]) === Number(inputArray[i-1])) {
            newReps++;
            i++
        }
        if (newReps > repeats) {
            repeats = newReps;
            num = Number(inputArray[i-1]);
        }
        newReps = 1;
    }

    for (let j = 0; j < repeats; j++) {
        output.push(num);
    }

    console.log(output.join(" "))
}


maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);