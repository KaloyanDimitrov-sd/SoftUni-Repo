function smallestTwoNumbers(inputArray) {
    let sortedArray = inputArray.sort((a, b) => a - b);
    let firstTwoNums = sortedArray.slice(0,2);
    return firstTwoNums.join(" ");

}

console.log(smallestTwoNumbers([30, 15, 50, 5]))