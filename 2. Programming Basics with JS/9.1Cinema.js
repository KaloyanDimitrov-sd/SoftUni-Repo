function cinema(type, r, c) {
    r = Number(r);
    c = Number(c);
    let seats = r * c;

    if (type === "Premiere") {
        income = seats * 12;
    } else if (type === "Normal") {
        income = seats * 7.5;
    } else {
        income = seats * 5;
    }

    console.log(`${income.toFixed(2)} leva`)

}

cinema("Premiere","10","12")