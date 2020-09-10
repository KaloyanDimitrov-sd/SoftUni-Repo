function vowelsSum(input) {
    let letter;
    let output = 0;
    for (let i = 0; i < input.length; i++) {
        letter = input[i]
        switch (letter) {
            case "a":
                output += 1;
                break;
            case "e":
                output += 2;
                break;
            case "i":
                output += 3;
                break;
            case "o" :
                output += 4;
                break;
            case "u":
                output += 5;
                break;
        }
    }
    console.log(output);
}

vowelsSum("hello");