function maxNumber(inputArray) {
    let i = 0;
    let max = Number(inputArray[0]);

    while (inputArray[i] !== "Stop") {
        if (max < Number(inputArray[i])) {
            max = Number(inputArray[i]);
        }
        i++
    }

    console.log(max);
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])