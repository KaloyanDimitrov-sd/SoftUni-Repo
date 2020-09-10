function firstAndLastKNumbers(inputArray) {
    let firstKElements = inputArray.slice(1, inputArray[0]+1);
    let lastKElements = inputArray.slice(inputArray.length - inputArray[0]);

    console.log(firstKElements.join(" "));
    console.log(lastKElements.join(" "));    

}

firstAndLastKNumbers([2, 
    7, 8, 9]);