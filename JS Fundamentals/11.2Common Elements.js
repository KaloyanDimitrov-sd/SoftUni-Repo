function commonElements(inputArray1, inputArray2) {

    for (let i = 0; i <inputArray1.length; i++) {
        if (inputArray2.includes(inputArray1[i])) {
            console.log(inputArray1[i]);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);