function building(inputArray) {
    let index = "L";
    let output = "";

    for (let i = inputArray[0]; i >= 1; i--) {
        for (let j = 0; j <= inputArray[1] - 1; j++) {
            output += String(`${index}${i}${j} `)
        }
        console.log(output);
        output = "";
        if (i % 2 === 0) {
            index = "A";
        } else {
            index = "O";
        }
    }
}

building(["6", "4"])