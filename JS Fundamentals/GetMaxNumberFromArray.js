function getMaxNumberFromMultipleArrays(inputArray, maxNum) {
    if (maxNum === undefined) {
        maxNum = -Infinity;
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (Array.isArray(inputArray[i])) {
            let nestedMaxNum = getMaxNumberFromMultipleArrays(inputArray[i], maxNum);
            if (nestedMaxNum > maxNum) {
                maxNum = nestedMaxNum;
            }
        } else {

            if (maxNum < inputArray[i]) {
                maxNum = inputArray[i];
            }
        }
    }

    // console.log(maxNum);
    return (maxNum);
}


const result = getMaxNumberFromMultipleArrays([[1, 2, 20, -10, 5], [1, 23, [92, 31, 15, 122], [16, [14, 13]]], [93, 112]]);
console.log(result);