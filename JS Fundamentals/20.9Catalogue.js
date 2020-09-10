function catalogue(inputArray) {

    inputArray.sort((a,b) => a.localeCompare(b));
    let letter = inputArray[0][0];
    inputArray.unshift(letter);

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i][0] !== letter) {
            letter = inputArray[i][0];
            inputArray.splice(i, 0, letter);
        }
    }

    for (let element of inputArray) {
        if (element.length === 1) {
            console.log(element);
        } else {
            let output = element.split(" : ").join(": ");
            console.log(`  ${output}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);