function arrayManipulations(inputArray) {
    let output = inputArray[0].split(" ");

    function addNum(num) {
        output.push(num);
        return output;
    }

    function removeNum(num) {
        output = output.filter(x => !(Number(x) === Number(num)));
        return output;
    }

    function removeAtIndex(num) {
        output.splice(num, 1);
    }

    function insertNumAtIndex(num, i) {
        output.splice(i, 0, num);
    }

    for (let i = 1; i < inputArray.length; i++) {
        let arr = inputArray[i].split(" ");
        let operation = arr[0];
        let number = arr[1];
        let index = arr[2];

        switch (operation) {
            case "Add":
                addNum(number);
                break;
            case "Remove":
                removeNum(number);
                break;
            case "RemoveAt":
                removeAtIndex(number);
                break;
            case "Insert":
                insertNumAtIndex(number, index);
                break;
        }
    }

    console.log(output.join(" "))

}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);