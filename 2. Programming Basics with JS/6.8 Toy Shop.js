function toyShop(price, puzzle, doll, bear, minion, truck) {
    price = Number(price);
    puzzle = Number(puzzle);
    doll = Number(doll);
    bear = Number(bear);
    minion = Number(minion);
    truck = Number(truck);
    let total = puzzle * 2.6 + doll * 3 + bear * 4.1 + minion * 8.2 + truck * 2;
    let toys = puzzle + doll + bear + minion + truck;
    if (toys >= 50) {
        total = 0.75 * total;
    }
    let profit = 0.9 * total;
    if (profit >= price) {
        let moneyLeft = profit - price;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyMissing = price - profit;
        console.log(`Not enough money! ${moneyMissing.toFixed(2)} lv needed.`)
    }
}

toyShop("40.8","20","25","30","50","10" )