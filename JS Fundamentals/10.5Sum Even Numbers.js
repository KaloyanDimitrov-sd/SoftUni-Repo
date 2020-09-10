function sumEvenNumbers(inputArray) {
    let num;
    let sum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        num = Number(inputArray[i]);
        if (num % 2 === 0) {
            sum += num;
        }
    }

    console.log(sum);

}


sumEvenNumbers(['1','2','3','4','5','6']);