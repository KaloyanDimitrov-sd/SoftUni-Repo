function sequence(inputArray) {
    n = Number(inputArray[0]);
    let output = 1;

    while (output <= n) {
        console.log(output);
        output = output * 2 + 1;
    }

}

sequence(["31"])