function numbersDivisibleBy9(input1, input2) {
    input1 = Number(input1);
    input2 = Number(input2);
    let sum = 0;

    for (let i = input1; i <= input2; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);

    for (let i = input1; i <= input2; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

numbersDivisibleBy9("99","200");
