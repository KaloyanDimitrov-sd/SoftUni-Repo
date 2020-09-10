function walking(inputArray) {
    let steps = 0;
    let i = 0;

    while (i < inputArray.length) {
        if (!Number.isNaN(Number(inputArray[i]))) {
            steps += Number(inputArray[i]);
        }

        i++
    }

    if (steps >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${steps - 10000} steps over the goal!`)
    } else {
        console.log(`${10000 - steps} more steps to reach goal.`)
    }

}

walking(["1000",
"1500",
"2000",
"6500"])
