function cake(inputArray) {
    let remainingCake = Number(inputArray[0]) * Number(inputArray[1]);
    let i = 2;

    while (i < inputArray.length) {
        if (inputArray[i] === "STOP") {
            break;
        } else {
            remainingCake -= inputArray[i];
        }

        i++
    }

    if (remainingCake > 0) {
        console.log(`${remainingCake} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${remainingCake * -1} pieces more.`)
    }

}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])