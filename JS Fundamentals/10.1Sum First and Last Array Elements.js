function sumFirstAndLastArrayElements(inputArray) {
    let first = Number(inputArray[0]);
    let last = Number(inputArray.pop());
    console.log(first + last);
}

sumFirstAndLastArrayElements(['20', '30', '40']);