function sumByTown(inputArray) {

    let output = {};

    for (let i = 0; i < inputArray.length; i += 2) {
        let town = inputArray[i];
        let income = inputArray[i + 1];
        if (output[town]) {
            output[town] += Number(income);
        } else {
            output[town] = Number(income);
        }
    }

    console.log(JSON.stringify(output));

}

sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);