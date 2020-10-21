function arrayManipulator(inputArray1, inputArray2) {
    let arrayCommands = [];

    for (let element of inputArray2) {
        arrayCommands = element.split(" ");
        switch (arrayCommands[0]) {
            case "add":
            case "addMany":
                inputArray1 = addElementsToArray(arrayCommands, inputArray1);
                break;
            case "contains":
                console.log(inputArray1.indexOf(Number(arrayCommands[1])));
                break;
            case "remove":
                inputArray1.splice(Number(arrayCommands[1]), 1);
                break;
            case "shift":
                inputArray1 = shiftPositionsOfArray(Number(arrayCommands[1]), inputArray1);
                break;
            case "sumPairs":
                inputArray1 = sumPairsOfArray(inputArray1);
                break;
            case "print":
                console.log("[ " + inputArray1.join(", ") + " ]");
                return;
        }
    }

    function addElementsToArray(arrCommands, array) {
        let index = arrCommands[1];

        for (let i = arrCommands.length - 1; i > 1; i--) {
            array.splice(index, 0, Number(arrCommands[i]));
        }
        return array;
    }

    function shiftPositionsOfArray(positions, array) {
        let num;
        for (let i = 0; i < positions; i++) {
            num = array.shift();
            array.push(num);
        }
        return array;
    }

    function sumPairsOfArray(array) {
        for (let i = 1; i < array.length; i++) {
            array[i] += array[i - 1];
            array.splice(i - 1, 1);
        }
    
        return array;
    }

}


arrayManipulator([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"]);

