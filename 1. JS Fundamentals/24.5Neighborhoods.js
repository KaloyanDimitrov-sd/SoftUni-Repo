function neighborhoods(inputArray) {

    let arr = inputArray[0].split(", ");
    inputArray.shift();
    let neighborhoodsObj = {};

    for (let element of arr) {
        neighborhoodsObj[element] = [];
    }

    for (let element of inputArray) {
        let [place, name] = element.split(" - ");
        if (neighborhoodsObj[place]) {
            neighborhoodsObj[place].push(name);
        }
    }

    let array = Object.entries(neighborhoodsObj);
    array.sort((a, b) => b[1].length - a[1].length);

    for (let element of array) {
        console.log(`${element[0]}: ${element[1].length}`);
        element[1].forEach(x => console.log(`--${x}`));
    }

}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);