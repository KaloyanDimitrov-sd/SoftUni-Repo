function fishingBoat(budget, season, fishers) {
    budget = Number(budget);
    fishers = Number(fishers);
    let price;
    let discount;

    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }

    if (fishers <= 6 ) {
        discount = 0.9;
    } else if (fishers <= 11) {
        discount = 0.85;
    } else {
        discount = 0.75;
    }

    if (fishers % 2 === 0 && season !== "Autumn") {
        discount = discount * 0.95;
    }

    let total = price * discount;
    if (total <= budget) {
        console.log(`Yes! You have ${(budget-total).toFixed(2)} leva left.`)
    }
    else {console.log(`Not enough money! You need ${(total-budget).toFixed(2)} leva.`)
}

}
fishingBoat(2000,
    "Winter",
    13)
    