function sumOfTwoNumbers(inputArray) {
    let start = Number(inputArray[0]);
    let end = Number(inputArray[1]);
    let magicNum = Number(inputArray[2]);
    let combination = 0;
    let isCombFound = false;

    for (let i = start; i <= end; i++) {
        if (isCombFound) {
            break;
        }

        for (let j = start; j <= end; j++) {
            combination++
           
            if (i + j === magicNum) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
                isCombFound = true;
                break;
            }
        }

    }

    if (!isCombFound) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }


}

sumOfTwoNumbers(["23",
"24",
"20"])
