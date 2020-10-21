function makeADictionary(inputArray) {
    let dictionary = [];
    let obj = {};

    for (let element of inputArray) {
        obj = JSON.parse(element);
        arr = Object.entries(obj);
        dictionary.push(arr[0]);
    }

    dictionary.sort((a, b) => a[0].localeCompare(b[0]));

    let dictionaryObj = {}

    for (let element of dictionary) {
        dictionaryObj[element[0]] = element[1];
    }

    for (let key in dictionaryObj) {
        console.log(`Term: ${key} => Definition: ${dictionaryObj[key]}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
