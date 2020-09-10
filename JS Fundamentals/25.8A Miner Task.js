function aMinerTask(inputArray) {

    let mined = {} ;

    for (let i = 0; i < inputArray.length; i += 2) {
        let recource = inputArray[i];
        let quantity = inputArray[i + 1];
        if (mined[recource]) {
            mined[recource] += Number(quantity);
        } else {
            mined[recource] = Number(quantity);
        }
    }

    for (let key in mined) {
        console.log(`${key} -> ${mined[key]}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);