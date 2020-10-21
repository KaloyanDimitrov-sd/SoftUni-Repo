function addAndSubtract(num1, num2, num3) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let newNum = sum(num1, num2);
    let result = subtract(newNum, num3);
    return result;
}