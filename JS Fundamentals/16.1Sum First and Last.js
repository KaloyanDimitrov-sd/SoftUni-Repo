function sumFirstAndLast(inputArray) {
    let firstNum = Number(inputArray.shift());
    let lastNum = Number(inputArray.pop());

    return firstNum + lastNum;
}

sumFirstAndLast(['20', '30', '40']);