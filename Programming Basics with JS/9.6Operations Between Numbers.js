function operationsBetweenNumbers(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let result;
    let evenOdd;
    let isEven = true;
    if (operator === "+") {
        result = n1 + n2;
        isEven = result % 2 === 0
    } else if (operator === "-") {
        result = n1 - n2;
        isEven = result % 2 === 0
    } else if (operator === "*") {
        result = n1 * n2;
        isEven = result % 2 === 0
    } else if (operator === "/") {
        result = n1 / n2;
    } else {
        result = n1 % n2;
    }

    if (isEven) {
        evenOdd = "even";
    } else {
        evenOdd = "odd"
    }

    switch (operator) {
        case "+":
        case "-":
        case "*":
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
            break;
        case "/":
            if (n2 !== 0) {
                console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`)
            }
            break;
        case "%":
            if (n2 !== 0) {
                console.log(`${n1} ${operator} ${n2} = ${result}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`)
            }
            break;

    }
}

operationsBetweenNumbers("10", "12", "+")