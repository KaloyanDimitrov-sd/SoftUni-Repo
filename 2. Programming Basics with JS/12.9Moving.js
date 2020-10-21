function moving(inputArray) {
    let width = Number(inputArray[0]);
    let length = Number(inputArray[1]);
    let height = Number(inputArray[2]);
    let space = width * height * length;
    let i = 3;

    while (i < inputArray.length && inputArray[i] !== "Done") {

        space -= Number(inputArray[i]);
        i++
    }

    if (space < 0) {
        console.log(`No more free space! You need ${space * (-1)} Cubic meters more.`)
    }

    if (space >= 0) {
        console.log(`${space} Cubic meters left.`)
    }
}

moving(["10",
"1",
"2",
"4",
"6",
"Done"])