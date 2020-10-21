function metricConverter(num, input, output) {
    num = Number(num);
    let newNum;
    if (input === "m") {
        if (output === "cm") {
            newNum = num * 100;
        } else {
            newNum = num * 1000;
        }
    } else if (input === "cm") {
        if (output === "mm") {
            newNum = num * 10;
        } else {
            newNum = num / 100;
        }
    } else {
        if (output === "cm") {
            newNum = num / 10;
        } else {
            newNum = num / 1000;
        }
    }

    console.log(newNum.toFixed(3))
}