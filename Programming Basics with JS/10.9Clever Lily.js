function cleverLily(age, x, p) {
    age = Number(age);
    x = Number(x);
    p = Number(p);
    let sum = 0;
    let money = 0;
    let toys = 0;
    let total;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toys++;
        } else {
            money += 10;
            sum = sum + money - 1;
        }
    }

    total = (sum + toys * p).toFixed(2);

    if (total >= x) {
        console.log(`Yes! ${(total - x).toFixed(2)}`);
    } else {
        console.log(`No! ${(x - total).toFixed(2)}`);
    }
}

cleverLily("10", "170", "6");