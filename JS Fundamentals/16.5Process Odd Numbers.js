function processOddNumbers(inputArray) {
    let filteredNums = inputArray.filter((x, i) => i % 2 !== 0);
    let doubledNums = filteredNums.map(x => x * 2);
    doubledNums.reverse();
    return doubledNums.join(" ")
}

processOddNumbers([10, 15, 20, 20, 25]);

