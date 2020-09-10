function addAndSubtract(inputArray) {
    newArray = [...inputArray];
    sumInputArray = 0;
    sumNewArray = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] % 2 === 0) {
            newArray[i] += i;
            sumInputArray += inputArray[i];
            sumNewArray += newArray[i];
        } else {
            newArray[i] -= i;
            sumInputArray += inputArray[i];
            sumNewArray += newArray[i];
        }
    }

    console.log(newArray); //.toString()
    console.log(sumInputArray);
    console.log(sumNewArray);
}


addAndSubtract([5, 15, 23, 56, 35]);