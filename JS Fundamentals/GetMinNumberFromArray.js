function getMinNumberFromMultipleArray(inputArray, minNumber) {
    if (minNumber === undefined) {
        minNumber = Infinity;
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (Array.isArray(inputArray[i])) {
            let nestedMinNumber = getMinNumberFromMultipleArray(inputArray[i], minNumber);
            if (nestedMinNumber < minNumber) {
                minNumber = nestedMinNumber;
            }
        } else {

            if (inputArray[i] < minNumber) {
                minNumber = inputArray[i];
            }
        }
    }
    return (minNumber);

}

const result = getMinNumberFromMultipleArray([[1, 2, 20, -10, 5], [1, 23, [92, 31, 15, 122], [16, [14, 13]]], [93, 112]]);
console.log(result);