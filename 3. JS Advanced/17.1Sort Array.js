function sortArray(inputArray, order) {
    if (order === "asc") {
        inputArray.sort((a, b) => a - b);
    } else {
        inputArray.sort((a, b) => b - a);
    }

    return inputArray;
}

sortArray([14, 7, 17, 6, 8], 'asc');