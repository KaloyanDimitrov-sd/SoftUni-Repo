function accountBalance(inputArray) {
    let total = 0;
    let i = 0;

    while (inputArray[i] !== "NoMoreMoney") {
        if (inputArray[i] >= 0) {
            total += Number(inputArray[i]);
            console.log(`Increase: ${(Number(inputArray[i])).toFixed(2)}`);
        } else {
            console.log("Invalid operation!");
            break;
        }
        i++
    }
    console.log(`Total: ${total.toFixed(2)}`);
}


accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
