function distinctArray(inputArray) {
    let output = [];

    for (let element of inputArray) {
        if (!output.includes(element)) {
            output.push(element);
        }
    }

    console.log(output.join(" "));
}

distinctArray([1, 2, 3, 4]);