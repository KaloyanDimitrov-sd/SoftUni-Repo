function condenseArrayToNumber(inputArray) {
    let condensed = [...inputArray];
    while (condensed.length !== 1) {
        for (let j = 0; j < condensed.length - 1; j++) {
            condensed[j] = Number(condensed[j]) + Number(condensed[j + 1]);
        }
        condensed.pop();
    }
    console.log(condensed[0]);
}

condenseArrayToNumber([5,0,4,1,2]);