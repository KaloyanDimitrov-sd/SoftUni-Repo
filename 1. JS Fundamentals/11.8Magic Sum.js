function magicSum(inputArray, magicNum) {

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (Number(inputArray[i]) + Number(inputArray[j]) === magicNum) {
                console.log(`${inputArray[i]} ${inputArray[j]}`)
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8],
    27)