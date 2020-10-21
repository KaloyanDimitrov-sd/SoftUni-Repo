function evenAndOddSubtraction(inputArray) {
    let num;
    let sum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        num = Number(inputArray[i]);
        if (num % 2 === 0) {
            sum += num;
        } else {
            sum -= num;
        }
    }

    console.log(sum);

}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);