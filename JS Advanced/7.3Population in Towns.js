function populationInTowns(inputArray) {

    let pattern = /\s*(?<town>[\w\s]+\b)\s*<->\s*(?<population>[\d]+)/;
    let output = {};

    for (let element of inputArray) {
        let data = element.match(pattern);
        let name = data.groups.town;
        let population = Number(data.groups.population);
        if (output[name]) {
            output[name] += population;
        } else {
            output[name] = population;
        }
    }

    for (let key in output) {
        console.log(`${key} : ${output[key]}`);
    }

}

populationInTowns(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);