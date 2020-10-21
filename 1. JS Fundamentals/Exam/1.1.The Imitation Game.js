function imitationGame(inputArray) {

        let message = inputArray.shift();

    for (let element of inputArray) {

        if (element === "Decode") {
            break;
        }

        let command = element.split("|");

        if (command[0] === "Move") {
            let num = command[1];
            let secondPart = message.slice(0,num);
            let firstPart = message.slice(num);
            message = firstPart.concat(secondPart);
        }

        if (command[0] === "Insert") {
            let num = command[1];
            let letter = command[2];
            let firstPart = message.slice(0,num);
            let secondPart = message.slice(num);
            message = firstPart + letter + secondPart;
        }

        if (command[0] === "ChangeAll") {
            let messageArr = message.split("");
            let oldLetter = command[1];
            let newLetter = command[2];
            for (let i = 0; i < messageArr.length; i++) {
                messageArr[i] = messageArr[i].replace(oldLetter, newLetter);
            }
            message = messageArr.join("");
        }
    }

    console.log(`The decrypted message is: ${message}`);

}

imitationGame([ 'zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode' ]);