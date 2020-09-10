function specialNumbers(input) {
    let numArray = [];
    let firstDigit = "";
    let secondDigit = "";
    let thirdDigit = "";
    let fourthDigit = "";
    let output = "";

    for (let i = 1; i <= 9; i++) {
        if (Number(input) % i === 0) {
            numArray.push(i);
        }
    }

    for (let i = 0; i < numArray.length; i++) {
        firstDigit = String(numArray[i]);
        for (let j = 0; j < numArray.length; j++) {
            secondDigit = String(numArray[j]);
            for (let k = 0; k < numArray.length; k++) {
                thirdDigit = String(numArray[k]);
                for (let m = 0; m < numArray.length; m++) {
                    fourthDigit = String(numArray[m]);
                    output += `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit} `;
                }
            }
        }
    }

    console.log(output);
}

specialNumbers(["3"])

