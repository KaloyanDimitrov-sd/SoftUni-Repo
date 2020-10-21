function bombNumbers(inputArray1, inputArray2) {
    let bombNum = inputArray2[0];
    let power = inputArray2[1];
    let i = null;
    let sum = 0;

    while (true) {
        i = inputArray1.indexOf(bombNum);
        if (i !== -1) {
            let numsToBeDeleted = power * 2 + 1;
            let num = i - power;
            if (num < 0) {
                numsToBeDeleted += num;
                num = 0;
            }
            inputArray1.splice(num, numsToBeDeleted);
        } else {
            break;
        }
    }

    for (let element of inputArray1) {
        sum += element;
    }

    console.log(sum);

}

bombNumbers([1, 9, 3, 3, 4, 2, 9, 3, 9, 9, 1],
    [9, 2]);