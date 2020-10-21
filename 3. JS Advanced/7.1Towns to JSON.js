function townsToJSON(inputArray) {

    let output = [];
    let keys = inputArray.shift().split("|");
    let arr = [];
    keys.forEach(x => arr.push(x.trim()));
    arr.shift();
    arr.pop();

    for (let element of inputArray) {
        let valuesArr = element.split("|");
        let values = [];
        valuesArr.forEach(x => values.push(x.trim()));
        values.shift();
        values.pop();
        output.push({[arr[0]]: values[0], [arr[1]]: Number(Number(values[1]).toFixed(2)), [arr[2]]: Number(Number(values[2]).toFixed(2))})
    }

    console.log(JSON.stringify(output));

}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);