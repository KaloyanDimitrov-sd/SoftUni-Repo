function minNumber(inputArray) {
    let i = 0;
    let min = Number(inputArray[0]);

    while (inputArray[i] !== "Stop") {
        if (min > Number(inputArray[i])) {
            min = Number(inputArray[i]);
        }
        i++
    }

    console.log(min);
}