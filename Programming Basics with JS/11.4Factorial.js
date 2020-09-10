function factorial(input) {
    input = Number(input);
    let output = 1;

    for (let i = 1; i <= input; i++ ) {
        output *= i;
    }

    console.log(output);
}

factorial("8");