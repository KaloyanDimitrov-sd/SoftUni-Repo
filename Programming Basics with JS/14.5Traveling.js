function traveling(inputArray) {
    let destination = inputArray[0];
    let sumNeeded = inputArray[1];
    let sum = 0;

    for (let i = 2; i < inputArray.length; i++) {
        if (inputArray[i] === "End") {
            break;
        }
        if (Number.isNaN(Number(inputArray[i]))) {
            destination = inputArray[i];
            i++
            sumNeeded = inputArray[i];
            continue;
        } else {
            sum += Number(inputArray[i]);
        }

        if (sum >= sumNeeded) {
            sum = 0;
            console.log(`Going to ${destination}!`)
        }
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
