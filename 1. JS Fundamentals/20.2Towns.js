function towns(inputArray) {

    let town, latitude, longitude, townObj;
    let townArray = [];


    for (let element of inputArray) {
        let townData = element.split(" | ");
        [town, latitude, longitude] = [townData[0], Number(townData[1]).toFixed(2), Number(townData[2]).toFixed(2)];
        townObj = {
            town: town,
            latitude: latitude,
            longitude: longitude
        }
        townArray.push(townObj);
    }

    townArray.forEach(x => console.log(x));

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);