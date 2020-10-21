function equalSumsEvenOddPosition(inputArray) {
    let even = 0;
    let odd = 0;
    let output = "";

    for (num = Number(inputArray[0]); num <= Number(inputArray[1]); num++) {
        let textnum = String(num);
        for (let j = 0; j < textnum.length; j++) {
            if (j % 2 === 0) {
                even += Number(textnum[j]);
            } else {
                odd += Number(textnum[j]);
            }
        }

        if (even === odd) {
            output += `${textnum} `;
        }

        even = 0;
        odd = 0;
    }
    console.log(output);
}

equalSumsEvenOddPosition(["123456",
"124000"])