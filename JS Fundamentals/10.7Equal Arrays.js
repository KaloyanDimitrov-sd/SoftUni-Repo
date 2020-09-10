function equalArrays(inputArray1, inputArray2) {
    let index;
    let areArraysEqual = true;
    let sum = 0;

    for (let i = 0; i < inputArray1.length; i++) {
        if(Number(inputArray1[i]) !== Number(inputArray2[i])) {
            index = i;
            areArraysEqual = false;
            break;
        } else {
            sum += Number(inputArray1[i]);
        }
    }

    if(areArraysEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    }
}


equalArrays(['10','20','30'], ['10','20','30']);