function worldTour(inputArray) {

    let stops = inputArray.shift();

    for (let element of inputArray) {
        let commands = element.split(":");

        if (commands[0] === "Add Stop") {
            let index = Number(commands[1]);
            let string = commands[2];

            if (stops.length > index && index > 0) {
                let first = stops.slice(0, index);
                let second = stops.slice(index);
                stops = first + string + second;
            }
            console.log(stops);
        }

        if (commands[0] === "Remove Stop") {
            let start = Number(commands[1]);
            let end = Number(commands[2]);

            if (stops.length > start && stops.length > end && start >= 0 && end >= 0) {
                let first = stops.slice(0, start);
                let second = stops.slice(end + 1);
                stops = first + second;
            }
            console.log(stops);
        }

        if (commands[0] === "Switch") {
            let oldString = commands[1];
            let newString = commands[2];
            let pattern = new RegExp(oldString,"g");

            stops = stops.replace(pattern, newString);



            console.log(stops);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

}

worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]
);