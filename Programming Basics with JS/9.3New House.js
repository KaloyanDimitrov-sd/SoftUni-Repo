function newHouse(flowers, amount, budget) {
    amount = Number(amount);
    budget = Number(budget);
    let price;
    let discount = 0;

    switch (flowers) {
        case "Roses":
            price = 5;
            if (amount > 80) {
                discount = 10;
            }
            break;
        case "Dahlias":
            price = 3.8;
            if (amount > 90) {
                discount = 15;
            }
            break;
        case "Tulips":
            price = 2.8;
            if (amount > 80) {
                discount = 15;
            }
            break;
        case "Narcissus":
            price = 3;
            if (amount < 120) {
                discount = -15;
            }
            break;
        case "Gladiolus":
            price = 2.5;
            if (amount < 80) {
                discount = -20;
            }
            break;
    }

    let total = amount * price * (1 - discount / 100);

    if (total <= budget) {
        console.log(`Hey, you have a great garden with ${amount} ${flowers} and ${(budget - total).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`)
    }

}

newHouse("Roses", "55", "250");