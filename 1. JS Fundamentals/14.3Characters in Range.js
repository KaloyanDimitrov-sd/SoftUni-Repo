function charactersInRange(input1, input2) {
    let input1Num = input1.charCodeAt(0);
    let input2Num = input2.charCodeAt(0);
    let output = [];

    if (input1Num < input2Num) {
        for (let i = input1Num + 1; i < input2Num; i++) {
            output.push(String.fromCharCode(i));
        }
        console.log(output.join(" "));
    } else {
        for (let i = input2Num + 1; i < input1Num; i++) {
            output.push(String.fromCharCode(i));
        }
        console.log(output.join(" "));
    }


}

charactersInRange('a',
    'd');