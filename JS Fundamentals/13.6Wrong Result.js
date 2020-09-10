function wrongResult(num1, num2, num3) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    if (num1 === 0 || num2 === 0 || num3 === 0) {
        return "Positive";
    }

    let isPositive = (x) => {
        if (x > 0) {
            return 0;
        } else {
            return 1;
        }
    }

    let sum = isPositive(num1) + isPositive(num2) + isPositive(num3);

    if (sum % 2 === 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}