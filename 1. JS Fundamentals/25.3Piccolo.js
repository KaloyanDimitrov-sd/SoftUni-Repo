function piccolo(inputArray) {

    let parking = new Set;

    for (let element of inputArray) {
        let [command, number] = element.split(", ");
        if (command === "IN") {
            parking.add(number);
        } else {
            parking.delete(number);
        }
    }

    let array = Array.from(parking);
    array.sort((a, b) => a.localeCompare(b));
    array.map(x => x = x[1]);
    array.forEach(x => console.log(x));
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);