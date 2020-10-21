function tournamentOfChristmas(inputArray) {
    let wins = 0;
    let losses = 0;
    let daywins = 0;
    let daylosses = 0;
    let moneyRaised = 0;

    for (let i = 1; i < inputArray.length; i++) {

        while (inputArray[i] !== "Finish") {
            if (inputArray[i] === "win") {
                wins++;
            } else if (inputArray[i] === "lose") {
                losses++;
            }
            i++;
        }

        if (wins > losses) {
            daywins++;
            moneyRaised += wins * 20 * 1.1;
        } else if (losses > wins) {
            daylosses++;
            moneyRaised += wins * 20;
        }
        wins = 0;
        losses = 0;
    }

    if (daywins > daylosses) {
        moneyRaised *= 1.2;
        console.log(`You won the tournament! Total raised money: ${moneyRaised.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyRaised.toFixed(2)}`)
    }
}


tournamentOfChristmas(['2',
    'volleyball',
    'win',
    'football',
    'lose',
    'basketball',
    'win',
    'Finish',
    'golf',
    'win',
    'tennis',
    'win',
    'badminton',
    'win',
    'Finish'])

// tournamentOfChristmas(['3',
//     'darts',
//     'lose',
//     'handball',
//     'lose',
//     'judo',
//     'win',
//     'Finish',
//     'snooker',
//     'lose',
//     'swimming',
//     'lose',
//     'squash',
//     'lose',
//     'table tennis',
//     'win',
//     'Finish',
//     'volleyball',
//     'win',
//     'basketball',
//     'win',
//     'Finish'])