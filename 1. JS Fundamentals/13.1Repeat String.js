function repeatString(input, n) {
    let output = "";

for (let i = 0; i < Number(n); i++) {
    output += input;
}
    return output;
}

repeatString("String", "2");