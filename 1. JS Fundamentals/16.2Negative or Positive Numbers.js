function negativeOrPositiveNumbers(inputArray) {
    let newArray = [];

    for (let element of inputArray) {
        if (element >= 0){
            newArray.push(element);
        } else {
            newArray.unshift(element);
        }
    }

    for (let element of newArray) {
        console.log(element);
    }
}

negativeOrPositiveNumbers([7, -2, 8, 9]);