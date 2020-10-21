function arrayRotation(inputArray, n) {
    let output = [...inputArray];
    let newIndex;

    for (let i = 1; i <= n; i++) {
        newIndex = output.shift();
        output.push(newIndex);
    }

    console.log(output.join(" "));

}


arrayRotation([51, 47, 32, 61, 21], 2);