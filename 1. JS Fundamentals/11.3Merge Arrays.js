function mergeArrays(inputArray1, inputArray2) {
    let output = [];
    for (let i = 0; i < inputArray1.length; i++) {
        if (i % 2 === 0) {
            output[i] = Number(inputArray1[i]) + Number(inputArray2[i]);
        } else {
            output[i] = String(inputArray1[i]) + String(inputArray2[i]);
        }
    }

    console.log(output.join(" - "));

}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])