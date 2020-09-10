function sortNumbers(inputArray) {
    let sortedArray = [];
    let minNum = Number(inputArray[0]);
    let inputArrayCopy = [];
    // inputArrayCopy = inputArray;
    // for(let i=0;i < inputArray.length; i++){
    //     inputArrayCopy[i] = inputArrayCopy[i];
    // }

    //let inputArrayCopy = new Array(inpput);
    inputArrayCopy = [...inputArray];

    while (inputArrayCopy.length !== sortedArray.length) {
        for (let i = 0; i < inputArrayCopy.length; i++) {
            if (inputArrayCopy[i] === "used") {
                continue;
            } else if (minNum > inputArrayCopy[i]) {
                minNum = Number(inputArrayCopy[i]);
            }
        }

        sortedArray.push(minNum);

        for (let j = 0; j < inputArrayCopy.length; j++) {
            if (minNum === Number(inputArrayCopy[j])) { 
                inputArrayCopy[j] = "used";
            }
        }
        minNum = Infinity;
    }

    console.log(sortedArray);
    return(sortedArray)
}

sortNumbers([10, 5, 7, 9, 34, 8, 45]);