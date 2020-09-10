function thePianist(inputArray) {
    let n = Number(inputArray.shift());
    let list = inputArray.slice(0, n);

    for (let i = 0; i < list.length; i++) {
        list[i] = list[i].split("|");
    }

    for (let i = n; i < inputArray.length; i++) {
        if (inputArray[i] === "Stop") {
            break;
        }

        command = inputArray[i].split("|");

        if (command[0] === "Add") {
            command.shift();
            let isNew = true;
            for (let element of list) {
                if (element[0] === command[0]) {
                    isNew = false;
                    break;
                }
            }

            if (isNew) {
                list.push(command);
                console.log(`${command[0]} by ${command[1]} in ${command[2]} added to the collection!`);
            } else {
                console.log(`${command[0]} is already in the collection!`);
            }
        }

        if (command[0] === "Remove") {
            let piece = command[1];
            let isDeleted = false;
            for (let element of list) {
                if (element[0] === piece) {
                    isDeleted = true;
                    break;
                }
            }

            if (isDeleted) {
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

            list = list.filter(x => x[0] !== piece);
        }

        if (command[0] === "ChangeKey") {
            let piece = command[1];
            let key = command[2];
            let isChanged = false;
            for (let j = 0; j < list.length; j++) {
                if (list[j][0] === piece) {
                    list[j][2] = key;
                    isChanged = true;
                    break;
                }
            }

            if (isChanged) {
                console.log(`Changed the key of ${piece} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    list.sort((a, b) => a[0].localeCompare(b[0]));

    list.forEach(x => console.log(`${x[0]} -> Composer: ${x[1]}, Key: ${x[2]}`));

}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);