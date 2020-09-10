function coin(inputArray) {
    let change = Math.round(Number(inputArray[0]) * 100);
    let coins = 0;

    let availableCoins = [200, 100, 50, 20, 10, 5, 2, 1];

    let i = 0;
    while (true) {
        if (change >= availableCoins[i]) {
            coins++;
            change -= availableCoins[i];
        } else {
            i++;
        }

        if (change === 0) {
            break;
        }
    }


    
    // while (change > 0) {
    //     if (change >= 200) {
    //         change = change - 200;
    //         coins++
    //     } else if (change >= 100) {
    //         change = change - 100;
    //         coins++
    //     } else if (change >= 50) {
    //         change = change - 50;
    //         coins++
    //     } else if (change >= 20) {
    //         change = change - 20;
    //         coins++
    //     } else if (change >= 10) {
    //         change = change - 10;
    //         coins++
    //     } else if (change >= 5) {
    //         change = change - 5;
    //         coins++
    //     } else if (change >= 2) {
    //         change = change - 2;
    //         coins++
    //     } else if (change >= 1) {
    //         change = change - 1;
    //         coins++
    //     }
    // }

    console.log(coins)

}

coin(["0.59"])
