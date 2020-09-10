function skiTrip(days, room, evaluation) {
    let nights = Number(days) - 1;
    let price;
    let discount = 0;

    if (room === "apartment") {
        price = 25;
        if (nights < 10) {
            discount = 0.3;
        } else if (nights > 15) {
            discount = 0.5;
        } else {
            discount = 0.35;
        }
    } else if (room === "president apartment") {
        price = 35;
        if (nights < 10) {
            discount = 0.1;
        } else if (nights > 15) {
            discount = 0.2;
        } else {
            discount = 0.15;
        }
    } else {
        price = 18;
    }
    let cost = price * nights * (1 - discount);

    if (evaluation === "positive") {
        console.log((1.25 * cost).toFixed(2));
    } else {
        console.log((0.9 * cost).toFixed(2));
    }
}

skiTrip("14", "apartment", "positive");