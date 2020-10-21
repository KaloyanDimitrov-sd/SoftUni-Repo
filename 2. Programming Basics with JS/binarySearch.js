function binarySearch(inputArray, num) {
    let newArray = [...inputArray];
    let i = Math.ceil(newArray.length / 2) - 1;

    while (Number(newArray[i]) !== num) {
        if (Number(newArray[i]) > num) {
            newArray = newArray.slice(0, i);
        } else {
            newArray = newArray.slice(i + 1);
        }
        if (i === 0) {
            break;
        }
        i = Math.ceil(newArray.length / 2) - 1;
    }

    if (num === Number(newArray[i])) {
        console.log(newArray[i]);
    } else {
        console.log(`There is no ${num} in array`);
    }
}



binarySearch([1, 4, 6, 9, 15, 20, 25, 30, 36], 9);