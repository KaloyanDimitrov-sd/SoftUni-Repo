function volley(year, p, h) {
    p = Number(p);
    h = Number(h);
    let play = 3 / 4 * (48 - h) + 2 / 3 * p + h;
    if (year === "leap") {
        play = play * 1.15;
    }
    console.log(Math.floor(play))
}

volley("normal",
    "3",
    "2")