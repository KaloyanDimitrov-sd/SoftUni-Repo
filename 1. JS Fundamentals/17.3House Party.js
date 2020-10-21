function houseParty(inputArray) {
    let list = [];

    for (let element of inputArray) {
        let [name, y, command] = element.split(" ");

        if (command === "going!") {
            if (!list.includes(name)) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`)
            }
        } else {
            if (list.includes(name)) {
                list = list.filter(x => x !== name);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }

    list.map(x => console.log(x));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);