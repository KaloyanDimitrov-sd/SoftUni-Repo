function searchForNumber(inputArray1, inputArray2) {
    let getNums = inputArray2[0];
    let deleteNums = inputArray2[1];
    let searchedNum = inputArray2[2];
    let count = 0;

    let arr = inputArray1.slice(0, getNums);
    arr.splice(0, deleteNums);

    for (let element of arr) {
        if (element === searchedNum) {
            count++;
        }
    }

    console.log(`Number ${searchedNum} occurs ${count} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);