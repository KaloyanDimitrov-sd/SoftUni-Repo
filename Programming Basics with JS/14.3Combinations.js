function combinations(inputArray) {
    let n = Number(inputArray[0]);
    let combination = 0;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= n; k++) {

                if ((i + j + k) === n) {
                    combination++;
                }
            }
        }
    }

    console.log(combination);

}

combinations(["25"])