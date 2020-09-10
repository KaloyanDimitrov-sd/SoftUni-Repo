function invalidNumber(num) {
    num = Number(num);
    if (!(num >= 100 && num <= 200 || num === 0)) {
        console.log("invalid");
    }
}