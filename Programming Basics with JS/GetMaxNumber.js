function getMaxNumber(input) {
    let array = input[0];
    let maxNum = array[0];

    for (let i = 0; i < input.length; i++) {
        array = input[i];
        for (let j = 0; j < array.length; j++) {
            if (maxNum < array[j]) {
                maxNum = array[j];
            }
        }
    }

    console.log(maxNum);
    return(maxNum);

}

getMaxNumber([[1, 5, 9, 99, 5, 5], [3, 5, 9, 55], [6, 66, 223, 12]]);