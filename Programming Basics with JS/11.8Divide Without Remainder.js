function divideWithoutRemainder(input) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= input[0]; i++) {
        if (input[i] % 2 === 0) {
            p1++;
        }
        if (input[i] % 3 === 0) {
            p2++;
        }
        if (input[i] % 4 === 0) {
            p3++;
        }
    }
    
    console.log(`${(p1 / input[0] * 100).toFixed(2)}%`);
    console.log(`${(p2 / input[0] * 100).toFixed(2)}%`);
    console.log(`${(p3 / input[0] * 100).toFixed(2)}%`);
}

divideWithoutRemainder(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"]);
