function journey(budget, season) {
    budget = Number(budget);
    let destination = "Europe";
    let typeRest = "Hotel";
    let cost = 0.9 * budget;

    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            typeRest = "Camp";
            cost = 0.3 * budget;
        } else {
            cost = 0.7 * budget;
        }
    } else if (budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            typeRest = "Camp";
            cost = 0.4 * budget;
        } else {
            cost = 0.8 * budget;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeRest} - ${cost.toFixed(2)}`)
}

journey("50", "summer")