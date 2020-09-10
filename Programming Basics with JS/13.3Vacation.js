function vacation(inputArray) {
    let money = Number(inputArray[1]);
    let plusOrMinus = 1;
    let consecutive = 0;
    let days = 0;
    let i = 2;


    while (i < inputArray.length) {
        if (inputArray[i] === "save") {
            plusOrMinus = 1;
            consecutive = 0;
            days++
        } else if (inputArray[i] === "spend") {
            plusOrMinus = -1;
            consecutive++
            days++
        }

        if (consecutive === 5) {
            console.log("You can't save the money.");
            console.log(`${days}`)
            break;
        }

        if (!Number.isNaN(Number(inputArray[i]))) {
            money = money + Number(inputArray[i]) * plusOrMinus;
        }

        if (money < 0) {
            money = 0;
        }

        if (money >= Number(inputArray[0])) {
            console.log(`You saved the money for ${days} days.`)
        }

        i++
    }

} 


vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])