function simpleCalculator(num1, num2, operator) {
    let solve;
    switch (operator) {
        case "multiply":
            solve = (a, b) => a * b;
            break;
        case "divide":
            solve = (a, b) => a / b;
            break;
        case "add":
            solve = (a, b) => a + b;
            break;
        case "subtract":
            solve = (a, b) => a - b;
            break;
    }

    return solve(num1, num2);
}