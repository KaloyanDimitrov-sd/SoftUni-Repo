function godzillaVsKong(budget, statist, clothes) {
    budget = Number(budget);
    statist = Number(statist);
    clothes = Number(clothes);
    let dekor = 0.1 * budget;
    if (statist > 150) {
        clothes = 0.9 * clothes;
    }
    let costs = statist * clothes + dekor;
    if (budget < costs) {
        let missingMoney = costs - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${missingMoney.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - costs;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }

}

godzillaVsKong("20000","120","55.5")
godzillaVsKong("15437.62","186","57.99")
godzillaVsKong("9587.88","222","55.68")
