function train(inputArray) {
    let wagons = inputArray.shift();
    let wagonsArray = wagons.split(" ");
    let maxCapacity = inputArray.shift();

    for (let element of inputArray) {
        let newArray = element.split(" ");
        let command1 = newArray[0];
        let command2 = newArray[1];

        if (command1 === "Add") {
            wagonsArray.push(command2);
        } else {

            for (let i =0; i < wagonsArray.length; i++) {
                if (Number(wagonsArray[i]) + Number(command1) <= maxCapacity) {
                    wagonsArray[i] = Number(wagonsArray[i]) + Number(command1);
                    break;
                }
            }
        }
    }

    console.log(wagonsArray.join(" "));

}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);