function getMaxNumberFromMultipleArrays(inputArray) {
    let maxNum = -Infinity;
    let elementValue = null;
    for (let i = 0; i < inputArray.length; i++) {
        if (Array.isArray(inputArray[i])) {
            elementValue = getMaxNumberFromMultipleArrays(inputArray[i]);
        } else {
            elementValue = inputArray[i]
        }

        if (maxNum < elementValue) {
            maxNum = elementValue;
        }
    }

    // console.log(maxNum);
    return (maxNum);
}


const result = getMaxNumberFromMultipleArrays([[1, 2, 20, -10, 5], [1, 23, [92, 31, 15, 122], [16, [14, 13]]], [93, 112]]);
console.log(result);