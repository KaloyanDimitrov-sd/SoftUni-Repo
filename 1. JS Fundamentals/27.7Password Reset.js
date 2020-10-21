function passwordReset(inputArray) {

    let password = inputArray.shift();

    for (let element of inputArray) {
        let commandsArray = element.split(" ");
        
        if (commandsArray[0] === "Done") {
            break;
        }

        if (commandsArray[0] === "TakeOdd") {
            let newPassword = "";
            for (let i = 1; i < password.length; i += 2) {
                newPassword += password[i];
            }
            password = newPassword;
            newPassword = "";
            console.log(password);
        }

        if (commandsArray[0] === "Cut") {
            let index = Number(commandsArray[1]);
            let length = Number(commandsArray[2]);
            let part1 = password.substring(0, index);
            let part2 = password.substring(index + length);
            password = part1 + part2;
            part1 = "";
            part2 = "";
            console.log(password);
        }

        if (commandsArray[0] === "Substitute") {
            let substring = commandsArray[1];
            let substitute = commandsArray[2];
            if (password.includes(substring)) {
                while (password.includes(substring)) {
                    password = password.replace(substring, substitute);
                }
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }

    console.log(`Your password is: ${password}`);

}

passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]);