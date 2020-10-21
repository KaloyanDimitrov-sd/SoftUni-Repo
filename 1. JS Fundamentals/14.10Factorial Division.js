function factorialDivision(num1, num2) {

    function factorialNum(num) {
        let result = null;
        if (num === 0) {
            result = 1;
        }
        if (num > 0) {
            result = num * factorialNum(num - 1);
        }
        return result;
    }

    let output = factorialNum(num1) / factorialNum(num2);

    console.log(output.toFixed(2));
}

factorialDivision(5, 2);


