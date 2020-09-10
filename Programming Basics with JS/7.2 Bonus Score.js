function bonusScore(score) {
    score = Number(score);
    let bonus;

    if (score <= 100) {
        bonus = 5;
    } else if (score <= 1000) {
        bonus = 0.2 * score;
    } else {
        bonus = 0.1 * score;
    }
    let isEven = score % 2;
    let end5 = score % 5;

    if (isEven === 0 ) {
        bonus = bonus + 1;
    } else if (end5 === 0) {
        bonus = bonus + 2;
    }
    total = score + bonus;

    console.log(bonus);
    console.log(total);
}

bonusScore("20")