function maxNumber(inputArray) {
    let maxNum;
    let isTop = true;
    let output = [];

    for (let i = 0; i < inputArray.length; i++) {
        maxNum = Number(inputArray[i]);
        for (let j = i + 1; j < inputArray.length; j++) {
            if (maxNum <= Number(inputArray[j])) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            output.push(maxNum);
        }
        isTop = true;
    }

    console.log(output.join(" "));

}

maxNumber([27, 19, 42, 2, 13, 45, 48])