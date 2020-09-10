function sorting(inputArray) {
    inputArray.sort((a, b) => a - b);
    let output = [];

    while (inputArray.length > 0) {
        output.push(inputArray.pop());
        if (inputArray.length > 0) {
            output.push(inputArray.shift());
        }
    }

    console.log(output.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);