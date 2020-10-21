function racing(fuel, razhod, laps) {
    fuel = Number(fuel);
    razhod = Number(razhod);
    laps = Number(laps);

    for (let i = 1; i <= laps; i++) {
        fuel -= razhod;
        razhod -= 0.1;
        if (fuel < 0) {
            console.log(`You are out of fuel in round ${i}!`);
            break;
        }
    }
    if (fuel >= 0) {
        console.log("Congrats! You won the race!");
    }
}

racing("50", "5", "30")

