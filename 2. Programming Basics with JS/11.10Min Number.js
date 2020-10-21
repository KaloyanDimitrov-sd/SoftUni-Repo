function minNumber(input) {
    let min = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        if (min > Number(input[i])) {
            min = Number(input[i]);
        }
    }
    console.log(min);
}


minNumber(["3",
"-10",
"20",
"-30"])