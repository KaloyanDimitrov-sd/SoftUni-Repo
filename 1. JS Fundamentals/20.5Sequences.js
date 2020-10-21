function sequences(inputArray) {

    let set = new Set;
    let output = [];

    for (let element of inputArray) {
        let arr = JSON.parse(element);
        arr.sort((a, b) => b - a);
        set.add(JSON.stringify(arr));
    }

    for (let element of set) {
        output.push(JSON.parse(element));
    }

    output.sort((a, b) => a.length - b.length);

    output.forEach(x => console.log(`[${x.join(", ")}]`));

}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);