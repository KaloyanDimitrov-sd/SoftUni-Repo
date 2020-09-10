function oddOccurrences(input) {

    let array = input.split(" ").map(x => x.toLowerCase());
    let obj = {}

    for (let element of array) {
        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    }

    let output = Object.entries(obj);
    output = output.filter(x => x[1] % 2 === 1);

    for (let i = 0; i < output.length; i++) {
        output[i] = output[i][0];
    }
    console.log(output.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');